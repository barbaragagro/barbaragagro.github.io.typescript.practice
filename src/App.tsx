import React, {FC, createContext} from 'react';
import { MoreText, Person } from './components/Person';


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
      <Person name='Barbara Gagro' age={24} email='barbaragagro1@gmail.com' city="Novi Sad" btext={MoreText.Bellow}></Person>
    </div>
    </AppContext.Provider>
  );
}

export default App;
