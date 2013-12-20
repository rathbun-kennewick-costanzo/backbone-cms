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

        window.location.hash = "#admin/portfolio";


        // ran out of time for demo, not going to get this working so I'm just going to do a hacky redirect

        // var isValid = $('#settingsEntry').parsley('isValid');

        // if (!isValid) {
        //   $('#settingsEntry').parsley('validate');
        // }

        // var data = Backbone.Syphon.serialize(this);
        // this.model.save(data, {
        //   success: function(model) {
        //     console.log("save successful");
        //     console.log(model);
        //   }
        // });
      },

      template: SettingsviewTmpl,


      /* ui selector cache */
      ui: {},

      /* on render callback */
      onRender: function() {}
    });

  });