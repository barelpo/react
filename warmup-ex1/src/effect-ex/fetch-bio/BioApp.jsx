import { useState, useEffect } from 'react';
import { fetchBio } from './demoApi';


export default function BioApp() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState(null);

  useEffect(() => {

    let performSet = true

    setBio(null);
    fetchBio(person).then(result => {
      if (performSet){
        setBio(result);
      }
    });

    
    return(
      () => performSet = false
    )
  }, [person]);


  return (
    <>
      <select value={person} onChange={e => {
        setPerson(e.target.value);
      }}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p><i>{bio ?? 'Loading...'}</i></p>
    </>
  );
}