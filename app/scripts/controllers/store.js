'use strict';

/**
 * @ngdoc function
 * @name ecommerceMoltinApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the ecommerceMoltinApp
 */
angular.module('ecommerceMoltinApp')
  .controller('StoreCtrl', function (categories) {
    var vm = this;
    vm.categories = categories;
});
