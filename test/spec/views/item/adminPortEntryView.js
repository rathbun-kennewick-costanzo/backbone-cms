(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/adminPortEntryView'
		],
		function( Adminportentryview ) {

			describe('Adminportentryview Itemview', function () {

				it('should be an instance of Adminportentryview Itemview', function () {
					var adminPortEntryView = new Adminportentryview();
					expect( adminPortEntryView ).to.be.an.instanceof( Adminportentryview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );