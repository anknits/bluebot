module.exports = {
    name: 'google',
    description: "returns top 5 google search results for given argument",
    execute(message, args) {
        message.channel.send(`hey you googled ${args}`);
        // search google

        // save args to db
    }
}