/// <reference path="./lib/platypus.ts" />

module todo {
    /// app
    export class App extends plat.App { }
    plat.register.app('todo', App);
    
    /// viewcontrol
    export class Main extends plat.ui.ViewControl {
        templateUrl = 'main.viewcontrol.html';
        context = {};
    }
    plat.register.viewControl('main', Main);
}