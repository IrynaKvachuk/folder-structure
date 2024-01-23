import { renderHook, act } from '@testing-library/react-hooks';
import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage', () => {
  test('useLocalStorage sets and retrieves values from local storage', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));

    // Initial value should be 'initialValue'
    expect(result.current[0]).toBe('initialValue');

    // Update the value using the updateValue function
    act(() => {
      result.current[1]('newTestValue');
    });

    // After updating, the value should be 'newTestValue'
    expect(result.current[0]).toBe('newTestValue');

    // Clear local storage
    localStorage.clear();

    // After clearing local storage, the value should revert to the initial value
    expect(result.current[0]).toBe('initialValue');
  });
});
