import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Routes from './components/routes';
import './stylesheets/index.scss';

ReactDOM.render(
    <Suspense fallback={<div>Loading</div>}>
        <Routes />
    </Suspense>,
    document.getElementById('root')
);

reportWebVitals();
