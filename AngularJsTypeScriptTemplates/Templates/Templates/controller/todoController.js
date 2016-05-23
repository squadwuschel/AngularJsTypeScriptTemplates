var App;
(function (App) {
    var Controller;
    (function (Controller) {
        //Unsere CtrlName Klasse erstellen
        var TodoCtrl = (function () {
            function TodoCtrl(todoService, modalService) {
                this.todoService = todoService;
                this.modalService = modalService;
                this.locals = new CtrlNameLocalsModel();
                this.init();
            }
            /**
            * Initialisieren der wichtigsten lokalen Variablen
            */
            TodoCtrl.prototype.init = function () {
                this.locals.persons = this.todoService.getPersonList();
            };
            TodoCtrl.prototype.editPerson = function (personId) {
                this.modalService.editPerson(personId).then(function () {
                    //Do Something nachdem das Modal geschlossen wurde.
                });
            };
            Object.defineProperty(TodoCtrl, "module", {
                /**
                 * Stellt das aktuelle Angular Modul für den "CtrlName" bereit.
                 */
                get: function () {
                    if (this._module) {
                        return this._module;
                    }
                    //Hier die abhängigen Module für diesen controller definieren, damit brauchen wir von außen nur den Controller einbinden
                    //und müssen seine Abhängkeiten nicht wissen.
                    this._module = angular.module('todoCtrl', []);
                    this._module.controller('todoCtrl', TodoCtrl);
                    return this._module;
                },
                enumerable: true,
                configurable: true
            });
            TodoCtrl.$inject = [
                App.Services.TodoService.module.name,
                App.Services.ModalService.module.name,
            ];
            return TodoCtrl;
        })();
        Controller.TodoCtrl = TodoCtrl;
        var CtrlNameLocalsModel = (function () {
            function CtrlNameLocalsModel() {
                this.persons = [];
                this.name = "SquadWuschel";
            }
            return CtrlNameLocalsModel;
        })();
    })(Controller = App.Controller || (App.Controller = {}));
})(App || (App = {}));
//# sourceMappingURL=todoController.js.map