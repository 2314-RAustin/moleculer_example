"use strict";
const mongoDBMixin = require("../mixins/db.mixin");
const  { ObjectId } = require("mongodb");

module.exports = {
	name: "rol_action",
	mixins: [mongoDBMixin("rol_action")],
	settings: {
		fields: [
			"_id",
			"rol",
			"action",
		],
		entityValidator:{
			rol:{
				type: "objectID",
				ObjectId
			},
			action:{
				type: "objectID",
				ObjectId
			}
		},
		populates: {
			roles: {
				action: "roles.get",
			},
			actions: {
				action: "actions.get",
			}
		}
	}
};
