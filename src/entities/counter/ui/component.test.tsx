import Counter from './component';
import { fireEvent, screen } from '@testing-library/react';
import ComponentRender from 'shared/lib/tests/component-render';

describe('Counter component', () => {
    test('test render ', () => {
        ComponentRender(<Counter />);
        expect(screen.getByTestId('counter-component')).toBeInTheDocument();
    });

    test('test render with basic store setup', () => {
        ComponentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 67
                }
            }
        });
        expect(screen.getByTestId('counter-value-title')).toHaveTextContent('67')
    });

    test('incrementing', () => {
        ComponentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 67
                }
            }
        });
        const incrementButton = screen.getByTestId('counter-value-increment-button')
        fireEvent.click(incrementButton)
        expect(screen.getByTestId('counter-value-title')).toHaveTextContent('68')
        fireEvent.click(incrementButton)
        fireEvent.click(incrementButton)
        expect(screen.getByTestId('counter-value-title')).toHaveTextContent('70')

    });

    test('decrementing', () => {
        ComponentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 67
                }
            }
        });
        const decrementButton = screen.getByTestId('counter-value-decrement-button')
        fireEvent.click(decrementButton)
        expect(screen.getByTestId('counter-value-title')).toHaveTextContent('66')
    });
});
