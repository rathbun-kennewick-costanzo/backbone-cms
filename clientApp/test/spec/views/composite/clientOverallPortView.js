(function() {
	'use strict';

	var root = this;

	root.define([
		'views/composite/clientOverallPortView'
		],
		function( Clientoverallportview ) {

			describe('Clientoverallportview Compositeview', function () {

				it('should be an instance of Clientoverallportview Compositeview', function () {
					var clientOverallPortView = new Clientoverallportview();
					expect( clientOverallPortView ).to.be.an.instanceof( Clientoverallportview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );