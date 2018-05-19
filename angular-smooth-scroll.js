import angular from 'angular'
import scrollabledivModule from './src/scrollableDiv/scrollableDiv'

let angularSmoothScroll= angular.module('angular-smooth-scroll', [scrollabledivModule])
                        .name

export default angularSmoothScroll