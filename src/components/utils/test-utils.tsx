// import React, { PropsWithChildren } from 'react';
// import { render } from '@testing-library/react';
// import type { RenderOptions } from '@testing-library/react';
// import { Provider } from 'react-redux';

// import type { AppStore, RootState } from '../../lib/hooks';
// import { setupStore } from '../../appStore/store';

// interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
//   preloadedState?: Partial<RootState>;
//   store?: AppStore;
// }

// interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
//   preloadedState?: Partial<RootState>;
//   store?: AppStore;
// }

// export default function renderWithProviders(
//   ui: React.ReactElement,
//   {
//     preloadedState = {},
//     store = setupStore(preloadedState),
//     ...renderOptions
//   }: ExtendedRenderOptions = {}
// ) {
//   function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
//     return <Provider store={store}>{children}</Provider>;
//   }
//   return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
// }
