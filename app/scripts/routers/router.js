define([
    'backbone',
    'backbone.marionette',
    '../controllers/controller'
  ],
  function(Backbone, Marionette, Controller) {
    'use strict';

    var Router = Backbone.Marionette.AppRouter.extend({

      initialize: function() {
        console.log("initialize a Router");
      },
      controller: Controller,
      appRoutes: {
        "": "index",
        "test": "test",
        "admin/portfolio": "portfolio",
        "admin/portfolio/new": "portfolioNew",
        "admin/portfolio/edit": "portfolioEdit",
        "admin/settings": "settings"
      }
    });

    return new Router();
  });