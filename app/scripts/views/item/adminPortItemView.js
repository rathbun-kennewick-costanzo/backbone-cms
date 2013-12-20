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
        "click .portDelete": "areYouSure"
        // "click .yesDel": "delete"
      },

      areYouSure: function() {
        // TODO: we need to move this to its own view/ region etc
        var that = this;
        $('header').after('<div class="alert alert-warning fade in"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button><strong>Really? Delete it?</strong><button type="button" class="btn btn-success btn-lg yesDel">Yes</button><button type="button" class="btn btn-danger btn-lg noDel" data-dismiss="alert">No</button></div>');

        $('.yesDel').on('click', function() {
          that.model.destroy();
          $(".alert").alert('close');

        });
      },

      delete: function() {
        this.model.destroy();
        $(".alert").alert('close');
      },

      /* on render callback */
      onRender: function() {}
    });

  });