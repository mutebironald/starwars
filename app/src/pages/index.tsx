import { useQuery } from "@apollo/client";
import { gql } from 'graphql-tag';
import Link from 'next/link';
import client from '@/lib/apolloClient';
import Loader from "@/loader";
import styles from './Home.module.css'
import { useState } from "react";

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

const PAGE_SIZE = 10;

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data } = useQuery(PEOPLE_QUERY, { client, variables: {page: currentPage }});

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
            <p>HomeWorld: <a href={person.homeworld}>{person.homeworld}</a></p>
            <p>Gender: {person.gender}</p>
          </div>
        ))}
      </ul>
      <div className={styles.pagination}>
        <button
          onClick={()=>setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={()=> setCurrentPage(currentPage + 1) }
          disabled={allPeople.length < PAGE_SIZE
          }
        >
          Next Page
        </button>
      </div>
    </div>
  )
}

export default Home;
