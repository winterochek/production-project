import App from 'app';
import { ErrorBoundary } from 'app/providers/error-boundary';
import { ThemeProvider } from 'app/providers/theme-provider';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/store-provider';
import 'shared/config/i18n';

import 'app/styles/index.scss';

render(
   <ErrorBoundary>
      <BrowserRouter>
         <StoreProvider>
            <ThemeProvider>
               <App />
            </ThemeProvider>
         </StoreProvider>
      </BrowserRouter>
   </ErrorBoundary>,
   document.getElementById('root')
);
