"use strict";
const mongoDBMixin = require("../mixins/db.mixin");
const  { ObjectId } = require("mongodb");

module.exports = {
	name: "sessions",
	mixins: [mongoDBMixin("sessions")],
	settings: {
		fields: [
			"_id",
			"ip",
			"mac",
			"token",
			"last_session",
			"expires",
			"user_id",
		],
		entityValidator:{
			ip:{
				type: "string",
				optional: false,
				min: 20,
				max: 20
			},
			mac:{
				type: "string",
				optional: false,
				min: 20,
				max: 50
			},
			token:{
				type: "string",
				optional: false,
				min: 3,
				max: 30
			},
			last_session:{
				type: "date",
				optional: false,
				min: 5,
				max: 30,
				default: () => new Date()
			},
			expires:{
				type: "date",
				optional: false,
				min: 5,
				max: 30,
				default: () => new Date()
			},
			user_id:{
				type: "objectID",
				ObjectId
			}
		},
		populates: {
			roles: {
				action: "users.get",
				params: {
					fields: ["_id", "name", "email", "user", "password", "id_rol", "active"]
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
