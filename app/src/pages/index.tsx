import { useQuery } from "@apollo/client";
import { gql } from 'graphql-tag';
import Link from 'next/link';
import client from '@/lib/apolloClient';
import Loader from "@/loader";
import styles from './Home.module.css'
import { useCallback, useEffect, useState } from "react";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [allPeople, setAllPeople] = useState<Array<any>>([])
  const { data } = useQuery(PEOPLE_QUERY, {
    client,
    variables: {page: currentPage },
    onCompleted: (data) => {
      if(data){
        setAllPeople((prevPeople) => [...prevPeople, ...data.allPeople]);
      }
    }
  });

  // useEffect(() => {
  //   if(data){
  //     setAllPeople((prevPeople) => [...prevPeople, ...data.allPeople])
  //   }
  // }, [data])
  // useEffect(() => {
  //   if (data) {
  //     setAllPeople((prevPeople) => [...prevPeople, ...data.allPeople]);
  //   }
  // }, [data]);

  // const handleScroll = useCallback(() => {
  //   console.log("-------scrolling--------------")
  //   const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

  //   if(isAtBottom && allPeople.length < currentPage * PAGE_SIZE){
  //     setCurrentPage((prevPage) => prevPage + 1);
  //     console.log(currentPage, "--------------page")
  //   }
  // }, [allPeople, currentPage])
  const handleScroll = useCallback(() => {
    console.log("-------scrolling--------------");
  
    // Calculate the distance from the bottom of the page
    const distanceFromBottom =
      document.body.offsetHeight - (window.innerHeight + window.scrollY);
  
    // Define a threshold value (e.g., 100 pixels from the bottom)
    const scrollThreshold = 100;
  
    // Check if the distance from the bottom is less than the threshold
    if (distanceFromBottom <= scrollThreshold) {
      // Trigger the fetch if the threshold is met and more data can be loaded
      if (allPeople.length < currentPage * PAGE_SIZE) {
        setCurrentPage((prevPage) => prevPage + 1);
        console.log(currentPage, "--------------page");
      }
    }
  }, [allPeople, currentPage]);


  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])


  if(!data){
    return <Loader />
  }
  // const { allPeople } = data;


  return(
    <div className={styles.container}>
      <h1 className={styles.heading}>Star Wars Characters</h1>
      <ul>
        {console.log(allPeople.length, '-------length----------')}
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
        {/* <button
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
        </button> */}
      </div>
    </div>
  )
}

export default Home;
