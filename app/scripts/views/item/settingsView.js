define([
    'backbone',
    'hbs!tmpl/item/settingsView_tmpl',
    'backboneSyphon',
    'parsley'
  ],
  function(Backbone, SettingsviewTmpl, backboneSyphon, parsley) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({

      initialize: function() {
        console.log("initialize a Settingsview ItemView");
      },

      events: {
        "click .settings-save": "updateSettings"
      },

      updateSettings: function(e) {
        e.preventDefault();

        var isValid = $('#settingsEntry').parsley('isValid');

        if (!isValid) {
          $('#settingsEntry').parsley('validate');
        }

        var data = Backbone.Syphon.serialize(this);
        this.model.save(data);
      },

      template: SettingsviewTmpl,


      /* ui selector cache */
      ui: {},

      /* on render callback */
      onRender: function() {}
    });

  });