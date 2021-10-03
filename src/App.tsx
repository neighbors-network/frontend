import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const IndexPageComponent = lazy(() => import('./pages/index/index-page.component'));
const LoginPageComponent = lazy(() => import('./pages/login/login-page.component'));
const RegistrationPageComponent = lazy(() => import('./pages/registration/registration-page.component'));

function App() {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={IndexPageComponent}/>
                    <Route path='/login' component={LoginPageComponent}/>
                    <Route path='/registration' component={RegistrationPageComponent}/>
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
