(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/clientPortItemView'
		],
		function( Clientportitemview ) {

			describe('Clientportitemview Itemview', function () {

				it('should be an instance of Clientportitemview Itemview', function () {
					var clientPortItemView = new Clientportitemview();
					expect( clientPortItemView ).to.be.an.instanceof( Clientportitemview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );