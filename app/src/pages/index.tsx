import { useQuery } from "@apollo/client";
import { gql } from 'graphql-tag';
import Link from 'next/link';
import client from '@/lib/apolloClient';
import Loader from "@/loader";
import styles from './Home.module.css'

const PEOPLE_QUERY = gql`
query People($page: Int){
  allPeople(page: $page){
      name
      height
      mass
      gender
      homeworld
  }
}
`;

const Home = () => {
  const { data } = useQuery(PEOPLE_QUERY, { client, variables: {page: 1 }});

  if(!data){
    return <Loader />
  }
  const { allPeople } = data;

  return(
    <div className={styles.container}>
      <h1 className={styles.heading}>Star Wars Characters</h1>
      <ul>
        {allPeople.map((person: any) => (
          <div key={person.name} className={styles['person-card']}>
            <Link href={`/person/${encodeURIComponent(person.name)}`}>{person.name}</Link>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Homeword: {person.homeworld}</p>
            <p>Gender: {person.gender}</p>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Home;
