'use strict';

/**
 * @ngdoc function
 * @name ecommerceMoltinApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the ecommerceMoltinApp
 */
angular.module('ecommerceMoltinApp')
  .controller('CategoryCtrl', function (category, products) {
    var vm = this;
    vm.products = products;
    vm.category = category;
});
