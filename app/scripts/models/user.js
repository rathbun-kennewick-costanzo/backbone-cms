define([
    'backbone'
  ],
  function(Backbone) {
    'use strict';

    /* Return a model class definition */
    return Backbone.Model.extend({
      urlRoot: "/api/v1/PortfolioEntries",
      initialize: function() {
        console.log("initialize a User model");
      },

      defaults: {},

    });
  });