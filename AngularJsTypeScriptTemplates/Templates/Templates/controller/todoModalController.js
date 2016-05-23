var App;
(function (App) {
    var Controller;
    (function (Controller) {
        var TodoModalCtrl = (function () {
            function TodoModalCtrl($modalInstance, todoService, personId) {
                this.$modalInstance = $modalInstance;
                this.todoService = todoService;
                this.personId = personId;
                this.locals = new MyLocalsModel();
                this.init();
            }
            /**
            * Initiaisieren unseren Modals
            */
            TodoModalCtrl.prototype.init = function () {
                this.locals.person = this.todoService.getPerson(this.personId);
            };
            /**
            * Importieren der Resourcentexte die angegeben wurden.
            */
            TodoModalCtrl.prototype.save = function () {
                this.locals.isSaving = true;
                this.locals.hasError = false;
                this.locals.wasSubmitted = true;
                if (this.frm.$valid) {
                    //SaveChanges and Close
                    this.$modalInstance.close();
                }
                else {
                    this.locals.isSaving = false;
                }
            };
            /**
             * Vorgang abbrechen
            */
            TodoModalCtrl.prototype.cancel = function () {
                this.$modalInstance.dismiss('cancel');
            };
            Object.defineProperty(TodoModalCtrl, "module", {
                /**
                 * Stellt das aktuelle Angular Modul für den "TodoModalCtrl" bereit.
                 */
                get: function () {
                    if (this._module) {
                        return this._module;
                    }
                    //Hier die abhängigen Module für diesen controller definieren, damit brauchen wir von Außen nur den Controller einbinden
                    //und müssen seine Abhängkeiten nicht wissen.
                    this._module = angular.module('TodoModalCtrl', ["ui.bootstrap"]);
                    this._module.controller('TodoModalCtrl', TodoModalCtrl);
                    return this._module;
                },
                enumerable: true,
                configurable: true
            });
            //Injection für den Konstruktor - Achtung Reihenfolge wichtig!
            TodoModalCtrl.$inject = [
                "$uibModalInstance",
                App.Services.TodoService.module.name,
                "personId"
            ];
            return TodoModalCtrl;
        }());
        Controller.TodoModalCtrl = TodoModalCtrl;
        var MyLocalsModel = (function () {
            function MyLocalsModel() {
                this.isSaving = false;
                this.hasError = false;
                this.wasSubmitted = false;
                this.errorMessage = "Es ist ein Fehler aufgetreten";
            }
            return MyLocalsModel;
        }());
    })(Controller = App.Controller || (App.Controller = {}));
})(App || (App = {}));
