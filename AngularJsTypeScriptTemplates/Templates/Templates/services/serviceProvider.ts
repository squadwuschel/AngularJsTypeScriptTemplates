module App.Services {

    /*
     * Configklasse für einen Service. Hier kann man z.B. die passenden Css Klassen ändern die gesetzt werden.
     */
    export class ProviderNameServiceProvider implements ng.IServiceProvider, IProviderNameServiceProvider {
        //Die Konfigurationsdaten entsprechend setzen.
        config: IProviderNameConfig = {
            customCssClassName: "sq-drag"

        }

        $get = () => {
            return {
                config: this.config
            }
        };

        //#region Angular Module Definition
        private static _module: ng.IModule;
        /**
        * Stellt die Angular Module für providerModuleName bereit.
        */
        public static get module(): ng.IModule {
            if (this._module) {
                return this._module;
            }

            //Hier die abhängigen Module für unser Drang and Drop definieren.
            this._module = angular.module('providerModuleName.provider', []);
            this.module.provider("ProviderNameConfig", () => new ProviderNameServiceProvider());
            return this._module;
        }
        //#endregion
    }

    export interface IProviderNameServiceProvider {
        config: IProviderNameConfig;
    }

    export interface IProviderNameConfig {
        customCssClassName: string;
    }
}