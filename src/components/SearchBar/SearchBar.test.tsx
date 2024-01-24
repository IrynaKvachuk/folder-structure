import { ReactNode } from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import SearchBar, { SearchBarProps } from './SearchBar';

jest.mock('mobx-react', () => ({
  observer: (component: ReactNode) => component
}));

describe('SearchBar', () => {
  const setUp = (mockData: SearchBarProps) => {
    const utils = render(<SearchBar {...mockData} />);

    return {
      ...utils
    };
  };
  test('renders with default props', () => {
    setUp({ callback: () => {} });
    const inputElement = screen.getByPlaceholderText('search..');

    expect(inputElement).toBeInTheDocument();
  });

  test('renders with provided props', () => {
    setUp({
      label: 'Search Label',
      placeholder: 'Custom Placeholder',
      callback: () => {}
    });
    const labelElement = screen.getByLabelText('Search Label');
    const inputElement = screen.getByTestId('search-bar_input');

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('placeholder', 'Custom Placeholder');
  });

  test('calls callback on input change', async () => {
    const mockCallback = jest.fn();
    setUp({ callback: mockCallback });
    const inputElement = screen.getByPlaceholderText('search..');

    fireEvent.change(inputElement, { target: { value: 'test' } });

    await waitFor(() => expect(mockCallback).toHaveBeenCalledWith('test'));
  });
});
