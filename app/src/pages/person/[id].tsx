import { useQuery } from "@apollo/client";
import { gql } from 'graphql-tag';
import { useRouter } from "next/router";
import client from "@/lib/apolloClient";
import styles  from './index.module.css';
import Link from "next/link";


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
    <div className={styles.container}>
      <div className={styles.personCard}>
        <h1>{findPerson.name}</h1>
        <p>Height: {findPerson.height}</p>
        <p>Mass: {findPerson.mass}</p>
        <p>Gender: {findPerson.gender}</p>
        <p>HomeWorld: <a href={findPerson.homeworld}>{findPerson.homeworld}</a></p>
      </div>
      <Link href="/" legacyBehavior>
        <a className={styles['back-button']}>Back to Home</a>
      </Link>
    </div>
  )
}

export default PersonDetail;
