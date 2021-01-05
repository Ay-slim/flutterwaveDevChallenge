import { lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from './constants';

const Home = lazy(() => import('../../pages/home' /* webpackChunkName: "Home" */));
const Login = lazy(() => import('../../pages/login' /* webpackChunkName: "Login" */));
const Register = lazy(() => import('../../pages/register' /* webpackChunkName: "Register" */));

const Routes = (): JSX.Element => (
    <BrowserRouter>
        <Switch>
            <Route exact={true} component={Login} path={ROUTES.LOGIN} />
            <Route exact={true} component={Register} path={ROUTES.REGISTER} />
            <Route exact={true} component={Home} path={ROUTES.HOME} />
            <Route render={() => <Redirect to={ROUTES.HOME} />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
