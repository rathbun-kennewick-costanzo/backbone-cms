define([
    'backbone',
    'communicator',
    'hbs!tmpl/welcome',
    'routers/router'
  ],

  function(Backbone, Communicator, Welcome_tmpl, Router) {
    'use strict';

    var welcomeTmpl = Welcome_tmpl;

    var App = window.App = new Backbone.Marionette.Application();

    /* Add application regions here */
    App.addRegions({
      content: "#content"
    });

    /* Add initializers here */
    App.addInitializer(function() {
      Backbone.history.start();
      Communicator.mediator.trigger("APP:START");
    });
    return App;
  });