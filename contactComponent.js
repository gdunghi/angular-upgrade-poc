(function() {
    contactController.$inject = [];
    function contactController() {
        var self = this;

        self.displayResponse = function (id) {
            self.responseMessage = id + " is coming soon!";
        };
    }
    angular.module("angular-upgrade-poc").component("contact", {
        controller: contactController,
        templateUrl: "/contact.html"
    });
})();
