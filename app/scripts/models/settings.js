define([
    'backbone'
  ],
  function(Backbone) {
    'use strict';

    /* Return a model class definition */
    return Backbone.Model.extend({
      urlRoot: "/api/v1/settings",

      initialize: function() {
        console.log("initialize a Settings model");
      },

      defaults: {
        siteTitle: "",
        primaryEmail: "",
        description: "",
        facebook: "",
        github: "",
        google: "",
        linkedin: "",
        pinterest: "",
        twitter: "",
        vimeo: "",
        youtube: ""
      },

    });
  });