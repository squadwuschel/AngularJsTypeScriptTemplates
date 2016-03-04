module App.Directives {

    interface IDirectiveNameScope extends ng.IScope {
        //sqDragData: any;
    }

    /*
     * Beschreibung 
     * 
     * Optionale Attribute: 
     * 
     * Verwendung: 
     *  TODO 
     */
    export class DirectiveName implements ng.IDirective {
        public restrict = "A";
        //public template = "<span>Test Direktive draggable <span ng-bind='name'></span> </span>";
        public scope = {
            //sqDragData: "=", //Die Daten die verschoben werden sollen
        
        }

        //constructor(private xyzDataService: IxyzDataService, private abcConfig: IabcServiceProvider) {
        //}

        constructor() {
        }

        public link = ($scope: IDirectiveNameScope, element: JQuery, attr: ng.IAttributes) => {

        }

        //#region Angular Module Definition
        private static _module: ng.IModule;
        /**
        * Stellt die Angular Module für DirectiveName bereit.
        */
        public static get module(): ng.IModule {
            if (this._module) {
                return this._module;
            }

            //Hier die abhängigen Module für unsere Direktive definieren.
            this._module = angular.module('directiveModuleName.directives', []);
            //this._module.directive('DirectiveName', [(xyzDataService: IxyzDataService, abcConfig: IabcServiceProvider) => { return new DirectiveName(xyzDataService, abcConfig); }]);
            this._module.directive('DirectiveName', [() => { return new DirectiveName(); }]);
            return this._module;
        }
        //#endregion
    }
}