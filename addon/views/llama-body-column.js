import Em from 'ember';
import LlamaColumn from './llama-column';
import LlamaBodyCell from './llama-body-cell';
var get = Em.get;
var set = Em.set;

var LlamaBodyColumn = LlamaColumn.extend({
	classNames: 'llama-body-column',
	contentBinding: 'rows',

	rows: null,
	column: null,

	itemViewClass: function () {
		var controller = this.get('controller');
		var column = this.get('column');
		var type = get(column, 'type');
		return controller.getCellType(type);
	}.property(),

	createChildView: function (View, attrs) {
		var row = get(attrs, 'content');
		set(attrs, 'row', row);
		return this._super(View, attrs);
	}
});

export default LlamaBodyColumn;
