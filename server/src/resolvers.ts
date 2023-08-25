import { searchPersonByName, fetchPeople } from "./swapiAPI";
import { Person } from "./types";

export const resolvers = {
  Query: {
    allPeople: (_:any, { page }: { page: number }) => fetchPeople(page),
    findPerson: (_: any, { name }: { name: string}) => searchPersonByName(name)
  }
}
