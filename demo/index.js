import angular from 'angular'
import angularSmoothScroll from '../angular-smooth-scroll';
import mainController from './main.controller'
angular.module('demo-app',[angularSmoothScroll])
        .controller('maincontroller', mainController)