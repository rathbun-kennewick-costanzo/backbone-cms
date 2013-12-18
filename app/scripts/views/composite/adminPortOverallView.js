define([
    'backbone',
    'views/item/adminPortItemView',
    'hbs!tmpl/composite/adminPortOverallView_tmpl'
  ],
  function(Backbone, Adminportitemview, AdminportoverallviewTmpl) {
    'use strict';

    /* Return a CompositeView class definition */
    return Backbone.Marionette.CompositeView.extend({

      initialize: function() {
        console.log("initialize a Adminportoverallview CompositeView");
      },

      itemView: Adminportitemview,

      template: AdminportoverallviewTmpl,


      /* ui selector cache */
      ui: {},

      /* where are we appending the items views */
      itemViewContainer: "",

      /* Ui events hash */
      events: {},

      /* on render callback */
      onRender: function() {}
    });

  });