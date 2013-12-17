define([
    'backbone',
    'communicator',
    'hbs!tmpl/welcome',
    'routers/router'
  ],

  function(Backbone, Communicator, Welcome_tmpl, Router) {
    'use strict';

    var welcomeTmpl = Welcome_tmpl;

    var App = new Backbone.Marionette.Application();

    /* Add application regions here */
    App.addRegions({});

    /* Add initializers here */
    App.addInitializer(function() {
      Backbone.history.start();
      document.body.innerHTML = welcomeTmpl({
        success: "THIS IS WORKING!"
      });
      Communicator.mediator.trigger("APP:START");
    });
    var x = 1 & 1;
    return App;
  });