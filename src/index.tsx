import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/errorFallback';

const helmetContext = {};

const root = document.createElement('div')
root.className = 'container'
document.body.appendChild( root )
const rootDiv = ReactDOM.createRoot( root )

rootDiv.render(
    <React.StrictMode>
        <ErrorBoundary FallbackComponent={ ErrorFallback }>
            <HelmetProvider context={ helmetContext }>
                <div id="root" className="container" >
                    <App />
                </div>
            </HelmetProvider>
        </ErrorBoundary>
    </React.StrictMode>
);
