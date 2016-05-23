var App;
(function (App) {
    var Components;
    (function (Components) {
        /*
         * Beschreibung
         * Quelle: http://almerosteyn.com/2016/02/angular15-component-typescript
         *         https://docs.angularjs.org/guide/component
         *
         * Verwendung:
         *
         *  <edit-user-cmp name="ctrl.name"></edit-user-cmp>
         */
        var EditUserCmp = (function () {
            //constructor(private $interval: angular.IIntervalService) { }
            function EditUserCmp() {
                this.bindings = {
                    name: "="
                };
                this.controller = EditUserCmpCtrl;
                //this.template = `<p><label ng-bind="$ctrl.name"></label></p>`;
                this.templateUrl = "/Templates/components/editUser.template.html";
            }
            Object.defineProperty(EditUserCmp, "module", {
                /**
                * Stellt die Angular Module für TrueFalseView bereit.
                */
                get: function () {
                    if (this._module) {
                        return this._module;
                    }
                    //Hier die abhängigen Module für unsere Direktive definieren.
                    this._module = angular.module('editUserCmp', []);
                    //this._module.directive('EditUserCmp', ["$interval", ($interval: angular.IIntervalService) => { return new EditUserCmp($interval); }]);
                    this._module.component('editUserCmp', new EditUserCmp());
                    return this._module;
                },
                enumerable: true,
                configurable: true
            });
            return EditUserCmp;
        }());
        Components.EditUserCmp = EditUserCmp;
        /*
        * Implementierung unseres EditUserCmp Controllers.
        */
        var EditUserCmpCtrl = (function () {
            function EditUserCmpCtrl() {
            }
            EditUserCmpCtrl.prototype.$onInit = function () {
                console.log("Init Component");
            };
            EditUserCmpCtrl.prototype.$onChanges = function (changesObj) {
                console.log("Changed Obj: ");
                console.log(changesObj);
            };
            EditUserCmpCtrl.prototype.$onDestroy = function () {
            };
            EditUserCmpCtrl.$inject = [];
            return EditUserCmpCtrl;
        }());
        Components.EditUserCmpCtrl = EditUserCmpCtrl;
    })(Components = App.Components || (App.Components = {}));
})(App || (App = {}));
