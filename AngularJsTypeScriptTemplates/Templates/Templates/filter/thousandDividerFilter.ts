module App.Filter {

    /*
     * Beschreibung 
     * 
     * Verwendung: 
     *  TODO 
     */
    export class ThousandDividerFilter {
     
        static $inject: string[] = ["$sce"];
       
        static filter($sce: ng.ISCEService) {
            return (value, param1, param2)=> {
                return value + "TEST";
            }
        }
      
        //#region Angular Module Definition
        private static _module: ng.IModule;

        /**
        * Stellt die Angular Module für ThousandDividerFilter bereit.
        */
        public static get module(): ng.IModule {
            if (this._module) {
                return this._module;
            }

            //Hier die abhängigen Module für unsere Direktive definieren.
            this._module = angular.module('thousandDivider', []);
            this._module.filter('thousandDivider', App.Filter.ThousandDividerFilter.filter);
            return this._module;
        }
        //#endregion
    }
}