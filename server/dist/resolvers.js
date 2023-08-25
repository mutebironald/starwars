"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const swapiAPI_1 = require("./swapiAPI");
exports.resolvers = {
    Query: {
        allPeople: (_, { page }) => (0, swapiAPI_1.fetchPeople)(page),
        findPerson: (_, { name }) => (0, swapiAPI_1.searchPersonByName)(name)
    }
};
