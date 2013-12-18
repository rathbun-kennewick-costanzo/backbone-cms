define([
    'backbone',
    'hbs!tmpl/item/adminPortEntryView_tmpl'
  ],
  function(Backbone, AdminportentryviewTmpl) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({

      initialize: function() {
        console.log("initialize a Adminportentryview ItemView");
      },

      template: AdminportentryviewTmpl,


      /* ui selector cache */
      ui: {},

      /* Ui events hash */
      events: {},

      /* on render callback */
      onRender: function() {}
    });

  });