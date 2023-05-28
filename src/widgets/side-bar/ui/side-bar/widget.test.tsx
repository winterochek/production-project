import React from 'react';
import SideBar from './widget';
import { fireEvent, render, screen } from '@testing-library/react';
import renderWithTranslation from 'shared/lib/tests/render-with-translation';

describe('side-bar', () => {
   test('test render', () => {
      renderWithTranslation(<SideBar />);
      expect(screen.getByTestId('sidebar')).toBeInTheDocument();
   });
   test('test toggle', () => {
      renderWithTranslation(<SideBar />);
      const toggleBtn = screen.getByTestId('sidebar-toggle');
      expect(screen.getByTestId('sidebar')).toBeInTheDocument();
      fireEvent.click(toggleBtn);
      expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
   });
});
