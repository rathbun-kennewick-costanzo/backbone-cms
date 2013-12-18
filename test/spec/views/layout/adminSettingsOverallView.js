(function() {
	'use strict';

	var root = this;

	root.define([
		'views/layout/adminSettingsOverallView'
		],
		function( Adminsettingsoverallview ) {

			describe('Adminsettingsoverallview Layout', function () {

				it('should be an instance of Adminsettingsoverallview Layout', function () {
					var adminSettingsOverallView = new Adminsettingsoverallview();
					expect( adminSettingsOverallView ).to.be.an.instanceof( Adminsettingsoverallview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );