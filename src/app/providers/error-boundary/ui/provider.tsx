import React, { ErrorInfo, Suspense } from 'react';
import { PageError } from 'widgets/page-error';

interface Props {
   children: JSX.Element;
}

interface State {
   hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
   constructor(props: Props) {
      super(props);
      this.state = { hasError: false };
   }

   static getDerivedStateFromError(error: Error) {
      return { hasError: true };
   }

   componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      console.log(error, errorInfo);
   }

   render() {
      return this.state.hasError ? (
         <Suspense fallback=''>
            <PageError />
         </Suspense>
      ) : (
         this.props.children
      );
   }
}

export default ErrorBoundary;
