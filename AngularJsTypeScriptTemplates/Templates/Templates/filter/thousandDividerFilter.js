var App;
(function (App) {
    var Filter;
    (function (Filter) {
        /*
         * Beschreibung
         *
         * Verwendung:
         *  TODO
         */
        var ThousandDividerFilter = (function () {
            function ThousandDividerFilter() {
            }
            ThousandDividerFilter.filter = function ($sce) {
                return function (value, param1, param2) {
                    return value + "TEST";
                };
            };
            Object.defineProperty(ThousandDividerFilter, "module", {
                /**
                * Stellt die Angular Module für ThousandDividerFilter bereit.
                */
                get: function () {
                    if (this._module) {
                        return this._module;
                    }
                    //Hier die abhängigen Module für unsere Direktive definieren.
                    this._module = angular.module('thousandDivider', []);
                    this._module.filter('thousandDivider', App.Filter.ThousandDividerFilter.filter);
                    return this._module;
                },
                enumerable: true,
                configurable: true
            });
            ThousandDividerFilter.$inject = ["$sce"];
            return ThousandDividerFilter;
        })();
        Filter.ThousandDividerFilter = ThousandDividerFilter;
    })(Filter = App.Filter || (App.Filter = {}));
})(App || (App = {}));
