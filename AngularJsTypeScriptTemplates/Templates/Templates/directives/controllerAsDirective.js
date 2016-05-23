var App;
(function (App) {
    var Directives;
    (function (Directives) {
        /*
        * Beschreibung
        *
        * Verwendung:
        *  <div ctrl-as-directive-name sq-title="ctrl.name"></div>
        */
        var CtrlAsDirectiveName = (function () {
            //constructor(private $interval: angular.IIntervalService) { }
            function CtrlAsDirectiveName() {
                this.restrict = "A";
                this.replcae = true;
                this.require = "ngModel";
                //public templateUrl: string = siteRoot + 'ScriptsApp/directives/templates/CtrlAsDirectiveName.directives.html';
                this.template = '<a ng-click="ctrl.doSomethingBtnClick()" class="btn btn-default" title="{{ctrl.sqTitle}}">Test {{ctrl.sqTitle}}</a>';
                this.scope = {};
                this.controller = CtrlAsDirectiveNameCtrl;
                this.controllerAs = "ctrl";
                this.bindToController = {
                    sqTitle: "=",
                    isDeleted: "=",
                    model: "=ngModel"
                };
                this.link = function ($scope, element, attrs, model) {
                };
            }
            Object.defineProperty(CtrlAsDirectiveName, "module", {
                /**
                * Stellt die Angular Module für CtrlAsDirectiveName bereit.
                */
                get: function () {
                    if (this._module) {
                        return this._module;
                    }
                    //Hier die abhängigen Module für unsere Direktive definieren.
                    this._module = angular.module('ctrlAsDirectiveName', []);
                    //this._module.directive('CtrlAsDirectiveName', ["$interval", ($interval: angular.IIntervalService) => { return new CtrlAsDirectiveName($interval); }]);
                    this._module.directive('ctrlAsDirectiveName', [function () { return new CtrlAsDirectiveName(); }]);
                    return this._module;
                },
                enumerable: true,
                configurable: true
            });
            return CtrlAsDirectiveName;
        })();
        Directives.CtrlAsDirectiveName = CtrlAsDirectiveName;
        /*
        * Implementierung unseres CtrlAsDirectiveName Controllers.
        */
        var CtrlAsDirectiveNameCtrl = (function () {
            function CtrlAsDirectiveNameCtrl() {
                this.init();
            }
            CtrlAsDirectiveNameCtrl.prototype.init = function () { };
            /*
            * Eine Funktion die z.B: über ein btn Click des Templates aufgerufen werden kann
            */
            CtrlAsDirectiveNameCtrl.prototype.doSomethingBtnClick = function () {
                //Zugriff auf die "Scope" Variable mit "this"
                this.sqTitle = "Blubb";
            };
            CtrlAsDirectiveNameCtrl.$inject = [];
            return CtrlAsDirectiveNameCtrl;
        })();
        Directives.CtrlAsDirectiveNameCtrl = CtrlAsDirectiveNameCtrl;
    })(Directives = App.Directives || (App.Directives = {}));
})(App || (App = {}));
//# sourceMappingURL=controllerAsDirective.js.map