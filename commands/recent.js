const Entry = require('../entry');

module.exports = {
    name: 'recent',
    description: "searches through user command history",
    async execute(message, args) {
        // search db
        try {
            var entries = await Entry.find({ $text: { $search: args } });
            if (entries == null || entries.length == 0) {
                message.channel.send(`Sorry. I found no matching results in your search history`);
            }
            else {
                var arrayOfEntries = new Array();
                for (var e of entries) arrayOfEntries.push(e.entry);
                message.channel.send(arrayOfEntries.join(", "));
            }
        }
        catch (err) {
            console.log("An error occurred while searching through your history. Error: " + err);
            message.channel.send("An error occurred while searching through your history. Error: " + err);
        }
    }
}