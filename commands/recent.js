module.exports = {
    name: 'recent',
    description: "searches through user command history",
    execute(message, args) {
        message.channel.send(`hey i found these in your search history ${args}`);
        // search db
    }
}