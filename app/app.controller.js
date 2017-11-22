app.controller("mainCtrl", function ($scope, $indexedDB) {
    $scope.workbench = {};
    $indexedDB.openStore('workbench', function (store) {
        store.find(1).then(function(e){
            $scope.workbench = e;
            //console.dir($scope.workbench);
        });
    });
    /* $scope.firstName = "John";
     $scope.lastName = "Doe";
     $scope.objects = [];
     $scope.ssn = "666-444-222-111";
     $indexedDB.openStore('workbench', function (store) {

        /!* store.insert({"ssn": "666-444-222-111", "name": "Behnam", "Raeisifard": 39}).then(function (e) {
         });*!/


        /!* store.insert({"ssn": "666-444-222-111", "name": "Behnam", "Raeisifard": 39}).then(function (e) {
         });*!/

         store.getAll().then(function (workbench) {
             // Update scope
             $scope.objects = workbench;
         });

         /!*store.delete($scope.ssn).then(function () {
             // do something
         });*!/

         store.getAllKeys().then(function (e) {
             $scope.primaryKeys = e;
             console.dir(e);
         });

        /!* store.clear().then(function () {
             // do something
         });*!/
     });*/
});