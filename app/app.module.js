var app = angular.module("app", ['app.os', 'indexedDB'])
    .config(function ($indexedDBProvider) {
        $indexedDBProvider
            .connection('unityIndexedDB')
            .upgradeDatabase(1, function (event, db, tx) {
                //var objStore = db.createObjectStore('workbench', {keyPath: 'ssn', autoIncrement: true});
                //objStore.createIndex('name_idx', 'name', {unique: false});
                //objStore.createIndex('age_idx', 'age', {unique: false});
                var objStore = db.createObjectStore('workbench', {autoIncrement: true});
                objStore.transaction.oncomplete = function (event) {
                    // Store values in the newly created objectStore.
                    var wbObjectStore = db.transaction("workbench", "readwrite").objectStore("workbench");
                    var wb = {}; //wb = workbench;
                    wb.name = "Page 1";
                    wb.sectionsColor = "#2ebe21";
                    wb.osName = "web-view";
                    wb.osArgs = {};
                    wb.osArgs.image = "bg3.jpg"
                    wb.theme = {
                        name: "gridester",
                        apps: ["wsproxy", "node_red"],
                        background: "flowers.mp4"
                    };
                    var wbAr = [];
                    wbAr.push(wb);
                    wb = {};
                    angular.copy(wbAr[0], wb);
                    wb.name = "macOS";
                    wbAr.push(wb);
                    wb = {};
                    angular.copy(wbAr[0], wb);
                    wb.name = "";
                    wbAr.push(wb);
                    wbObjectStore.add(wbAr);
                    wb = {};
                };
            })
        /*.upgradeDatabase(2, function(event, db, tx){
                        db.createObjectStore('peoplePhones', {keyPath: 'person_ssn'});
                    });*/
    });