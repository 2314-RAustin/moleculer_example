"use strict";
const mongoDBMixin = require("../mixins/db.mixin");
const  { ObjectId } = require("mongodb");

module.exports = {
	name: "roles",
	mixins: [mongoDBMixin("roles")],
	settings: {
		fields: [
			"_id",
			"name",
		],
		entityValidator:{
			name:{
				type: "string",
				optional: false,
				min: 3,
				max: 20
			},
		},
		populates: {

		}
	},
	hooks: {

	},
	actions: {

	},
	methods: {

	}
};
