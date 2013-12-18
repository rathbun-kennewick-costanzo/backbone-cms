define([
    'backbone'
  ],
  function(Backbone) {
    'use strict';

    /* Return a model class definition */
    return Backbone.Model.extend({

      url: "/api/v1/PortfolioEntries",

      initialize: function() {
        console.log("initialize a Portfolioentry model");
      },

      defaults: {
        title: "",
        bodyMarkdown: "",
        bodyHtml: "",
        bodyExcerpt: "TEMPORARY_DEFAULT",
        pageTitle: "TEMPORARY_DEFAULT",
        metaDescription: "TEMPORARY_DEFAULT",
        slug: "TEMPORARY_DEFAULT",
        sortTags: [],
        date: "TEMPORARY_DEFAULT",
        sortingId: "",
        draft: true
      },

    });
  });