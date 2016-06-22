'use strict';

/**
 * @ngdoc service
 * @name ecommerceMoltinApp.moltin
 * @description
 * # moltin
 * Factory in the ecommerceMoltinApp.
 */
angular.module('ecommerceMoltinApp.moltin', [])
  .factory('MoltinAuth', function () {
    //Inicializa uma nova promise
    var deferred = $q.defer();

    //Criar novo objeto Moltin
    var moltin = new Moltin({
      publicId: 'o6NtRtmPMACS55mysKFNXTGUCKOvtN5Ls0FDnXoyOv',
      secretKey: 'REsEaMBiwZeQ6wGU541qXQieyBc9mdYEH4LV19gOFP'
    });

   /*
    * Função de autenticação ao moltin
    * retorna promise resolvida
    * quando conexão for estabelecida
    * com sucesso
    */
    moltin.Authenticate(function(){
      deferred.resolve(moltin);
    });

    //Retonar promise
    return deferred.promise;
  });
