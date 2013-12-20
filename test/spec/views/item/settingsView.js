(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/settingsView'
		],
		function( Settingsview ) {

			describe('Settingsview Itemview', function () {

				it('should be an instance of Settingsview Itemview', function () {
					var settingsView = new Settingsview();
					expect( settingsView ).to.be.an.instanceof( Settingsview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );