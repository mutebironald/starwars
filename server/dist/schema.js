"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDefs = (0, apollo_server_1.gql) `
    type Person {
      name: String
      height: String
      mass: String
      gender: String
      homeworld: String
    }
    
    
    type Query {
      allPeople(page: Int): [Person]
      findPerson(person: String): Person
    }
`;
