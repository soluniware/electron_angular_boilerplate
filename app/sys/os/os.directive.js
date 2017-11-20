angular.module("app.os", [])
    .directive("osMain", function () {
        return {
            link: function (scope, element, attrs) {
                //scope.data = scope[attrs["unorderedList"]];
                $(document).ready(function () {
                    $('#pagepiling').pagepiling({
                        sectionsColor: ['#bfda00', '#2ebe21', '#2C3E50', '#51bec4'],
                        navigation: {
                            'position': 'right',
                            'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Pgae 4']
                        },
                        afterRender: function () {
                            //playing the video
                            $('video').get(0).play();
                        }
                    });
                });
            },
            restrict: "E",
            templateUrl: "./sys/os/os.html"
        }
    }).controller("defaultCtrl", function ($scope) {
    $scope.products = [
        { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
        { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
        { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }
    ];
})