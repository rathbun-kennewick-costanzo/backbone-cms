define([
    'backbone',
    'hbs!tmpl/item/settingsView_tmpl'
  ],
  function(Backbone, SettingsviewTmpl) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({

      initialize: function() {
        console.log("initialize a Settingsview ItemView");
      },

      template: SettingsviewTmpl,


      /* ui selector cache */
      ui: {},

      /* Ui events hash */
      events: {},

      /* on render callback */
      onRender: function() {}
    });

  });