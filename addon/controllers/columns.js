import Em from 'ember';
import Column from './column';
var ArrayProxy = Em.ArrayProxy;
var Sortable = Em.SortableMixin;

var ControllerArray = ArrayProxy.extend({
	itemController: Em.ObjectController,
	lookupItemController: function (object) {
		return this.get('itemController');
	},
	mapController: function (obj) {
		var controllerClass = this.lookupItemController(obj);
		if (controllerClass) {
			return controllerClass.create({
				target: this,
				parentController: this,
				content: obj
			});
		}
	},
	arrangedContent: function () {
		return this.get('content').map(this.mapController, this);
	}.property('content'),
	contentArrayDidChange: function (arr, i, removedCount, addedCount) {
		var addedObjects = arr.slice(i, i + addedCount);
		addedObjects = addedObjects.map(this.mapController, this);
		this.get('arrangedContent').replace(i, removedCount, addedObjects);
	}
});

var Columns = ArrayProxy.extend(Sortable, {
	content: function (key, value) {
		return ControllerArray.create({
			itemController: Column,
			content: value
		});
	}.property()
});

export default Columns;