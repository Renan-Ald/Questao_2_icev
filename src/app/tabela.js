 /* Metodo com js puxando json ////Incompleto////
var relatorioM= angular.module('relatorioM',[]);

 relatorioM.controller("relatoriocontroller",function($scope, $http){
     $http.get('app/tabela.js').then(function(response){
         $scope.relatorioM= response.data.relatorio;
     })
 });
 */