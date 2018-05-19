import template from './scrollableDiv.html'
import controller from './scrollableDiv.controller'
import './scrollableDiv.css'

let scrollableDiv = {
    bindings:{
        width: '<',
        height : '<',
        type : '@',
        scrollLength : '<',
        data : '<'
    },
    template,
    controller
}
export default scrollableDiv