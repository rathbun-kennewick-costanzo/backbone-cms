define([
    'backbone',
    'hbs!tmpl/item/userView_tmpl'
  ],
  function(Backbone, UserviewTmpl) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({

      initialize: function() {
        console.log("initialize a Userview ItemView");
      },

      template: UserviewTmpl,


      /* ui selector cache */
      ui: {},

      /* Ui events hash */
      events: {},

      /* on render callback */
      onRender: function() {}
    });

  });