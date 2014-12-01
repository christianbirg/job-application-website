'use strict';

define([
	'angular',
	'angularRoute',
	'angularSanitize',
	'angularXeditable',
	], function (angular, $, filters, services, directives) {
		return angular.module('application', ['ngRoute', 'ngSanitize', 'xeditable',]);
});
