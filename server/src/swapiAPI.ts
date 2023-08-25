import axios from 'axios';
import { Person } from './types';

const SWAPI_BASE_URI = 'https://swapi.dev/api';

export async function fetchPeople(page: number = 1): Promise<Person[]>{
  const response = axios.get(`${SWAPI_BASE_URI}/people?page=${page}`)
  return (await response).data.results;
}

export async function searchPersonByName(name:string): Promise<Person| null>{
  try{
    const response = await axios.get(`${SWAPI_BASE_URI}/people/?search=${name}`);
    return response.data.results[0] || null;
  }catch(error){
    throw new Error(`Error fetching paerson`)
  }
}
