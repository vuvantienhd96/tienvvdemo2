import React from 'react'

// components
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact'
import EditContact from './components/contacts/EditContact'
// import AddContact2 from './components/contacts/AddContact2'
import About from './components/pages/About'
import NotFoundPage from './components/pages/NotFoundPage'
import DetailContact from './components/pages/DetailContact'
import Test from './components/Test/Test';
import Album from './components/pages/Album';

// css
import './App.css';

// Router
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from './context';


function App() {
  return (
    <React.Fragment>
        <Provider>
        {/* basename={process.env.PUBLIC_URL} */}
          <Router>
            <Header branding='Contact Manager'/>
            <div className="container">
              {/* <AddContact /> */}
              {/* <AddContact2 /> */}
              {/* <Contacts /> */}
              <Switch>
                <Route exact path="/" component={Contacts}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/addcontact" component={AddContact}/>
                <Route exact path="/editcontact/:id" component={EditContact}/>
                <Route exact path="/detail/:id" component={DetailContact}/>
                <Route exact path="/test" component={Test}/>
                <Route exact path="/albums" component={Album}/>
                <Route component={NotFoundPage}/>
              </Switch>
            </div>
          </Router>
        </Provider>
    </React.Fragment>
  );
}

export default App;
