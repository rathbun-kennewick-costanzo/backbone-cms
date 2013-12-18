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
  bodyMarkdown: {
    type: String,
    required: true
  },
  bodyHtml: {
    type: String,
    required: true
  },
  bodyExcerpt: {
    type: String,
    required: true
  },
  pageTitle: {
    type: String,
    required: true
  },
  metaDescription: {
    type: String,
    required: true
  },
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