module App.Views.Ordner {
    //Den NS importieren für unsere Interfaces aus .NET die vom TypeLite.tt erstellt wurden.
    //import My = Sq.Internal.ProjectName.Gui.Web.Models;

    //Alle Variablen für unseren Controller im Interface definieren
    export interface ICtrlNameCtrl {
        //Locals
        //viewModel: My.;
        locals: CtrlNameLocalsModel;
        //Functions
        init(): void;
    }

    export class CtrlNameLocalsModel {
    }

    //Unsere CtrlName Klasse erstellen
    export class CtrlNameCtrl implements ICtrlNameCtrl {
        locals: CtrlNameLocalsModel = new CtrlNameLocalsModel();
        static $inject = [
        ];

        constructor() {
            this.init();
        }

        /**
        * Initialisieren der wichtigsten lokalen Variablen
        */
        init(): void {
        }


        //#region Angular Module Definition
        private static _module: ng.IModule;

        /**
         * Stellt das aktuelle Angular Modul für den "CtrlName" bereit.
         */
        public static get module(): ng.IModule {
            if (this._module) {
                return this._module;
            }

            //Hier die abhängigen Module für diesen controller definieren, damit brauchen wir von außen nur den Controller einbinden
            //und müssen seine Abhängkeiten nicht wissen.
            this._module = angular.module('CtrlNameCtrl', []);
            this._module.controller('CtrlNameCtrl', CtrlNameCtrl);
            return this._module;
        }
        //#endregion
    }
} 