var App;
(function (App) {
    var AppComponents;
    (function (AppComponents) {
        var Interceptors;
        (function (Interceptors) {
            consoleInterceptor.$inject = ["$injector", "$q"];
            function consoleInterceptor($injector, $q) {
                return {
                    // On request success
                    request: function (request) {
                        console.log("Request Success");
                        console.log(request);
                        return request || $q.when(request);
                    },
                    // On request failure
                    requestError: function (rejection) {
                        console.log("Request Error");
                        console.log(rejection);
                        return $q.reject(rejection);
                    },
                    // On response success
                    response: function (response) {
                        console.log("Response Success");
                        console.log(response);
                        return response || $q.when(response);
                    },
                    // On response failture
                    responseError: function (rejection) {
                        console.log("Response Error");
                        console.log(rejection);
                        //Injector verwenden um andere Angular Services zu laden.
                        var stateService = $injector.get('$state');
                        stateService.go('NotAuthorized');
                        return $q.reject(rejection);
                    }
                };
            }
            Interceptors.consoleInterceptor = consoleInterceptor;
            var ConsoleInterceptor = (function () {
                function ConsoleInterceptor() {
                }
                Object.defineProperty(ConsoleInterceptor, "module", {
                    get: function () {
                        if (this._module) {
                            return this._module;
                        }
                        this._module = angular.module('consoleInterceptor', []);
                        this._module.config(['$httpProvider', function ($httpProvider) { return $httpProvider.interceptors.push(consoleInterceptor); }]);
                        return this._module;
                    },
                    enumerable: true,
                    configurable: true
                });
                return ConsoleInterceptor;
            }());
            Interceptors.ConsoleInterceptor = ConsoleInterceptor;
        })(Interceptors = AppComponents.Interceptors || (AppComponents.Interceptors = {}));
    })(AppComponents = App.AppComponents || (App.AppComponents = {}));
})(App || (App = {}));
