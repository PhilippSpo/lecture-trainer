Template.questionList.events({
	'click #backButton': function(e) {
		e.preventDefault();
		Bender.go('/', {}, {
			animation: 'slideRight'
		});
	},
	'click #newQuestion': function() {
		Bender.go('newQuestion', {
			chapterId: this.chapter._id
		}, {
			animation: 'fadeIn'
		});
	},
	'click .reactive-table tr': function() {
		var template = Template.instance();
		Bender.go('questionDetail', {
			chapterId: template.data.chapter._id,
			questionId: this._id
		}, {
			animation: 'fadeIn',
			query: 'show=question'
		});
	},
	'click #delete': function(e) {
		e.stopPropagation();
		Questions.remove({
			_id: this._id
		});
	}
});

Template.questionList.helpers({
	settings: function() {
		return {
			rowsPerPage: 10,
			showFilter: true,
			fields: [{
				key: 'number',
				label: 'Nummer'
			},{
				key: 'question',
				label: 'Frage'
			}, {
				key: 'status',
				label: 'Status',
				tmpl: Template.questionListItemStatus
			}, {
				key: 'actions',
				label: 'Aktionen',
				tmpl: Template.questionListItemActions
			}]
		};
	}
});

Template.questionListItemStatus.helpers({
	statusColorClass: function () {
		if(this.status === 0) {
			return 'text-danger';
		}
		if(this.status === 1) {
			return 'text-warning';
		}
		if(this.status === 2) {
			return 'text-success';
		}
	}
});