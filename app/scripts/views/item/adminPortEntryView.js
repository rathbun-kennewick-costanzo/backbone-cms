define([
    'backbone',
    'hbs!tmpl/item/adminPortEntryView_tmpl',
    'marked',
    'backboneSyphon'
  ],
  function(Backbone, AdminportentryviewTmpl, marked, backboneSyphon) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({

      initialize: function() {
        console.log("initialize a Adminportentryview ItemView");
      },

      template: AdminportentryviewTmpl,


      /* ui selector cache */
      ui: {},

      /* Ui events hash */
      events: {
        "mouseenter .markdown-description-btn .fa": "initializeMarkdownInfo",
        "keyup .markdown-description :input": "markdownConverter",
        "click .publish-btns .publish": "publish",
        "click .publish-btns .save-draft": "save"
      },

      publish: function(e) {
        e.preventDefault();
        var data = Backbone.Syphon.serialize(this);

        data.bodyHtml = $('#pEntryBodyHtml').html();
        data.draft = false;

        console.log(data);
        this.model.set(data);

        this.model.save();
      },

      save: function(e) {
        e.preventDefault();
        var data = Backbone.Syphon.serialize(this);

        data.bodyHtml = $('#pEntryBodyHtml').html();
        data.draft = true;

        console.log(data);
        this.model.set(data);

        this.model.save();
      },

      initializeMarkdownInfo: function() {
        console.log("initialize markdown popup");
        var markdownInfoBtn = $(".markdown-description-btn");
        markdownInfoBtn.popover({
          placement: 'bottom',
          html: true,
          title: 'Markdown Commands',
          // Content for the Markdown Popup
          content: '<table class="table table-striped"><tbody>' +
            '<tr><td>Bold</td><td>**text**</td></tr>' +
            '<tr><td>Italic</td><td>*text*</td></tr>' +
            '<tr><td>Inline Code</td><td>`code`</td></tr>' +
            '<tr><td>Block Quote</td><td>> text</td></tr>' +
            '<tr><td>Link</td><td>[title](http://)</td></tr>' +
            '<tr><td>List</td><td>* item</td></tr>' +
            '<tr><td>Blockquote</td><td>> quote</td></tr>' +
            '<tr><td>H1</td><td># Heading</td></tr>' +
            '<tr><td>H2</td><td>## Heading</td></tr>' +
            '<tr><td>H3</td><td>### Heading</td></tr>' +
            '<tr><td>H4</td><td>#### Heading</td></tr>' +
            '</tbody></table>',
        });
        // Prevents scroll to top on the button
        markdownInfoBtn.on('click', function(e) {
          e.preventDefault();
          return true;
        });
        // Allows you to click anywhere on the screen to close popover
        $('body').on('click', function(e) {
          $('.markdown-description-btn').each(function() {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
              $(this).popover('hide');
            }
          });
        });
      },

      markdownConverter: _.debounce(function() {
        var mark = $('#pEntryBodyMark').val();
        var html = marked(mark);
        $('#pEntryBodyHtml').html(html);
      }, 100),

      /* on render callback */
      onRender: function() {}
    });

  });