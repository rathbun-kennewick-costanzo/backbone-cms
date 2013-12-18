(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/adminPortItemView'
		],
		function( Adminportitemview ) {

			describe('Adminportitemview Itemview', function () {

				it('should be an instance of Adminportitemview Itemview', function () {
					var adminPortItemView = new Adminportitemview();
					expect( adminPortItemView ).to.be.an.instanceof( Adminportitemview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );