define([
	'backbone',
	'hbs!tmpl/item/clientPortfolioEntry_tmpl'
],
function( Backbone, ClientportfolioentryTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Clientportfolioentry ItemView");
		},
		
    	template: ClientportfolioentryTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
