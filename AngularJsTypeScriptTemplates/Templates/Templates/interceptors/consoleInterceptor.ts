module App.AppComponents.Interceptors {

    consoleInterceptor.$inject = ["$injector", "$q"];

    export function consoleInterceptor($injector: ng.auto.IInjectorService, $q: ng.IQService): any {
        return {
            // On request success
            request: function(request) {
                console.log("Request Success");
                console.log(request);
                return request || $q.when(request);
            },

            // On request failure
            requestError: function(rejection) {
                console.log("Request Error");
                console.log(rejection);
                return $q.reject(rejection);
            },

            // On response success
            response: function(response) {
                console.log("Response Success");
                console.log(response);
                return response || $q.when(response);
            },

            // On response failture
            responseError: function (rejection) {
                console.log("Response Error");
                console.log(rejection);

                //Injector verwenden um andere Angular Services zu laden.
                var stateService = $injector.get<ng.ui.IStateService>('$state');
                stateService.go('NotAuthorized');

                return $q.reject(rejection);
            }
        }
    }

    export class ConsoleInterceptor {
        //#region Angular Module Definition
        private static _module: ng.IModule;

        public static get module(): ng.IModule {
            if (this._module) {return this._module;}
            this._module = angular.module('consoleInterceptor', []);
            this._module.config(['$httpProvider', ($httpProvider: ng.IHttpProvider) => $httpProvider.interceptors.push(consoleInterceptor)]);
            return this._module;
        }

        //#endregion
    }
} 