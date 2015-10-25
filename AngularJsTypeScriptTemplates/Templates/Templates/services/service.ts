module App.Views.Shared.Custom {
    //Den NS importieren für unsere Interfaces aus .NET die vom TypeLite.tt erstellt wurden.
    //import My = Internal.;

    export interface IServiceName {
    }

    /**
     * Beschreibung
     */
    export class ServiceName implements IServiceName {
        static $inject = [];

        constructor() { }

        //#region Angular Module Definition
        private static _module: ng.IModule;

        /**
        * Stellt das aktuelle Angular Modul für "ServiceName" bereit.
        */
        public static get module(): ng.IModule {
            if (this._module) {
                return this._module;
            }

            //Hier die Abhängigen Module für diesen Service definieren.
            this._module = angular.module('ServiceName', []);
            this._module.service('ServiceName', ServiceName);
            return this._module;
        }

        //#endregion
    }
} 