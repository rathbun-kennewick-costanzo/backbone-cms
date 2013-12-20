var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Portfolio Schema
 */
var PortfolioEntrySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  bodyMarkdown: String,
  bodyHtml: String,
  bodyExcerpt: String,
  pageTitle: String,
  metaDescription: String,
  imageDataURI: String,
  slug: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    unique: true
  },
  sortTags: [String],
  date: {
    type: Date,
    required: true
  },
  sortingId: Number,
  draft: {
    type: Boolean,
    required: true
  }
});

mongoose.model('PortfolioEntries', PortfolioEntrySchema, "portfolio_entries");