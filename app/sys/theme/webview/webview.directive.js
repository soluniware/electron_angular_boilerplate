angular.module("app.os")
    .directive("webView", function () {
        return {
            link: function (scope, element, attrs) {

            },
            restrict: "EA",
            template: " <video autoplay loop muted id=\"myVideo\">\n" +
            "             <source src=\"./sys/theme/page_piling/resources/img/flowers.mp4\" type=\"video/mp4\">\n" +
            "         </video>\n" +
            "         <div class=\"layer\">\n" +
            "             <h1>pagePiling.js video</h1>\n" +
            "         </div>",
            replace: true
            /*scope: {pages: "="}*/
        }
    });