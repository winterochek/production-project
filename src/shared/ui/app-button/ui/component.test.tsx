import React from 'react';
import Button, { ThemeButton } from './component';
import { render, screen } from '@testing-library/react';

describe('app-button', () => {
   test('teest render', () => {
      render(<Button>TEST</Button>);
      expect(screen.getByText('TEST')).toBeInTheDocument();
   });

   test('button with theme "clear"', () => {
      render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
      expect(screen.getByText('TEST')).toHaveClass('clear');
   });
});
