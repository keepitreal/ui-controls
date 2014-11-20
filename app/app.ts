/// <reference path="../lib/platypus/platypus-node.d.ts" />

module controls {
    /// app
    export class App extends plat.App { }
    plat.register.app('controls', App);
    
    /// viewcontrol
    export class Main extends plat.ui.ViewControl {
        templateUrl = 'app/main.viewcontrol.html';
        context = {};
    }
    plat.register.viewControl('main', Main);
}