require.config({
  baseUrl: '../app/scripts',
  urlArgs: 'cb=' + Math.random(),

  deps: ['backbone.marionette'],

  paths: {
    spec: '../../test/spec', // lives in the test directory

    jquery: '../lib/jquery/jquery',
    backbone: '../lib/backbone-amd/backbone',
    underscore: '../lib/underscore-amd/underscore',

    /* backbone plugins */
    'backbone.syphon': '../lib/backbone.syphon/lib/amd/backbone.syphon',
    'backbone.iobind': '../lib/backbone.iobind/dist/backbone.iobind',

    /* alias all marionette libs */
    'backbone.marionette': '../lib/backbone.marionette/lib/core/amd/backbone.marionette',
    'backbone.wreqr': '../lib/backbone.wreqr/lib/amd/backbone.wreqr',
    'backbone.babysitter': '../lib/backbone.babysitter/lib/amd/backbone.babysitter',

    /* alias the bootstrap js lib */
    bootstrap: 'vendor/bootstrap',
    'bootstrap-button': 'vendor/bootstrap-button',

    /* Alias text.js for template loading and shortcut the templates dir to tmpl */
    text: '../lib/requirejs-text/text',
    tmpl: "../templates",

    /* handlebars from the require handlerbars plugin below */
    handlebars: '../lib/require-handlebars-plugin/Handlebars',

    /* require handlebars plugin - Alex Sexton */
    i18nprecompile: '../lib/require-handlebars-plugin/hbs/i18nprecompile',
    json2: '../lib/require-handlebars-plugin/hbs/json2',
    hbs: '../lib/require-handlebars-plugin/hbs'
  },

  hbs: {
    disableI18n: true
  }
});

/* require test suite */
require([
    'jquery',
    'spec/testSuite'
  ],
  function($, testSuite) {

    'use strict';

    /* on dom ready require all specs and run */
    $(function() {
      require(testSuite.specs, function() {

        if (window.mochaPhantomJS) {
          mochaPhantomJS.run();
        }
        else {
          mocha.run();
        }

      });
    });
  });