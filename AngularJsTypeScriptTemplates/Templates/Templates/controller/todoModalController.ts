module App.Controller {
    //Den NS importieren für unsere Interfaces aus .NET die vom TypeLite.tt erstellt wurden.
    //import My = Sq.Internal...;

    export interface ITodoModalCtrl {
        init(): void;
        save(): void;
        cancel(): void;
    }

    export class TodoModalCtrl implements ITodoModalCtrl {
        //viewModel: My.IAddOrEditTreeNodeViewModel;
        private locals: MyLocalsModel;
        frm: ng.IFormController;
        //Injection für den Konstruktor - Achtung Reihenfolge wichtig!
        static $inject = [
            "$modalInstance",
            Services.TodoService.module.name,
             "personId"
        ];

        constructor(
            private $modalInstance: ng.ui.bootstrap.IModalServiceInstance,
            private todoService: Services.ITodoService,
            private personId: number) {
            this.locals = new MyLocalsModel();
            this.init();
        }

        /**
        * Initiaisieren unseren Modals
        */
        init(): void {
            this.locals.person = this.todoService.getPerson(this.personId);
        }

        /**
        * Importieren der Resourcentexte die angegeben wurden.
        */
        save(): void {
            this.locals.isSaving = true;
            this.locals.hasError = false;
            this.locals.wasSubmitted = true;

            if (this.frm.$valid) {
               //SaveChanges and Close
               this.$modalInstance.close();
            } else {
                this.locals.isSaving = false;
            }
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
         * Stellt das aktuelle Angular Modul für den "TodoModalCtrl" bereit.
         */
        public static get module(): ng.IModule {
            if (this._module) {
                return this._module;
            }

            //Hier die abhängigen Module für diesen controller definieren, damit brauchen wir von Außen nur den Controller einbinden
            //und müssen seine Abhängkeiten nicht wissen.
            this._module = angular.module('TodoModalCtrl', ["ui.bootstrap"]);
            this._module.controller('TodoModalCtrl', TodoModalCtrl);
            return this._module;
        }
        //#endregion
    }

    class MyLocalsModel {
        person: App.Person;
        isSaving: boolean = false;
        isEditMode: boolean;
        hasError: boolean = false;
        wasSubmitted: boolean = false;
        errorMessage: string = "Es ist ein Fehler aufgetreten";
    }
} 