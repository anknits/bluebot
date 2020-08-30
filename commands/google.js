const Entry = require('../models/entry');
const https = require('https');

module.exports = {
    name: 'google',
    description: "returns top 5 google search results for given argument",
    // the following function is executed when a message like !google args is received
    async execute(message, args) {

        const apikey = process.env.apikey;
        const cx = process.env.cx;
        const apiToQuery = `https://www.googleapis.com/customsearch/v1?key=${apikey}&cx=${cx}&q=${args}&num=5`;

        // search google
        https.get(apiToQuery, (res) => {
            let data = "";
            // Consolidate chunks of data recieved
            res.on("data", (chunk) => {
                data += chunk;
            });
            // The whole response has been received
            res.on("end", () => {
                const jsonData = JSON.parse(data);
                // If response contains error, show error
                if (jsonData.error) {
                    console.error("An error occurred while issuing a google search request. Error: " + jsonData.error);
                    message.channel.send("An error occurred while issuing a google search request. Error: " + jsonData.error);
                }
                // else send top 5 links
                else {
                    for (let item of jsonData.items) {
                        message.channel.send(item.link);
                    }
                }
            });
        }).on("error", (err) => {
            console.error("An error occurred while issuing a google search request. Error: " + err.message);
            message.channel.send("An error occurred while issuing a google search request. Error: " + err.message);
        });

        // save search to db
        try {
            await Entry.create({ entry: args });
        }
        catch (err) {
            console.error("An error occurred while saving the search to your history. Error: " + err);
            message.channel.send("An error occurred while saving the search to your history. Error: " + err);
        }
    }
}