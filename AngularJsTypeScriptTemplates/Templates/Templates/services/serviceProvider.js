var App;
(function (App) {
    var Services;
    (function (Services) {
        /*
         * Configklasse für einen Service. Hier kann man z.B. die passenden Css Klassen ändern die gesetzt werden.
         */
        var ProviderNameServiceProvider = (function () {
            function ProviderNameServiceProvider() {
                var _this = this;
                //Die Konfigurationsdaten entsprechend setzen.
                this.config = {
                    customCssClassName: "sq-drag"
                };
                this.$get = function () {
                    return {
                        config: _this.config
                    };
                };
            }
            Object.defineProperty(ProviderNameServiceProvider, "module", {
                /**
                * Stellt die Angular Module für providerModuleName bereit.
                */
                get: function () {
                    if (this._module) {
                        return this._module;
                    }
                    //Hier die abhängigen Module für unser Drang and Drop definieren.
                    this._module = angular.module('providerModuleName.provider', []);
                    this.module.provider("ProviderNameConfig", function () { return new ProviderNameServiceProvider(); });
                    return this._module;
                },
                enumerable: true,
                configurable: true
            });
            return ProviderNameServiceProvider;
        })();
        Services.ProviderNameServiceProvider = ProviderNameServiceProvider;
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=serviceProvider.js.map