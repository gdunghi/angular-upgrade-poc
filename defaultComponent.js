(function() {
    defaultController.$inject = [];
    function defaultController() {
    }
    angular.module("angular-upgrade-poc").component("default", {
        templateUrl: "/default.html"
    });
})();
