module App.Components {

    /*
     * Beschreibung
     * Quelle: http://almerosteyn.com/2016/02/angular15-component-typescript
     *         https://docs.angularjs.org/guide/component
     *         http://stackoverflow.com/questions/35451652/what-is-best-practice-to-create-an-angularjs-1-5-component-in-typescript
     *         http://www.codelord.net/2016/04/14/angular-1-dot-5-new-component-lifecycle-hooks/
     *         http://blog.thoughtram.io/angularjs/2016/03/29/exploring-angular-1.5-lifecycle-hooks.html
     *
     * Verwendung: 
     *
     *  <edit-user-cmp name="ctrl.name" test="ctrl.blubb></edit-user-cmp>
     */
    export class EditUserCmp implements ng.IComponentOptions {
        public bindings: any;
        public controller: any;
        //public template: string;
        public templateUrl: string;
        public transclude: boolean;

        constructor() {
            this.bindings = {
                name: "=",
                test: "<"   //One Way Binding
            }

            this.controller = EditUserCmpCtrl;
            //this.template = `<p><label ng-bind="$ctrl.name"></label><label ng-bind="$ctrl.test"></label></p>`;
            this.templateUrl = "/Templates/components/editUser.template.html";
            this.transclude = false;
        }

        //#region Angular Module Definition
        private static _module: ng.IModule;
        public static get module(): ng.IModule {
            if (this._module) {return this._module;}
            this._module = angular.module('editUserCmp', []);
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
        public test: string;

        static $inject: string[] = ["$element"];

        constructor(private $element) { }

        public $onInit() {
            console.log("Init Component");
        }

        public $onChanges(changesObj) {
            //geht nur mit OneWay Bindings "<"
            console.log("Changed Obj: ");
            console.log(changesObj);
        }

        public $postLink() {
            console.log(this.$element);
        }

        public $onDestroy() { }
    }
}