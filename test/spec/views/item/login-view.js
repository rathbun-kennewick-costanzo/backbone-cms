(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/login-view'
		],
		function( LoginView ) {

			describe('LoginView Itemview', function () {

				it('should be an instance of LoginView Itemview', function () {
					var login-view = new LoginView();
					expect( login-view ).to.be.an.instanceof( LoginView );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );