/// <reference path="../../lib/platypus/platypus-node.d.ts" />

module controls {
	export class Navbar extends plat.ui.TemplateControl {
		templateUrl = '../controls/navbar/navbar.html';
		replaceWith = 'nav';

		leftNavbarAction(ev: plat.ui.IGestureEvent) {
			console.log(ev);
		}

		rightNavbarAction(ev: plat.ui.IGestureEvent) {
			console.log(ev);
		}
	}

	plat.register.control('navbar', Navbar);
}