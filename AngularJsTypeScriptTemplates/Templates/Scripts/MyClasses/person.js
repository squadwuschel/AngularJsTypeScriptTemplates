var App;
(function (App) {
    var Person = (function () {
        function Person(name, age, id) {
            this.name = name;
            this.age = age;
            this.id = id;
        }
        return Person;
    })();
    App.Person = Person;
})(App || (App = {}));
//# sourceMappingURL=person.js.map