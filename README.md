Fx.Elements.Builder
=====

A Mootools class that dynamically generates preset animation properties for groups of elements using one Fx.Elements instance.

This class requires Mootools Core/More 1.3.

Released under a [MIT license](http://en.wikipedia.org/wiki/MIT_License).

Features
--------

* Define animation Presets for 'normal' and 'active' states.
* Dynamically builds animation properties to limit repeating yourself.

## Demo ##

Let's cut to the chase and see the demo:

http://jsfiddle.net/zVTab/

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/zVTab/embedded/"></iframe>


## Docs ##

Class: Preset
-------------

### Syntax ###

	new Preset(elements[, states]);

### Arguments ###

elements - (array) A collection of elements to Preset with 'normal/active' states.
states - (object) { 'normal': {}, 'active': {} }

### Example ###

	var items = $$('.item');

	var itemPreset = new Preset(items, {
		normal: { 'background-color': '#555', 'height': '72' },
		active: { 'background-color': '#ff5533', 'height': '200' }
	});


Preset Method: use
------------------

### Syntax ###

	preset.use(normalElements, activeElements);

### Arguments ###

normalElements - (mixed) can be a single element or an array of elements to normalize. Can also be a string set to 'none' (sets no elements from that Preset's elements to 'normal' state) or 'all' (sets all elements from that Preset's elements to 'normal' state).
activeElements - (mixed) can be a single element or an array of elements to activate. Can also be a string set to 'none' (sets no elements from that Preset's elements to 'active' state) or 'all' (sets all elements from that Preset's elements to 'active' state).

### Example ###

See below:




Class: Fx.Elements.Builder
--------------------------

### Extends ###

[Fx.Elements](http://mootools.net/docs/more/Fx/Fx.Elements)

### Syntax ###

	new Fx.Elements.Builder(presets[, options]);

### Arguments ###

presets - (array) A collection of Presets the class will dynamically build for.
options - (object, optional) Same as Fx options.

### Example ###

Create arrays of groups of elements you want to give animation Presetings to.

	var items = $$('.item');
	var headings = $$('h3');

Define a Preset for 'items' and a Preset for 'headings':

	var itemPreset = new Preset(items, {
		normal: { 'background-color': '#555', 'height': '72' },
		active: { 'background-color': '#ff5533', 'height': '200' }
	});

	var headingPreset = new Preset(headings, {
		normal: { 'color': '#777' },
		active: { 'color': '#fff' }
	});

Now pass in all your Presets to 'Fx.Elements.Builder' as an array:

	var fx = new Fx.Elements.Builder([itemPreset, headingPreset], {
		unit: 'px',
		link: 'cancel',
		duration: 300,
		transition: 'quint:out'
	});




Fx.Elements.Builder Method: start
---------------------------------

### Syntax ###

	fx.start(presets);


### Arguments ###

presets - (array) accepts a collection of Preset instances along with their normal/active elements passed in via 'use' method.

### Example ###

When you want to run the 'start' method of Fx.Elements.Builder, pass in an array of the Presets you're dealing with along with the elements you want to normalize/active. For example:

	fx.start([
		itemPreset.use('none', 'all'), // this actives all elements originally passed into this Preset instance
		headingPreset.use('all', headings[3]) // this normalizes all headings elements except for heading[3]
	]);