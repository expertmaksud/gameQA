(function() {
    angular.module("gameqa")
        .controller("gameqaCtrl", gameqaCtrl)

    function gameqaCtrl($scope, $cordovaInAppBrowser) {
        var vm = this;

        var options = {
            location: 'no',
            clearcache: 'no',
            toolbar: 'no',
            closebuttoncaption: 'Return',
            enableViewportScale: 'yes'
        };

        ionic.Platform.ready(function() {

            vm.openWebPage();

        });

        vm.openWebPage = function() {
            $cordovaInAppBrowser.open('http://gameqa.non.sa', '_blank', options);

            return false;
        };

    }

})();
