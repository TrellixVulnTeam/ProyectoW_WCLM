import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('eventos', {path:'/'});
  this.route('perfilevento', {path: 'perfilevento/:idEvento'});
});

export default Router;
