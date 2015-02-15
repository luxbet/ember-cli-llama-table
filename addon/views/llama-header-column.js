import Em from 'ember';
import LlamaColumn from './llama-column';
var set = Em.set;

var LlamaHeaderColumn = LlamaColumn.extend({
	classNames: 'llama-header-column',

	content: function () {
		return [this.get('column')];
	}.property(),

	itemViewClass: Em.computed.alias('controller.HeaderCellView'),

	createChildView: function (View, attrs) {
		var column = this.get('column');
		set(attrs, 'column', column);
		return this._super(View, attrs);
	},

	// column definition
	column: null
});

export default LlamaHeaderColumn;