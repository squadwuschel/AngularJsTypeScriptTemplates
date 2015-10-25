module App.Directives {

    /* 
		* Definition der "Scope" Variablen für die CtrlAsDirectiveName Directive
		*/
    export interface ICtrlAsDirectiveNameScope {
        sqTitle;
    }

    /*
		 * Beschreibung
		 *
		 * Verwendung: 
		 *  
		 */
    export class CtrlAsDirectiveName implements ng.IDirective {
        public restrict: string = "A";
        public replcae: boolean = true;
        //public require = "ngModel";
        //public templateUrl: string = siteRoot + 'ScriptsApp/directives/templates/CtrlAsDirectiveName.directives.html';
        public template: string = '<a ng-click="directiveName.doSomethingBtnClick()" ng-class="btn btn-default" title="{{directiveName.sqTitle}}">Test</a>';
        public scope = {}

        public controller = CtrlAsDirectiveNameCtrl;
        public controllerAs = "directiveName";
        public bindToController: ICtrlAsDirectiveNameScope = {
            sqTitle: "=" //Der Titel der angezeigt werden soll Optional
        }

        constructor() { }

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
            this._module = angular.module('CtrlAsDirectiveName.directives', []);
            this._module.directive('CtrlAsDirectiveName', [() => { return new CtrlAsDirectiveName(); }]);
            return this._module;
        }

        //#endregion
    }

    /*
	* Implementierung unseres CtrlAsDirectiveName Controllers.
	*/
    export class CtrlAsDirectiveNameCtrl implements ICtrlAsDirectiveNameScope {
        public sqTitle: string;

        //static $inject = [];

        /* 
			* Da wir die CSS Klassen für einen Provider setzen, hier den passenden Provider injecten und im Template dann auf dessen Config Werte zugreifen.
			*/
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