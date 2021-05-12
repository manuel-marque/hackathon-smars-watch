import {Switch, Route} from "react-router-dom"
import { Health } from './components/home/Health';
import { Home } from './components/home/Home';
import { Message } from './components/home/Message';
import { Group } from './components/home/Group';
import Survival  from './components/home/Survival';
import  Weather from './components/home/Weather';
import { Entertainment } from './components/home/Entertainment';
import React from 'react';
import Navbar from "./components/Navbar";

function App() {




  return (
    <div>
      
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
      <Navbar/>
    </div>
    
  
  );
}

export default App;
