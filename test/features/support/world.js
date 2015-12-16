// features/support/world.js
'use strict';

function World() {
    this.prop = "Hello from the World!";

    this.greetings = function(name, callback) {
      console.log("\n----Hello " + name);
      callback();
    };
}

module.exports.World = World;
