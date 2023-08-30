import { useQuery } from "@apollo/client";
import { gql } from 'graphql-tag';
import { useRouter } from "next/router";
import client from "@/lib/apolloClient";


const PERSON_QUERY = gql`
    query Person($name: String!){
      findPerson(name: $name){
        name
        height
        mass
        gender
        homeworld
      }
    }
`;

const PersonDetail = () => {
  const router = useRouter();
  const { id } = router.query;


  const { data } = useQuery(PERSON_QUERY, { client, variables: {name: id }});

  if(!data){
    return <div>Loading...</div>
  }

  const { findPerson } = data;

  return (
    <div>
      <h1>{findPerson.name}</h1>
      <p>Height: {findPerson.height}</p>
      <p>Mass: {findPerson.mass}</p>
      <p>Gender: {findPerson.gender}</p>
      <p>HomeWorld: {findPerson.homeworld}</p>
      <p><a href="/">Back to People</a></p>
    </div>
  )
}

export default PersonDetail;
