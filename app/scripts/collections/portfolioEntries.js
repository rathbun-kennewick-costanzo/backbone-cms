define([
    'backbone',
    'models/portfolioEntry'
  ],
  function(Backbone, PortfolioEntry) {
    'use strict';

    /* Return a collection class definition */
    return Backbone.Collection.extend({
      initialize: function() {
        console.log("initialize a Portfolioentries collection");
      },
      url: "/api/v1/PortfolioEntries",
      model: PortfolioEntry

    });
  });