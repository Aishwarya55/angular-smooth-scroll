import angular from 'angular'
import scrollableDiv from './scrollableDiv.component'
let scrollableDivModule = angular.module('scrllableDiv',[])
                    .component('scrollableDiv', scrollableDiv)
                    .name

export default scrollableDivModule