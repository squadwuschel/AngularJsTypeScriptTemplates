module App.Services {
    //Den NS importieren für unsere Interfaces aus .NET die vom TypeLite.tt erstellt wurden.
    //import My = Internal.;

    export interface ITodoService {
        getPersonList(): App.Person[];
        getPerson(personId: number): Person;
    }

    /**
     * Beschreibung
     */
    export class TodoService implements ITodoService {
        private persons : App.Person[] = [];

        static $inject: string[] = [];

        constructor() {
            this.persons.push(new App.Person("SquadWuschel", 34, 1337));
            this.persons.push(new App.Person("Squadinator", 33, 7331));
            this.persons.push(new App.Person("SquadLeader", 3232312123.4454545, 3173));
        }

        public getPersonList(): App.Person[] {
            return this.persons;
        }

        public getPerson(personId: number): Person {
            var person: Person;

            this.getPersonList().forEach(value => {
                if (value.id === personId) {
                    person = value;
                }
            });

            return person;
        }

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
            this._module = angular.module('TodoService', []);
            this._module.service('TodoService', TodoService);
            return this._module;
        }
        //#endregion
    }
} 