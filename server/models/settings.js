var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var SettingsSchema = new Schema({
  siteTitle: {
    type: String,
    required: true
  },
  primaryEmail: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  facebook: {
    link: String,
    icon: String
  },
  github: {
    link: String,
    icon: String
  },
  google: {
    link: String,
    icon: String
  },
  linkedin: {
    link: String,
    icon: String
  },
  pinterest: {
    link: String,
    icon: String
  },
  twitter: {
    link: String,
    icon: String
  },
  vimeo: {
    link: String,
    icon: String
  },
  youtube: {
    link: String,
    icon: String
  }
});

mongoose.model('Settings', SettingsSchema, 'settings');