
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import Layout from './Layout';
import NotFound from '../pages/NotFound';
import Inicio from '../pages/inicio';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer';

const App = () =>{
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Inicio}></Route>
                    <Route exact path="/badges" component={Badges}></Route>
                    <Route exact path="/badges/new" component={BadgeNew}></Route>
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}></Route>
                    <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer}></Route>
                    <Route component={NotFound}></Route>
                </Switch>

            </Layout>
        </BrowserRouter>
    );
}
 
export default App;