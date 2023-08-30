import { searchPersonByName, fetchPeople } from "./swapiAPI";
import { Person } from "./types";

export const resolvers = {
  Query: {
    allPeople: (_:any, { page }: { page: number }) => fetchPeople(page),
    findPerson: async (_: any, { name }: { name: string}) => {
      try{
        const person = await searchPersonByName(name)
        return person;
      }catch(error){
        throw new Error(`Error fetching person: ${error}`);
      }
      
    }
  }
}
