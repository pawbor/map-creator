import angular from 'angular';
import ngRedux from 'ng-redux';
import uiRouter from 'angular-ui-router';

import mapEditor from './map-editor.component';

const module = angular
.module('map-editor', [
  ngRedux,
  uiRouter
])
.component('mapEditor', mapEditor)
.config(config)
.name;

function config($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
  .state('map-editor', {
    url: '/map-editor',
    template: '<map-editor></map-editor>'
  });
  $urlRouterProvider.otherwise('/map-editor');
}

export default module;
