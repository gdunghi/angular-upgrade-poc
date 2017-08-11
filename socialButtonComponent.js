(function() {
    socialButtonController.$inject = [];
    function socialButtonController() {
        var self = this;

        self.clickOnButton = function () {
            self.onClick({ id: self.id });
        }
    }

    angular.module("angular-upgrade-poc").component("socialButton", {
        controller: socialButtonController,
        templateUrl: "/socialButton.html",
        bindings: {
            awesomeFontClass: "@",
            id: "@",
            displayName: "@",
            onClick: "&"
        }
    });
})();
