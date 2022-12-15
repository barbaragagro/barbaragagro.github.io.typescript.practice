import * as React from 'react';

export enum HairColor {
  Blonde= 'wow',
  Pink= '..and it will magicly appear...',
}

interface Props{
    name: string;
    age:number;
    email:string;
    hairColor: HairColor
}



export const Person : React.FC<Props> = ({name, age, email,hairColor}) => {
  
    const [country, setCountry] = React.useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
      setCountry(event.target.value);
    }

    return (
      <div> 
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{email }</h1>
            <input placeholder='Type anything...' onChange={handleChange}></input>
            <br></br><div>{country}</div><br></br>
            <div>{hairColor}</div>
      </div>
    )
  
}