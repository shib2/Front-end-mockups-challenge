import React from 'react';
import Header from './components/HeaderComponent'
import Forms from './components/FormComponent';
import Thanks from './components/ThanksComponent';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

function App() {
return (
    <BrowserRouter>
    <div>
    <Header />
    <Switch> 
      <Route path = "/forms" component = { Forms } />
      <Route path = "/thanks" component = { Thanks } />
      <Redirect to = "/forms" />

    </Switch>
    </div>
    </BrowserRouter>
    );
}

export default App;
