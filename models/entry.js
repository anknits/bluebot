const mongoose = require('mongoose');

const entrySchema = mongoose.Schema({
    entry: {
        type: String,
        text: true,
        required: true
    },
    createdOn: {
        type: Date,
        required: true,
        default: Date.now()
    },
    expiresOn: {
        type: Date,
        required: false
    }
});
// make sure an text index exists on the entry field
entrySchema.index({ entry: 'text' });

module.exports = mongoose.model('Entry', entrySchema, process.env.collectionName);