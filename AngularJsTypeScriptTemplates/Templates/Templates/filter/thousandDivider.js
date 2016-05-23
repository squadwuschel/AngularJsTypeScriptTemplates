var App;
(function (App) {
    var Directives;
    (function (Directives) {
        /*
         * Beschreibung
         *
         * Optionale Attribute:
         *
         * Verwendung:
         *  TODO
         */
        var ThousandDivider = (function () {
            //constructor(private xyzDataService: IxyzDataService, private abcConfig: IabcServiceProvider) {
            //}
            function ThousandDivider() {
                this.restrict = "A";
                //public template = "<span>Test Direktive draggable <span ng-bind='name'></span> </span>";
                this.scope = {};
                this.link = function ($scope, element, attr) {
                };
            }
            Object.defineProperty(ThousandDivider, "module", {
                /**
                * Stellt die Angular Module für ThousandDivider bereit.
                */
                get: function () {
                    if (this._module) {
                        return this._module;
                    }
                    //Hier die abhängigen Module für unsere Direktive definieren.
                    this._module = angular.module('thousandDivider', []);
                    //this._module.directive('ThousandDivider', [(xyzDataService: IxyzDataService, abcConfig: IabcServiceProvider) => { return new ThousandDivider(xyzDataService, abcConfig); }]);
                    this._module.filter('thousandDivider', [function () { return new ThousandDivider(); }]);
                    return this._module;
                },
                enumerable: true,
                configurable: true
            });
            return ThousandDivider;
        })();
        Directives.ThousandDivider = ThousandDivider;
    })(Directives = App.Directives || (App.Directives = {}));
})(App || (App = {}));
