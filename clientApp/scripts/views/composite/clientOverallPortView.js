define([
    'backbone',
    'views/item/clientPortItemView',
    'hbs!tmpl/composite/clientOverallPortView_tmpl'
  ],
  function(Backbone, Clientportitemview, ClientoverallportviewTmpl) {
    'use strict';

    /* Return a CompositeView class definition */
    return Backbone.Marionette.CompositeView.extend({

      initialize: function() {
        console.log("initialize a Clientoverallportview CompositeView");
        console.log(this.collection);
      },

      itemView: Clientportitemview,

      template: ClientoverallportviewTmpl,


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