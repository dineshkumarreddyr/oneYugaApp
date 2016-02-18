/* Description : Angular Directive for Navigation bar */
(function(){
	"use strict";

	angular
	.module("oneyuga")
	.directive('navBar',navbarDirective);

	//Func NavbarDirective
	function navbarDirective(){
		return{
			restrict:'E',
			replace:true,
			templateUrl:'app/components/navbar/oneyuga.navbar.tmpl.html'
		}
	}
})();