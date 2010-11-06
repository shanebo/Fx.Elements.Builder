/*
---
description: Clear definition and use of groups of related animations on multiple elements.

license: MIT-style

authors:
- Shane Thacker

requires:
- more/Fx.Elements

provides: [Fx.Elements.Builder, Fx.Preset]

...
*/

Preset = new Class({

	initialize: function(elements, states) {
		this.elements = Array.from(elements);
		this.states = states;
	},

	use: function(oldEls, newEls) {
		this.oldEls = Array.from(oldEls);
		this.newEls = Array.from(newEls);
		return this;
	}

});


Fx.Elements.Builder = new Class({

	Extends: Fx.Elements,
	
	initialize: function(presets, options) {
		var elements = presets.map(function(preset, index){ return preset.elements }).flatten();
		for (var i=0; i < presets.length; i++) presets[i].offset = elements.indexOf(presets[i].elements[0]);
		return this.parent(elements, options);
	},

	start: function(groups) {
		var properties = {};

		for (var i=0; i < groups.length; i++) {
			var group = groups[i];

			for (var j=0; j < group.elements.length; j++) {
				var item = group.elements[j];

				if (group.newEls == 'all' || group.newEls.contains(item)) {
					properties[j + group.offset] = group.states.active;
				} else if (group.oldEls == 'all' || group.oldEls.contains(item)) {
					properties[j + group.offset] = group.states.normal;
				}
			}
		}
		return this.parent(properties);
	}

});