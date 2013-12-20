define([
    'backbone',
    'backbone.marionette',
    'views/composite/adminPortOverallView',
    'views/item/adminPortEntryView',
    'views/layout/adminSettingsOverallView',
    'models/portfolioEntry',
    'collections/portfolioEntries',
    'views/composite/clientOverallPortView'

  ],
  function(Backbone, Marionette, AdminPortOverallView, AdminPortEntryView, AdminSettingsOverallView, PortfolioEntryModel, PortfolioEntries, ClientOverallPortView) {
    'use strict';

    var Controller = Backbone.Marionette.Controller.extend({

      initialize: function() {
        console.log("initialize a Controller");
      },

      clientPortfolio: function() {
        console.log("BAM! landed on the client portfolio page.");
        var portfolioEntries = new PortfolioEntries();
        portfolioEntries.fetch({
          success: function() {
            console.log("successful fetch");
            var clientPortOverallView = new ClientOverallPortView({
              collection: portfolioEntries
            });
            App.content.show(clientPortOverallView);
          },

          error: function(error) {
            console.log(error);
          }
        });
      },

      portfolio: function() {
        console.log("portfolio controller function fired");
        var portfolioEntries = new PortfolioEntries();
        portfolioEntries.fetch({
          success: function() {
            console.log("successful fetch");
            var adminPortOverallView = new AdminPortOverallView({
              collection: portfolioEntries
            });
            App.content.show(adminPortOverallView);
          },

          error: function(error) {
            console.log(error);
          }
        });
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
      }
    });

    return new Controller();
  });