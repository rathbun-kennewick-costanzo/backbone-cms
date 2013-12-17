define([
	'backbone',
	'hbs!tmpl/item/login-view_tmpl'
],
function( Backbone, LoginViewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a LoginView ItemView");
		},
		
    	template: LoginViewTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {
            "click": "clickFunction"
        },

		/* on render callback */
		onRender: function() {
            console.log("LoginView rendered");
        },

        clickFunction: function() {
            alert("I've been clicked");
        }
	});

});
