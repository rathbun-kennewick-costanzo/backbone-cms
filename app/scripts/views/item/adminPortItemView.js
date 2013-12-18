define([
    'backbone',
    'hbs!tmpl/item/adminPortItemView_tmpl'
  ],
  function(Backbone, AdminportitemviewTmpl) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({

      initialize: function() {
        console.log("initialize a Adminportitemview ItemView");
      },

      template: AdminportitemviewTmpl,


      /* ui selector cache */
      ui: {},

      /* Ui events hash */
      events: {},

      /* on render callback */
      onRender: function() {}
    });

  });