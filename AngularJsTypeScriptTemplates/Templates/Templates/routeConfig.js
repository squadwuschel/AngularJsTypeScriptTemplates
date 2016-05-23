var App;
(function (App) {
    var Config;
    (function (Config) {
        /**
         * Enthält die Routenconfigutation für unsere Anwendung.
         * Quelle: http://stackoverflow.com/questions/25073365/how-can-i-add-ui-router-stateprovider-configuration-to-my-application-with-types
         */
        var RouteConfig = (function () {
            function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
                this.$stateProvider = $stateProvider;
                this.$urlRouterProvider = $urlRouterProvider;
                this.$locationProvider = $locationProvider;
                this.init();
            }
            RouteConfig.prototype.init = function () {
                //$urlRouterProvider.when('/Home', '/home/index');
                this.$urlRouterProvider.otherwise("Todo");
                //$locationProvider.html5Mode(true);
                //Definieren der Routen die in unserer App zur Verfügung stehen.
                this.$stateProvider
                    .state("Todo", {
                    url: "/Todo",
                    templateUrl: "Todo/TodoList"
                })
                    .state("Todo.Overview", {
                    url: "/Overview",
                    templateUrl: "Todo/TodoOverview"
                });
            };
            return RouteConfig;
        })();
        Config.RouteConfig = RouteConfig;
    })(Config = App.Config || (App.Config = {}));
})(App || (App = {}));
//# sourceMappingURL=routeConfig.js.map