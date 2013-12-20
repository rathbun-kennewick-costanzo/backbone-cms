(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/clientPortfolioEntry'
		],
		function( Clientportfolioentry ) {

			describe('Clientportfolioentry Itemview', function () {

				it('should be an instance of Clientportfolioentry Itemview', function () {
					var clientPortfolioEntry = new Clientportfolioentry();
					expect( clientPortfolioEntry ).to.be.an.instanceof( Clientportfolioentry );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );