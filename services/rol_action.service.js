"use strict";
const mongoDBMixin = require("../mixins/db.mixin");
const  { ObjectId } = require("mongodb");

module.exports = {
	name: "rol_action",
	mixins: [mongoDBMixin("rol_action")],
	settings: {
		fields: [
			"_id",
			"id_rol",
			"id_action",
		],
		entityValidator:{
			id_rol:{
				type: "objectID",
				ObjectId
			},
			id_action:{
				type: "objectID",
				ObjectId
			}
		},
		populates: {
			roles: {
				action: "roles.get",
				params: ["_id", "name"]
			},
			actions: {
				action: "actions.get",
				params: {
					fields: ["_id", "name", "id_module"]
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
