(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/portfolioEntries'
		],
		function( Portfolioentries ) {

			describe('Portfolioentries Collection', function () {

				it('should be an instance of Portfolioentries Collection', function () {
					var portfolioEntries = new Portfolioentries();
					expect( portfolioEntries ).to.be.an.instanceof( Portfolioentries );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );