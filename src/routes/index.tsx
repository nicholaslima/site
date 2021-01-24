

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/home';
import Skills from '../pages/skills';
import Contacts from '../pages/contacts';
import Portfolio from '../pages/portfolio';
import Blog from '../pages/blog';

const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={ Home }></Route>
            <Route path="/skills"  component={ Skills }></Route>
            <Route path="/contacts"  component={ Contacts }></Route>
            <Route path="/portfolio"  component={ Portfolio }></Route>
            <Route path="/blog"  component={ Blog }></Route>
        </Switch>
    )
}

export default Routes;