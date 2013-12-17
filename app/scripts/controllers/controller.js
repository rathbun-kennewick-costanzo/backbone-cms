define([
    'backbone',
    'backbone.marionette'
  ],
  function(Backbone, Marionette) {
    'use strict';

    var Controller = Backbone.Marionette.Controller.extend({

      initialize: function() {
        console.log("initialize a Controller");
      },

      index: function() {
        console.log("index controller function fired");
      }
    });

    return new Controller();
  });