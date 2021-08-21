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
		entityValidator: {
			rol:{
				type: "objectID",
				ObjectID: ObjectId
			},
			action:{
				type: "objectID",
				ObjectID: ObjectId
			}
		},
		populates: {
			rol: "roles.get",
			action: "actions.get",
		}
	}
};
