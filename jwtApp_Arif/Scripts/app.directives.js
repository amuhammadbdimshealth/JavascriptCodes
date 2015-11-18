import helloDirective from 'Scripts/Directives/helloDirective/helloDirective.js';
import jwtFilter from 'Scripts/Directives/jwtFilter/jwtFilter.js';


var moduleName='app.Directives';

angular.module(moduleName, [])
.directive('helloDirective', helloDirective.builder)
.directive('jwtFilter', jwtFilter.builder)
;

export default moduleName;