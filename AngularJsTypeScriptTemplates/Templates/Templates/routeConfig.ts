module App.Config {
    /**
     * Enthält die Routenconfigutation für unsere Anwendung.
     * Quelle: http://stackoverflow.com/questions/25073365/how-can-i-add-ui-router-stateprovider-configuration-to-my-application-with-types
     */
    export class RouteConfig {
        constructor(private $stateProvider: ng.ui.IStateProvider, private $urlRouterProvider: ng.ui.IUrlRouterProvider, private $locationProvider: ng.ILocationProvider) {
            this.init();
        }

        private init(): void {
            //$urlRouterProvider.when('/Home', '/home/index');
            this.$urlRouterProvider.otherwise("Todo/Overview");
            //$locationProvider.html5Mode(true);

            //Definieren der Routen die in unserer App zur Verfügung stehen.
            this.$stateProvider
                .state("Todo", {
                    url: "/Todo",
                    templateUrl: "Todo/TodoOverview"
                })
                .state("Todo.Overview", {
                    url: "/Overview",
                    templateUrl: "Todo/TodoOverview"
                })
                .state("Home", {
                    url: "/Home",
                    templateUrl: "Home/Index"
                });
        }
    }
}