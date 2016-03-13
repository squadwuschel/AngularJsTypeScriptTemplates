module App.Filter {

    /*
     * Beschreibung 
     * 
     * Verwendung: 
     *  TODO 
     */
    export class AddPrefixFilter {
     
        static $inject: string[] = ["$sce"];
       
        static filter($sce: ng.ISCEService) {
            return (value, text) => {
                return text + ' ' + value;
            }
        }
      
        //#region Angular Module Definition
        private static _module: ng.IModule;

        /**
        * Stellt die Angular Module für AddPrefixFilter bereit.
        */
        public static get module(): ng.IModule {
            if (this._module) {
                return this._module;
            }

            //Hier die abhängigen Module für unsere Direktive definieren.
            this._module = angular.module('addPrefix', []);
            this._module.filter('addPrefix', App.Filter.AddPrefixFilter.filter);
            return this._module;
        }
        //#endregion
    }
}