'use strict';

/**
 * @ngdoc function
 * @name ecommerceMoltinApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the ecommerceMoltinApp
 */
angular.module('ecommerceMoltinApp')
  .controller('ProductCtrl', function (product, moltin, $timeout) {
    var vm = this;
    vm.infoProduct = product;

    vm.addStatus = null;

    vm.addCart = function(){
      vm.addStatus = 'Adicionando...';

      moltin.Cart.Insert(product.id, 1, null, function(){
        vm.addStatus = 'Adicionado!';
        $timeout(function(){
          vm.addStatus = null;
        }, 1000);
      });
    };
});
