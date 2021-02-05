import React from 'react';

function Lenguaje (){
    
    let lenguajes = './components/languajes.json';

    return (  
    <div>
        <ul>
            {lenguajes.map (lenguaje => <li> {lenguaje.name} <br>
            
            </li>
            )}
        
        </ul>

    </div>
    
    );
    
   
}

export default Lenguaje;