import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import Navigation from "./components/Navigation";
import Dog from "./components/Dog";

const dogs = [
  {name: 'Hazel', image: '../images/hazel.jpg', description: 'Hazel is cool.'},
  {name: 'Tubby', image: '../images/tubby.jpg', description: 'Tubby can bite.'},
  {name: 'Whiskey', image: '../images/whiskey.jpg', description: 'Whiskey likes whiskey.'},
]

export default function App() {
  return (
    <div className="App">
      <Navigation dogs={dogs}/>
      <Switch>
        {
          dogs.map(dog =>
            <Route key={dog.name}
                   path={`/dogs/${dog.name}`}>
              <Dog dog={dog}/>
            </Route>)
        }
        <Route path='/'>
          <Redirect to="/dogs"/>
        </Route>
      </Switch>
    </div>
  );
}