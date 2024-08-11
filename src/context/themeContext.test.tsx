// import { fireEvent, render, screen } from '@testing-library/react';
// import { vi } from 'vitest';
// import ThemeProvider, { ThemeContext } from './themeContext';
// import ThemeBtn from '../components/ui/themeButton/themeButton';

// describe('ThemeBtn Component', () => {
//   const setTheme = vi.fn();

//   const renderWithProvider = (initialTheme: 'dark' | 'light') => {
//     return render(
//       <ThemeProvider initial={initialTheme}>
//         <ThemeContext.Provider value={{ darkTheme: initialTheme, setTheme }}>
//           <ThemeBtn />
//         </ThemeContext.Provider>
//       </ThemeProvider>
//     );
//   };

//   test('renders with dark theme option checked', () => {
//     renderWithProvider('dark');

//     const darkRadioBtn = screen.getByLabelText(
//       /dark theme/i
//     ) as HTMLInputElement;
//     const lightRadioBtn = screen.getByLabelText(
//       /light theme/i
//     ) as HTMLInputElement;

//     expect(darkRadioBtn).toBeInTheDocument();
//     expect(lightRadioBtn).toBeInTheDocument();

//     expect(darkRadioBtn).toBeChecked();
//     expect(lightRadioBtn).not.toBeChecked();
//   });

//   test('changes theme to light when the light theme is selected', () => {
//     renderWithProvider('dark');

//     const lightRadioBtn = screen.getByLabelText(
//       /light theme/i
//     ) as HTMLInputElement;
//     const darkRadioBtn = screen.getByLabelText(
//       /dark theme/i
//     ) as HTMLInputElement;
//     fireEvent.click(lightRadioBtn);

//     expect(setTheme).toHaveBeenCalledWith('light');

//     expect(lightRadioBtn).toBeChecked();
//     expect(darkRadioBtn).not.toBeChecked();
//   });

//   test('changes theme to dark when dark theme is selected', () => {
//     renderWithProvider('light');

//     const darkRadioBtn = screen.getByLabelText(
//       /dark theme/i
//     ) as HTMLInputElement;
//     fireEvent.click(darkRadioBtn);
//     expect(setTheme).toHaveBeenCalledWith('dark');
//     const lightRadioBtn = screen.getByLabelText(
//       /light theme/i
//     ) as HTMLInputElement;
//     expect(darkRadioBtn).toBeChecked();
//     expect(lightRadioBtn).not.toBeChecked();
//   });
// });
