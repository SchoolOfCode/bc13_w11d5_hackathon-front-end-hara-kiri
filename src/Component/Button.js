import {useState} from 'react'

export default function Button({className}){

    const [owners, setOwners] = useState('string')

    async function onClick(className) {
       
            const response = await fetch(`https://regret-a-pet.onrender.com/search/${className}`);
            const data = await response.json();
            setOwners(data.payload[0].first_name);
            console.log(data.payload[0])
          
    }

    return (
        <>
        <button onClick={(()=>onClick(className))}></button>
        <p>{owners}</p>
        </>
    )
}