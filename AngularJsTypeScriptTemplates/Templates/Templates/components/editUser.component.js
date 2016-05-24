var App;
(function (App) {
    var Components;
    (function (Components) {
        /*
         * Beschreibung
         * Quelle: http://almerosteyn.com/2016/02/angular15-component-typescript
         *         https://docs.angularjs.org/guide/component
         *         http://stackoverflow.com/questions/35451652/what-is-best-practice-to-create-an-angularjs-1-5-component-in-typescript
         *         http://www.codelord.net/2016/04/14/angular-1-dot-5-new-component-lifecycle-hooks/
         *         http://blog.thoughtram.io/angularjs/2016/03/29/exploring-angular-1.5-lifecycle-hooks.html
         *
         * Verwendung:
         *
         *  <edit-user-cmp name="ctrl.name" test="ctrl.blubb></edit-user-cmp>
         */
        var EditUserCmp = (function () {
            function EditUserCmp() {
                this.bindings = {
                    name: "=",
                    test: "<" //One Way Binding
                };
                this.controller = EditUserCmpCtrl;
                //this.template = `<p><label ng-bind="$ctrl.name"></label><label ng-bind="$ctrl.test"></label></p>`;
                this.templateUrl = "/Templates/components/editUser.template.html";
                this.transclude = false;
            }
            Object.defineProperty(EditUserCmp, "module", {
                get: function () {
                    if (this._module) {
                        return this._module;
                    }
                    this._module = angular.module('editUserCmp', []);
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
            function EditUserCmpCtrl($element) {
                this.$element = $element;
            }
            EditUserCmpCtrl.prototype.$onInit = function () {
                console.log("Init Component");
            };
            EditUserCmpCtrl.prototype.$onChanges = function (changesObj) {
                //geht nur mit OneWay Bindings "<"
                console.log("Changed Obj: ");
                console.log(changesObj);
            };
            EditUserCmpCtrl.prototype.$postLink = function () {
                console.log(this.$element);
            };
            EditUserCmpCtrl.prototype.$onDestroy = function () { };
            EditUserCmpCtrl.$inject = ["$element"];
            return EditUserCmpCtrl;
        }());
        Components.EditUserCmpCtrl = EditUserCmpCtrl;
    })(Components = App.Components || (App.Components = {}));
})(App || (App = {}));
