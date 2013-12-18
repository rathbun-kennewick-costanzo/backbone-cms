define([
    'backbone',
    'hbs!tmpl/layout/adminSettingsOverallView_tmpl'
  ],
  function(Backbone, AdminsettingsoverallviewTmpl) {
    'use strict';

    /* Return a Layout class definition */
    return Backbone.Marionette.Layout.extend({

      initialize: function() {
        console.log("initialize a Adminsettingsoverallview Layout");
      },

      template: AdminsettingsoverallviewTmpl,


      /* Layout sub regions */
      regions: {},

      /* ui selector cache */
      ui: {},

      /* Ui events hash */
      events: {},

      /* on render callback */
      onRender: function() {}
    });

  });