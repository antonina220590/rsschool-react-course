import '@testing-library/jest-dom';

window.URL.createObjectURL = (blob) =>
  `mocked-url://${blob instanceof Blob ? 'blob' : 'media'}/12345`;
