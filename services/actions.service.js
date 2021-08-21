"use strict";
const mongoDBMixin = require("../mixins/db.mixin");
const  { ObjectId } = require("mongodb");

module.exports = {
	name: "actions",
	mixins: [mongoDBMixin("actions")],
	settings: {
		fields: [
			"_id",
			"name",
			"module",
		],
		entityValidator:{
			name:{
				type: "string",
				optional: false,
				min: 3,
				max: 20
			},
			id_module:{
				type: "objectID",
				ObjectId
			}
		},
		populates: {
			module: "modules.get"
		}
	},
	hooks: {

	},
	actions: {

	},
	methods: {

	}
};
