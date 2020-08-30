# bluebot
a discord bot that can perform google search and remember search history
This application was created for the challenge listed here: https://github.com/bluestacks/backend-developer-challenge

This bot when invited to a server listens to messages starting with "!". This is known as prefix. What follows prefix is a command. 
There are 3 commands that this app understands and replies to, ignoring all others.
# Commands
1. !hi - replies hey
2. !google abc - replies with the top 5 links when searching google.com for "abc" and saves "abc" to search history database
3. !recent xyz - replies with matches in previous searches (search history database) to "xyz"

# Permissions required by the bot are 
1. Send Messages
2. Embed Links
3. Read Message History

# Dependencies:
1. discord.js
2. mongoose

# Dev-Dependencies:
1. nodemon

# Config / Environment variables:
1. bottoken - required to log bot in to discord 
2. cx - Programmable Search Engine ID
3. apikey - the secret key to authenticate a request when using googleapi
4. collectionName - mongodb collection name to save search data to
5. mongodbConnectionString - the connection string used to connect to mongodb database
