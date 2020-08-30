const Entry = require('../models/entry');

module.exports = {
    name: 'recent',
    description: "searches through user's google command history",
    // the following function is executed when a message like !recent args is received
    async execute(message, args) {
        // search database for args
        try {
            const entries = await Entry.find({ $text: { $search: args } });
            // if no result is found, apologize
            if (entries == null || entries.length == 0) {
                message.channel.send(`Sorry. I found no matching results in your search history`);
            }
            // else send the results as comma and space separated values
            else {
                const arrayOfEntries = new Array();
                for (var e of entries) arrayOfEntries.push(e.entry);
                message.channel.send(arrayOfEntries.join(", "));
            }
        }
        catch (err) {
            console.error("An error occurred while searching through your history. Error: " + err);
            message.channel.send("An error occurred while searching through your history. Error: " + err);
        }
    }
}