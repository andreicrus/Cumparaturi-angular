/**
 * Created by andrei on 12/2/13.
 */
    var listAppControllers = angular.module('listAppControllers', []);
    var uid = 10;


listAppControllers.factory('productFactory',function(){
    var products=[
        {'id':1,'list':'L1','checked':false,'name':'Lapte','description':'batut'},
        {'id':2,'list':'L1','checked':false,'name':'Paine','description':'2 franzele'},
        {'id':3,'list':'L1','checked':false,'name':'Masline','description':'naturale giants'},
    ]
    var factory = {};
    factory.getProducts = function(){
        return products;
    };
    return factory;
});



listAppControllers.factory('listsFactory',function(){
    var lists=['L1'];
    var factory={};
    factory.getLists=function(){
        return lists;
    }
    return factory;
});


listAppControllers.controller('ProductController', function($scope, productFactory, listsFactory) {
    $scope.addProduct=function(){
        var x=$scope.newProduct.name;
        if(x==null||x==""){
            alert("Introduceti numele produsului!");
            return false;
        }else{
            if($scope.newProduct.id==null){
                $scope.newProduct.id=uid++;
                $scope.newProduct.checked=false;
                $scope.products.push($scope.newProduct);
            }else{
                for(i in $scope.products){
                    if($scope.products[i].id==$scope.newProduct.id){
                        $scope.products[i]=$scope.newProduct;
                    }
                }
            }
            var lista=$scope.newProduct.list;
            $scope.newProduct={};
            $scope.newProduct.list=lista;
        }
    }

    $scope.remove = function(){
        var i = $scope.products.length;
        while(i--){
            if($scope.products[i].checked===true){
                $scope.products.splice(i,1);
            }
        }
    }

    $scope.editProduct=function(id){
        $scope.showProduct=true;
        for(i in $scope.products){
            if ($scope.products[i].id===id) {
                $scope.newProduct=angular.copy($scope.products[i]);
            };
        }
    }

    $scope.products = productFactory.getProducts();
    $scope.lists = listsFactory.getLists();

});


