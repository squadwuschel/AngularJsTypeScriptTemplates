module App.Controller {
    //Den NS importieren für unsere Interfaces aus .NET die vom TypeLite.tt erstellt wurden.
    //import My = Sq.Internal.ProjectName.Gui.Web.Models;

    //Alle Variablen für unseren Controller im Interface definieren
    export interface ITodoCtrl {
        //Locals
        //viewModel: My.;
        //Functions
        init(): void;
    }

    //Unsere CtrlName Klasse erstellen
    export class TodoCtrl implements ITodoCtrl {
        private locals: CtrlNameLocalsModel = new CtrlNameLocalsModel();
        static $inject: string[] = [
            App.Services.TodoService.module.name,
            App.Services.ModalService.module.name,
        ];

        constructor(private todoService: Services.ITodoService,
                    private modalService: Services.IModalService) {
            this.init();
        }

        /**
        * Initialisieren der wichtigsten lokalen Variablen
        */
        init(): void {
            this.locals.persons = this.todoService.getPersonList();
        }

        public editPerson(personId: number): void {
            this.modalService.editPerson(personId).then((data) => {
               //Do Something nachdem das Modal geschlossen wurde.
                console.log(data);
            });
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
            this._module = angular.module('todoCtrl', []);
            this._module.controller('todoCtrl', TodoCtrl);
            return this._module;
        }
        //#endregion
    }

    class CtrlNameLocalsModel {
        persons: App.Person[] = [];
        name : string = "SquadWuschel";
    }
} 