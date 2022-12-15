import * as React from 'react';
import './Person.css';
import foregroundImage from '../bg-works2.png'
import backgroundImage from '../image22.png'

export enum MoreText {
  Eror= 'Ups.. sorry.',
  Bellow= '..and it will magicly appear...',
}
const AboveText:string='Type anything...';

interface Props{
    name: string;
    age:number;
    email:string;
    city:string;
    btext: MoreText;
}



export const Person : React.FC<Props> = ({name, age, email, city, btext}) => {
  
    const [typedText, setTypedText] = React.useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
      setTypedText(event.target.value);
    }

    return (
      <div className='wrapper'> 
          <div className='titleClass'>
           
            <img src={backgroundImage} alt='backgroundImage' className='background'></img>
            
           <div className='InfoClass'> 
            <h1 className='paddingC'>Information</h1>
            <h2 className='paddingC'>{`My name is ${name}.`}</h2>
            <h2 className='paddingC'>{`I am ${age} years old, from ${city}.`}</h2>
            <h2 className='paddingC'>{`Contact: ${email}`}</h2>
            </div>
          </div>
          <img src={foregroundImage} alt='foregroundPicture' className='foreground'></img>
          <div className='TypeClass'>
            <h1 className='paddingC'>{AboveText}</h1><br></br>
            <input className='inputField' placeholder='Type here...' onChange={handleChange}></input>
            <br></br><br></br>
            <h1>{btext}</h1>
            <h1 className='blue'>{typedText}</h1>
          </div>
            

      </div>
    )
  
}