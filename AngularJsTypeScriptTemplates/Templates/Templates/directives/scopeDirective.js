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
        var DirectiveName = (function () {
            //constructor(private xyzDataService: IxyzDataService, private abcConfig: IabcServiceProvider) {
            //}
            function DirectiveName() {
                this.restrict = "A";
                this.require = "ngModel";
                //public template = "<span>Test Direktive draggable <span ng-bind='name'></span> </span>";
                this.scope = {
                    sqDragData: "=",
                };
                this.link = function ($scope, element, attr, ngModel) {
                    //var value = ngModel.$viewValue;
                    //$scope.$watch(() => ngModel.$viewValue, (old, newValue) => {
                    //    var name = "test";
                    //});
                };
                this.controller = ['$scope', function ($scope) {
                    }];
            }
            Object.defineProperty(DirectiveName, "module", {
                /**
                * Stellt die Angular Module für DirectiveName bereit.
                */
                get: function () {
                    if (this._module) {
                        return this._module;
                    }
                    //Hier die abhängigen Module für unsere Direktive definieren.
                    this._module = angular.module('directiveName', []);
                    //this._module.directive('DirectiveName', [(xyzDataService: IxyzDataService, abcConfig: IabcServiceProvider) => { return new DirectiveName(xyzDataService, abcConfig); }]);
                    this._module.directive('directiveName', [function () { return new DirectiveName(); }]);
                    return this._module;
                },
                enumerable: true,
                configurable: true
            });
            return DirectiveName;
        })();
        Directives.DirectiveName = DirectiveName;
    })(Directives = App.Directives || (App.Directives = {}));
})(App || (App = {}));
//# sourceMappingURL=scopeDirective.js.map