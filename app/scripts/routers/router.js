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
        "": "clientPortfolio",
        "portfolio/:id": "clientPortfolioEntry",
        "test": "test",
        "admin/portfolio": "portfolio",
        "admin/portfolio/new": "portfolioNew",
        "admin/portfolio/edit/:id": "portfolioEdit",
        "admin/settings": "settings"
      }
    });
    var r = window.Router = new Router();
    return r;
  });