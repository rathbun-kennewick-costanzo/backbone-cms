define([
    'backbone',
    'models/user',
    'views/item/userView',
    'models/settings',
    'views/item/settingsView',
    'hbs!tmpl/layout/adminSettingsOverallView_tmpl'
  ],
  function(Backbone, UserModel, UserView, SettingsModel, SettingsView, AdminsettingsoverallviewTmpl) {
    'use strict';

    /* Return a Layout class definition */
    return Backbone.Marionette.Layout.extend({

      initialize: function() {

      },

      template: AdminsettingsoverallviewTmpl,


      /* Layout sub regions */
      regions: {
        users: "#users",
        settings: "#settings"
      },

      /* ui selector cache */
      ui: {},

      /* Ui events hash */
      events: {},

      /* on render callback */
      onRender: function() {
        var that = this;
        console.log(this);
        console.log("initialize a Adminsettingsoverallview Layout");
        var userModel = new UserModel();
        userModel.fetch({
          success: function(model) {
            console.log(model);
            var userView = new UserView({
              model: userModel
            });
            that.users.show(userView);
          }
        });
        var settingsModel = new SettingsModel();
        settingsModel.fetch({
          success: function(model) {
            console.log(model);
            var settingsView = new SettingsView({
              model: settingsModel
            });

            that.settings.show(settingsView);
          }
        });
      }
    });

  });