import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('eventos', {path:'/'});
  this.route('perfilevento', {path: 'perfilevento/:idEvento'});
  this.route('nuevoevento');
  this.route('registro', {path: 'registro/:idEvento'});
  this.route('login');
  this.route('notifications');
});

export default Router;
