var App;
(function (App) {
    var Services;
    (function (Services) {
        /**
         * Beschreibung
         */
        var ServiceName = (function () {
            function ServiceName() {
            }
            ServiceName.prototype.getPersonList = function () {
                var personList = [];
                personList.push(new App.Person("SquadWuschel", 34));
                personList.push(new App.Person("Squadinator", 33));
                personList.push(new App.Person("SquadLeader", 35));
                return personList;
            };
            Object.defineProperty(ServiceName, "module", {
                /**
                * Stellt das aktuelle Angular Modul für "ServiceName" bereit.
                */
                get: function () {
                    if (this._module) {
                        return this._module;
                    }
                    //Hier die Abhängigen Module für diesen Service definieren.
                    this._module = angular.module('ServiceName', []);
                    this._module.service('ServiceName', ServiceName);
                    return this._module;
                },
                enumerable: true,
                configurable: true
            });
            ServiceName.$inject = [];
            return ServiceName;
        })();
        Services.ServiceName = ServiceName;
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
