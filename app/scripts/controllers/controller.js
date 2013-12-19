define([
    'backbone',
    'backbone.marionette',
    'views/composite/adminPortOverallView',
    'views/item/adminPortEntryView',
    'views/layout/adminSettingsOverallView',
    'models/portfolioEntry'

  ],
  function(Backbone, Marionette, AdminPortOverallView, AdminPortEntryView, AdminSettingsOverallView, PortfolioEntryModel) {
    'use strict';

    var Controller = Backbone.Marionette.Controller.extend({

      initialize: function() {
        console.log("initialize a Controller");
      },

      index: function() {
        console.log("index controller function fired");
        var loginview = new LoginView();
        App.content.show(loginview);
      },

      portfolio: function() {
        console.log("portfolio controller function fired");
        var adminPortOverallView = new AdminPortOverallView();
        App.content.show(adminPortOverallView);
      },

      portfolioNew: function() {
        console.log("adminPortEntryView New controller function fired");
        var portfolioEntry = new PortfolioEntryModel();
        var adminPortEntryView = new AdminPortEntryView({
          model: portfolioEntry
        });
        App.content.show(adminPortEntryView);
      },

      portfolioEdit: function(id) {
        console.log("adminPortEntryView Edit controller function fired");

        var portfolioEntry = new PortfolioEntryModel({
          _id: id
        });
        console.log(portfolioEntry);

        portfolioEntry.fetch({
          success: function() {
            console.log("successful fetch");
            console.log(portfolioEntry);
            var adminPortEntryView = new AdminPortEntryView({
              model: portfolioEntry
            });
            App.content.show(adminPortEntryView);
          },

          error: function(error) {
            console.log(error);
          }
        });
      },

      settings: function() {
        console.log("adminSettingsOverallView controller function fired");
        var adminSettingsOverallView = new AdminSettingsOverallView();
        App.content.show(adminSettingsOverallView);
      },

      test: function() {}
    });

    return new Controller();
  });