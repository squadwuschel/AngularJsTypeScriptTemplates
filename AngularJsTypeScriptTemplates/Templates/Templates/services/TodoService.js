var App;
(function (App) {
    var Services;
    (function (Services) {
        /**
         * Beschreibung
         */
        var TodoService = (function () {
            function TodoService() {
                this.persons = [];
                this.persons.push(new App.Person("SquadWuschel", 34, 1337));
                this.persons.push(new App.Person("Squadinator", 33, 7331));
                this.persons.push(new App.Person("SquadLeader", 3232312123.4454545, 3173));
            }
            TodoService.prototype.getPersonList = function () {
                return this.persons;
            };
            TodoService.prototype.getPerson = function (personId) {
                var person;
                this.getPersonList().forEach(function (value) {
                    if (value.id === personId) {
                        person = value;
                    }
                });
                return person;
            };
            Object.defineProperty(TodoService, "module", {
                /**
                * Stellt das aktuelle Angular Modul für "ServiceName" bereit.
                */
                get: function () {
                    if (this._module) {
                        return this._module;
                    }
                    //Hier die Abhängigen Module für diesen Service definieren.
                    this._module = angular.module('TodoService', []);
                    this._module.service('TodoService', TodoService);
                    return this._module;
                },
                enumerable: true,
                configurable: true
            });
            TodoService.$inject = [];
            return TodoService;
        })();
        Services.TodoService = TodoService;
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=todoService.js.map