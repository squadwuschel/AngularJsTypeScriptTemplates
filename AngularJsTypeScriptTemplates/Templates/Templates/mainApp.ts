module App {
    export class MainApp {
        static createApp(angular: ng.IAngularStatic) {
            //Alle Module definieren die wir verwenden.
            angular.module("app.main", [
                //Fremdanbieter Module
                "ui.router",
                "ui.bootstrap",
                //Module die mit TypeScript geschrieben wurden einbinden
                App.Controller.TodoModalCtrl.module.name,
                App.Controller.TodoCtrl.module.name,
                App.Services.TodoService.module.name,
                App.Services.ModalService.module.name,
                App.Directives.CtrlAsDirectiveName.module.name,
                App.Directives.DirectiveName.module.name,
            ])
            .config([
                "$stateProvider", "$urlRouterProvider", "$locationProvider", ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider, $locationProvider: ng.ILocationProvider) => {
                    return new Config.RouteConfig($stateProvider, $urlRouterProvider, $locationProvider);
                }
            ]);
        }
    }
}

//Unsere Anwendung intial aufrufen/starten
App.MainApp.createApp(angular);

/*Window Interface erweitern, damit wir auch hier auf z.b. eigene Properties zugreifen können die wir z.B: in alten JS dateien definiert haben */
interface Window {
    siteRoot: string;
}

//Stackoverflow Post zur Frage wie man eine App am besten initialisiert
//http://stackoverflow.com/questions/29545246/how-to-initialize-angularjs-app-with-typescript

//Wenn wir die TypeScript Compilierung verwenden in der alle Ts Scripte in eine Datei compiliert werden, dann muss
//eine "_references.ts" Datei im Root des Projektes liegen und enthält alle Abhängigkeiten inkl. 
//der passenden Reihenfolge damit TS weiß welche Datei von welcher abhängt und alle in der richtigen Reihenfolge compiliert werden
//und damit am Ende auch alle Abhängigkeiten gefunden werden. - ACHTUNG ich hatte hier einige Probleme mit der richtigen Reihenfolge, daher
//verwende ich die Bundles von .NET