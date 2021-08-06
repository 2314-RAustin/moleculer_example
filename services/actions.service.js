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
			"id_module",
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
			modules: {
				action: "modules.get",
				params: {
					fields: ["_id", "name"]
				}
			}
		}
	},
	hooks: {

	},
	actions: {

	},
	methods: {

	}
};
