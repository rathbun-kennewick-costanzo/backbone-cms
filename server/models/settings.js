var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var SettingsSchema = new Schema({
  siteTitle: String,
  primaryEmail: String,
  description: String,
  facebook: String,
  github: String,
  google: String,
  linkedin: String,
  pinterest: String,
  twitter: String,
  vimeo: String,
  youtube: String
});

mongoose.model('Settings', SettingsSchema, 'settings');