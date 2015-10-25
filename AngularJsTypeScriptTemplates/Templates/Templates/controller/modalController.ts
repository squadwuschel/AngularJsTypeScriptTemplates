module App.Views.Ordner {
    //Den NS importieren für unsere Interfaces aus .NET die vom TypeLite.tt erstellt wurden.
    //import My = Sq.Internal...;

    export interface IMyModalCtrl {
        locals: MyLocalsModel;
        init(): void;
        save(): void;
        cancel(): void;
    }

    export class MyLocalsModel {
        isSaving: boolean = false;
        isEditMode: boolean;
        hasError: boolean = false;
        wasSubmitted: boolean = false;
        errorMessage: string = "Es ist ein Fehler aufgetreten";
    }

    export class MyModalCtrl implements IMyModalCtrl {
        //viewModel: My.IAddOrEditTreeNodeViewModel;
        locals: MyLocalsModel;
        frm: ng.IFormController;
        //Injection für den Konstruktor - Achtung Reihenfolge wichtig!
        static $inject = [
            "$modalInstance",
            //Services.ServiceName.module.name,
        ];

        constructor(
            private $modalInstance: ng.ui.bootstrap.IModalServiceInstance
            //private ServiceName: Services.ServiceInterface,
            ) {
            this.locals = new MyLocalsModel();
            this.init();
        }

        /**
        * Initiaisieren unseren Modals
        */
        init(): void {
            //TODO Unsere ViewModeldaten abrufen
        }

        /**
        * Importieren der Resourcentexte die angegeben wurden.
        */
        save(): void {
            this.locals.isSaving = true;
            this.locals.hasError = false;

            this.$modalInstance.close();
        }

        /**
         * Vorgang abbrechen
        */
        cancel(): void {
            this.$modalInstance.dismiss('cancel');
        }

        //#region Angular Module Definition
        private static _module: ng.IModule;

        /**
         * Stellt das aktuelle Angular Modul für den "MyModalCtrl" bereit.
         */
        public static get module(): ng.IModule {
            if (this._module) {
                return this._module;
            }

            //Hier die abhängigen Module für diesen controller definieren, damit brauchen wir von Außen nur den Controller einbinden
            //und müssen seine Abhängkeiten nicht wissen.
            this._module = angular.module('MyModalCtrl', [App.Views.Shared.Custom.ServiceName.module.name, "ui.bootstrap"]);
            this._module.controller('MyModalCtrl', MyModalCtrl);
            return this._module;
        }
        //#endregion
    }
} 