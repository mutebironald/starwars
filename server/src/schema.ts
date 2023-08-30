import { gql } from 'apollo-server';


export const typeDefs = gql`
    type Person {
      name: String
      height: String
      mass: String
      gender: String
      homeworld: String
    }
    
    
    type Query {
      allPeople(page: Int): [Person]
      findPerson(name: String): Person
    }
`;
