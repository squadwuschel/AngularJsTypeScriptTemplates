module App.Directives {

    /* 
	* Definition der "Scope" Variablen für die CtrlAsDirectiveName Directive
	*/
    export interface ICtrlAsDirectiveNameScope {
        sqTitle: string;
        isDeleted: boolean;
        model: string;
}

    /*
	* Beschreibung
	*
	* Verwendung: 
	*  <div ctrl-as-directive-name sq-title="ctrl.name"></div>
	*/
    export class CtrlAsDirectiveName implements ng.IDirective {
        public restrict: string = "A";
        public replcae: boolean = true;
        public require = "ngModel";
        //public templateUrl: string = siteRoot + 'ScriptsApp/directives/templates/CtrlAsDirectiveName.directives.html';
        public template: string = '<a ng-click="ctrl.doSomethingBtnClick()" class="btn btn-default" title="{{ctrl.sqTitle}}">Test {{ctrl.sqTitle}}</a>';
        public scope = {}

        public controller = CtrlAsDirectiveNameCtrl;
        public controllerAs = "ctrl";
        public bindToController = {
            sqTitle: "=", 
            isDeleted: "=",
            model : "=ngModel"
        }

        //constructor(private $interval: angular.IIntervalService) { }
        constructor() { }

        public link = ($scope: any, element: JQuery, attrs: ng.IAttributes, model: ng.INgModelController) => {

        }


        //#region Angular Module Definition
        private static _module: ng.IModule;
        /**
        * Stellt die Angular Module für CtrlAsDirectiveName bereit.
        */
        public static get module(): ng.IModule {
            if (this._module) {
                return this._module;
            }

            //Hier die abhängigen Module für unsere Direktive definieren.
            this._module = angular.module('ctrlAsDirectiveName', []);
            //this._module.directive('CtrlAsDirectiveName', ["$interval", ($interval: angular.IIntervalService) => { return new CtrlAsDirectiveName($interval); }]);
            this._module.directive('ctrlAsDirectiveName', [() => { return new CtrlAsDirectiveName(); }]);
            return this._module;
        }
        //#endregion
    }

    /*
	* Implementierung unseres CtrlAsDirectiveName Controllers.
	*/
    export class CtrlAsDirectiveNameCtrl implements ICtrlAsDirectiveNameScope {
        public sqTitle: string;
        public isDeleted: boolean;
        public model: string;

        static $inject = [];

        constructor() {
            this.init();
        }

        init(): void { }

        /*
		* Eine Funktion die z.B: über ein btn Click des Templates aufgerufen werden kann
		*/
        public doSomethingBtnClick(): void {
            //Zugriff auf die "Scope" Variable mit "this"
            this.sqTitle = "Blubb";
        }
    }
}