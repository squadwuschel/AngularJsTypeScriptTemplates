var App;
(function (App) {
    var Controller;
    (function (Controller) {
        //Unsere CtrlName Klasse erstellen
        var CtrlNameCtrl = (function () {
            function CtrlNameCtrl(todoService) {
                this.todoService = todoService;
                this.locals = new CtrlNameLocalsModel();
                this.init();
            }
            /**
            * Initialisieren der wichtigsten lokalen Variablen
            */
            CtrlNameCtrl.prototype.init = function () {
                this.locals.persons = this.todoService.getPersonList();
            };
            Object.defineProperty(CtrlNameCtrl, "module", {
                /**
                 * Stellt das aktuelle Angular Modul für den "CtrlName" bereit.
                 */
                get: function () {
                    if (this._module) {
                        return this._module;
                    }
                    //Hier die abhängigen Module für diesen controller definieren, damit brauchen wir von außen nur den Controller einbinden
                    //und müssen seine Abhängkeiten nicht wissen.
                    this._module = angular.module('CtrlNameCtrl', []);
                    this._module.controller('CtrlNameCtrl', CtrlNameCtrl);
                    return this._module;
                },
                enumerable: true,
                configurable: true
            });
            CtrlNameCtrl.$inject = [
                App.Services.TodoService.module.name
            ];
            return CtrlNameCtrl;
        })();
        Controller.CtrlNameCtrl = CtrlNameCtrl;
        var CtrlNameLocalsModel = (function () {
            function CtrlNameLocalsModel() {
                this.persons = [];
            }
            return CtrlNameLocalsModel;
        })();
    })(Controller = App.Controller || (App.Controller = {}));
})(App || (App = {}));
