import React, { Component, lazy, Suspense } from 'react';

import Menu from './Menu';
// import Contact from './Contact';
import Home from './Pages/Home';
import About from './Pages/About';
import Overview from './Pages/Overview';
import Community from './Pages/Community';
import Store from './Pages/Store';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import BlogDetails from './Pages/BlogDetails';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (

    <Suspense fallback={<div> Loading..</div>}>
    <BrowserRouter>
            <div>
        {/* <Menu /> */}
        <Switch>
        <Route path="/" exact component= {Home} />
        <Route path="/about" component= {About} />
        <Route path="/contact" component= {Contact} />
        <Route path="/overview" component= {Overview} />
        <Route path="/community" component= {Community} />
        <Route path="/store" component= {Store} />
        <Route path="/blog" component= {Blog} />
        <Route path="/blogdetails" component={BlogDetails} />
        <Route path="/contact" component= {Contact} />
        </Switch>
        
            </div>
     </BrowserRouter>
     </Suspense>
  );
}


export default App;
