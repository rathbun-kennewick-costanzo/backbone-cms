(function() {
	'use strict';

	var root = this;

	root.define([
		'views/composite/adminPortOverallView'
		],
		function( Adminportoverallview ) {

			describe('Adminportoverallview Compositeview', function () {

				it('should be an instance of Adminportoverallview Compositeview', function () {
					var adminPortOverallView = new Adminportoverallview();
					expect( adminPortOverallView ).to.be.an.instanceof( Adminportoverallview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );