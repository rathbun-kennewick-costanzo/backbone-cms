define([
    'backbone',
    'backbone.marionette',
    'views/item/login-view'
  ],
  function(Backbone, Marionette, LoginView) {
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

      test: function() {
      }
    });

    return new Controller();
  });