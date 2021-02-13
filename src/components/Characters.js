import React from 'react';
import { useState } from "react";


function Characters (){
 const [character, setcharacter] = useState('');
 fetch('https://swapi.dev/api/people/*').then(
 response => response.json()
 ).then( 
 data => setcharacter(data)
  
 )
 return <>
  
  {characters.map (characters => <li> </li> {characters.name}

 </>

}


export default Characters;