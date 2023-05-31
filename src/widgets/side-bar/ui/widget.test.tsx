import SideBar from './widget';
import { fireEvent, screen } from '@testing-library/react';
import renderWithTranslation from 'shared/lib/tests/render-with-translation';
import ComponentRender from 'shared/lib/tests/component-render';

describe('side-bar', () => {
   test('test render', () => {
      ComponentRender(<SideBar />);
      expect(screen.getByTestId('sidebar')).toBeInTheDocument();
   });
   test('test toggle', () => {
      ComponentRender(<SideBar />);
      const toggleBtn = screen.getByTestId('sidebar-toggle');
      expect(screen.getByTestId('sidebar')).toBeInTheDocument();
      fireEvent.click(toggleBtn);
      expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
   });
});
