import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Suspense fallback={<div>Loading</div>}>
        <App />
    </Suspense>,
    document.getElementById('root')
);

reportWebVitals();
