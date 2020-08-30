const Entry = require('../entry');

module.exports = {
    name: 'google',
    description: "returns top 5 google search results for given argument",
    async execute(message, args) {
        // TODO: search google

        // save search to db
        try{
            await Entry.create({entry: args});
        }
        catch(err){
            console.log("An error occurred while saving the search to your history. Error: " + err);
            message.channel.send("An error occurred while saving the search to your history. Error: " + err);
        }
        
    }
}