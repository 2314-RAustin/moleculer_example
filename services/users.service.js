"use strict";
const mongoDBMixin = require("../mixins/db.mixin");
const { ObjectId } = require("mongodb");

module.exports = {
	name: "users",
	mixins: [mongoDBMixin("users")],
	settings: {
		fields: ["_id", "name", "email", "user", "password", "active", "rol"],
		entityValidator: {
			name: {
				type: "string",
				optional: false,
				min: 3,
				max: 20,
			},
			email: {
				type: "email",
				optional: false,
				min: 6,
				max: 50,
			},
			user: {
				type: "string",
				optional: false,
				min: 3,
				max: 30,
			},
			password: {
				type: "string",
				optional: false,
				min: 5,
				max: 30,
			},
			active: {
				type: "boolean",
				optional: true,
				default: true,
			},
			rol: {
				type: "objectID",
				ObjectID: ObjectId,
			},
		},
		populates: {
			rol: "roles.get",
		}
	},
	hooks: {},
	actions: {},
	methods: {},
};
