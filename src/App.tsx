import React, {FC, createContext} from 'react';
import './App.css';
import { Person } from './components/Person';
import { HairColor } from './components/Person';
interface AppContextInterface{
  name:string;
  age:number;
  country: string;
}
const AppContext = createContext<AppContextInterface | null>(null);


const App: FC = () => {

   const contextValue:AppContextInterface={
    name:'Bambi',
    age: 20,
    country:'Serbia',
   }
  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <Person name='Barbara Gagro' age={24} email='barbaragagro1@gmail.com' hairColor={HairColor.Pink}></Person>
    </div>
    </AppContext.Provider>
  );
}

export default App;
