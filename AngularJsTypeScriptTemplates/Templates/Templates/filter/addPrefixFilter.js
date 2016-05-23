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
        var AddPrefixFilter = (function () {
            function AddPrefixFilter() {
            }
            AddPrefixFilter.filter = function ($sce) {
                return function (value, text) {
                    return text + ' ' + value;
                };
            };
            Object.defineProperty(AddPrefixFilter, "module", {
                /**
                * Stellt die Angular Module für AddPrefixFilter bereit.
                */
                get: function () {
                    if (this._module) {
                        return this._module;
                    }
                    //Hier die abhängigen Module für unsere Direktive definieren.
                    this._module = angular.module('addPrefix', []);
                    this._module.filter('addPrefix', App.Filter.AddPrefixFilter.filter);
                    return this._module;
                },
                enumerable: true,
                configurable: true
            });
            AddPrefixFilter.$inject = ["$sce"];
            return AddPrefixFilter;
        })();
        Filter.AddPrefixFilter = AddPrefixFilter;
    })(Filter = App.Filter || (App.Filter = {}));
})(App || (App = {}));
//# sourceMappingURL=addPrefixFilter.js.map