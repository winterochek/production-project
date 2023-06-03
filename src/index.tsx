import App from 'app';
import { ErrorBoundary } from 'app/providers/error-boundary';
import { ThemeProvider } from 'app/providers/theme-provider';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'shared/config/i18n';

import 'app/styles/index.scss';

render(
   <BrowserRouter>
      <ErrorBoundary>
         <ThemeProvider>
            <App />
         </ThemeProvider>
      </ErrorBoundary>
   </BrowserRouter>,
   document.getElementById('root')
);
