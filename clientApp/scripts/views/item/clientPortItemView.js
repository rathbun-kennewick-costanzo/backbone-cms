define([
    'backbone',
    'hbs!tmpl/item/clientPortItemView_tmpl'
  ],
  function(Backbone, ClientportitemviewTmpl) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({

      initialize: function() {
        console.log("initialize a Clientportitemview ItemView");
      },

      template: ClientportitemviewTmpl,
      className: "row clientPortOverviewEntry",

      /* ui selector cache */
      ui: {},

      /* Ui events hash */
      events: {},

      /* on render callback */
      onRender: function() {}
    });

  });