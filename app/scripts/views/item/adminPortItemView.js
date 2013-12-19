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
      tagName: "article",
      className: "col-md-4 overview-container",

      /* ui selector cache */
      ui: {},

      /* Ui events hash */
      events: {
        "click .portDelete": "delete"
      },

      delete: function() {
        this.model.destroy();
      },

      /* on render callback */
      onRender: function() {}
    });

  });