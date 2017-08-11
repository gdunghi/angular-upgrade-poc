(function() {
    mainController.$inject = [];
    function mainController() {
    }
    angular.module("angular-upgrade-poc").component("main", {
        templateUrl: "/main.html",
        controller: mainController,
        $routeConfig: [{
            path: '/',
            name: 'Default',
            component: 'default',
            useAsDefault: true
        }, {
            path: '/contact',
            name: 'Contact',
            component: 'contact'
        }]
    });
})();
