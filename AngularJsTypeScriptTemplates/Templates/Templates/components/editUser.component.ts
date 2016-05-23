module App.Components {

    /*
     * Beschreibung
     * Quelle: http://almerosteyn.com/2016/02/angular15-component-typescript
     *         https://docs.angularjs.org/guide/component
     *
     * Verwendung: 
     *
     *  <edit-user-cmp name="ctrl.name"></edit-user-cmp>
     */
    export class EditUserCmp implements ng.IComponentOptions {
        public bindings: any;
        public controller: any;
        //public template: string;
        public templateUrl: string;


        //constructor(private $interval: angular.IIntervalService) { }
        constructor() {
            this.bindings = {
                name : "="
            }

            this.controller = EditUserCmpCtrl;
            //this.template = `<p><label ng-bind="$ctrl.name"></label></p>`;
            this.templateUrl = "/Templates/components/editUser.template.html";
        }

        //#region Angular Module Definition
        private static _module: ng.IModule;
        /**
        * Stellt die Angular Module für TrueFalseView bereit.
        */
        public static get module(): ng.IModule {
            if (this._module) {
                return this._module;
            }

            //Hier die abhängigen Module für unsere Direktive definieren.
            this._module = angular.module('editUserCmp', []);
            //this._module.directive('EditUserCmp', ["$interval", ($interval: angular.IIntervalService) => { return new EditUserCmp($interval); }]);
            this._module.component('editUserCmp', new EditUserCmp());
            return this._module;
        }
        //#endregion
    }

    /*
    * Implementierung unseres EditUserCmp Controllers.
    */
    export class EditUserCmpCtrl {
        public name: string;

        static $inject: string[] = [];

        constructor() {}

        public $onInit() {
            console.log("Init Component");
        }

        public $onChanges(changesObj) {
            console.log("Changed Obj: ");
            console.log(changesObj);
        }

        public $onDestroy() {
            
        }

    }
}