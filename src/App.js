import './App.css';
import {Switch, Route} from "react-router-dom"
import { Health } from './components/Health';
import { Home } from './components/Home';
import { Message } from './components/Message';
import { Group } from './components/Group';
import { Survival } from './components/Survival';
import { Weather } from './components/Survival';
import { React, Fragment } from "react";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
       <Navbar/>
      <Switch>
        
        <Route
          exact path="/" 
          render={props =>
            <Home
            
          
            {...props} />
          }
        />

        
        <Route
          path="/entertainment" 
          render={props =>
            <Entertainment  
          
            {...props} />
          }
        />
        <Route
          path="/message" 
          render={props =>
            <Message
          
            {...props} />
          }
        />
        <Route
          path="/group" 
          render={props =>
            <Group  
          
            {...props} />
          }
        />
        <Route
          path="/health" 
          render={props =>
            <Health  
          
            {...props} />
          }
        />
        <Route
          path="/survival" 
          render={props =>
            <Survival  
          
            {...props} />
          }
        />

        <Route
          path="/weather" 
          render={props =>
            <Weather
            {...props} />
          }
        />
      

      </Switch> 
      
    </div>
    
  
  );
}

export default App;
