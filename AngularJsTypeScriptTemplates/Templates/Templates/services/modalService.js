var App;
(function (App) {
    var Services;
    (function (Services) {
        /**
         * Ui-Bootstrap Modals verwenden!
         * Ein ModalService erstellen über die man auf alle Modals in der Anwendung zugreifen kann.
         * Quelle:
         * http://www.ngroutes.com/questions/AUuAClOCa5vEqxqlK2UN/how-to-use-angular-ui-bootstrap-modals-in-typescript.html
         */
        var ModalService = (function () {
            function ModalService($uibModal, $q) {
                this.$uibModal = $uibModal;
                this.$q = $q;
            }
            /**
             * Bearbeiten einer Person, dem die passende PersonId Übergeben wird und ein Modal zum Bearbeiten öffnet.
             * @param id Die Id der Person welche Bearbeitet werden soll.
             */
            ModalService.prototype.editPerson = function (personId) {
                var options = {
                    templateUrl: '/Todo/TodoEditModal',
                    //Controller As Syntax für Modal Controller
                    controller: App.Controller.TodoModalCtrl.module.name + ' as ctrl',
                    size: 'lg',
                    backdrop: "static",
                    resolve: {
                        personId: function () { return personId; }
                    }
                };
                //Das Promise zurückgeben, damit man auf den Rückgabewert des Modals in der Anwendung entsprechend reagieren kann.
                return this.$uibModal.open(options).result
                    .then(function (updatedItem) {
                    return updatedItem;
                });
            };
            Object.defineProperty(ModalService, "module", {
                /**
                 * Stellt das aktuelle Angular Modul für den "ModalServiceName" bereit.
                 */
                get: function () {
                    if (this._module) {
                        return this._module;
                    }
                    //Hier die abhängigen Module für diesen controller definieren, damit brauchen wir von Außen nur den Controller einbinden
                    //und müssen seine Abhängkeiten nicht wissen.
                    this._module = angular.module('ModalService', ["ui.bootstrap"]);
                    this._module.service('ModalService', ModalService);
                    return this._module;
                },
                enumerable: true,
                configurable: true
            });
            ModalService.$inject = ['$uibModal', "$q"];
            return ModalService;
        }());
        Services.ModalService = ModalService;
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
