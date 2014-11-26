/// <reference path="../../lib/platypus/platypus-node.d.ts" />

module controls {
    export class Main extends plat.ui.ViewControl {
        templateUrl = '../app/viewcontrols/main.viewcontrol.html';
        context = {};
    }
    plat.register.viewControl('main', Main);
}