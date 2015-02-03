import Em from 'ember';
var get = Em.get;

var LlamaColumngroup = Em.View.extend({
	classNames: 'llama-columngroup',
	columns: null,

	width: function () {
		var total = 0;
		this.get('columns').forEach(function (column) {
			if (!get(column, 'isHidden')) {
				total += get(column, 'width');
			}
		});
		return total;
	}.property('columns.@each'),

	setWidth: function () {
		var width = this.get('width');
		this.$().width(width);
	}.observes('width').on('didInsertElement')
});

export default LlamaColumngroup;
