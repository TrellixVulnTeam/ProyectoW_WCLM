/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'intro2p',
    environment,
    rootURL: '/',
    locationType: 'auto',

    torii:{
      sessionServiceName:'session'
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.firebase = {
      apiKey: "AIzaSyDWI8j-Cj1XYdxYJhPTtr5RIzW2myCSs5k",
      authDomain: "intro2p-5d28f.firebaseapp.com",
      databaseURL: "https://intro2p-5d28f.firebaseio.com",
      projectId: "intro2p-5d28f",
      storageBucket: "intro2p-5d28f.appspot.com",
      messagingSenderId: "1009402436649"
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
