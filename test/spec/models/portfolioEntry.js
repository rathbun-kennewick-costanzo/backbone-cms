(function() {
	'use strict';

	var root = this;

	root.define([
		'models/portfolioEntry'
		],
		function( Portfolioentry ) {

			describe('Portfolioentry Model', function () {

				it('should be an instance of Portfolioentry Model', function () {
					var portfolioEntry = new Portfolioentry();
					expect( portfolioEntry ).to.be.an.instanceof( Portfolioentry );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );