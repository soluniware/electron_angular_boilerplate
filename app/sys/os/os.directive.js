angular.module("app.os", [])
    .directive("osMain", function () {
        return {
            link: function (scope, element, attrs) {
                scope.finished = function () {
                    var sectionsColor = [];
                    var navigation = {position: 'right', tooltips: []};
                    angular.forEach(scope.workbench, function (vl, ky) {
                        sectionsColor.push(vl.sectionsColor || 'black');
                        navigation.tooltips.push(vl.name || 'Page '+(ky+1));
                    });
                    element.pagepiling({
                        sectionsColor: sectionsColor,//['#bfda00', '#2ebe21', '#2C3E50', '#51bec4'],
                        navigation: navigation,
                        afterRender: function () {
                            //playing the video
                            $('video').length >= 1 ? $('video').get(0).play() : '';
                        }
                    });
                }

                //,});
            },
            restrict: "E",
            templateUrl: "./sys/os/os.html"/*,
            scope: {pages: "="}*/
        }
    });