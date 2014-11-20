/// <reference path="../../lib/platypus/platypus-node.d.ts" />

module controls {
	export class Navbar extends plat.ui.TemplateControl {
		templateUrl = 'controls/navbar/navbar.html';
		replaceWith = 'nav';
	}

	plat.register.control('navbar', Navbar);
}