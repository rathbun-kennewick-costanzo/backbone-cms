define([
    'backbone'
  ],
  function(Backbone) {
    'use strict';

    /* Return a model class definition */
    return Backbone.Model.extend({

      urlRoot: "/api/v1/PortfolioEntries",
      idAttribute: "_id",

      initialize: function() {
        console.log("initialize a Portfolioentry model");
      },

      defaults: {
        _id: null,
        title: "",
        bodyMarkdown: "",
        bodyHtml: "",
        bodyExcerpt: "",
        pageTitle: "",
        metaDescription: "",
        slug: "",
        sortTags: [],
        date: "",
        sortingId: "",
        draft: true,
        imageDataURI: ""
      },

    });
  });