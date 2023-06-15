import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/forTests';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/store-provider';

interface Props {
    component: ReactNode,
    options?: ComponentRenderOptions,
    
}

export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>
}

export default function ComponentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
    const { route = '/',initialState } = options
    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    );
}
