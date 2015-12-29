// features/support/world.js
'use strict';

var zombie = require('zombie');

function World() {

	this.browser = new zombie();

	this.visit = function(url, calback){
		this.browser.visit(url, calback);
	}

}

module.exports.World = World;
