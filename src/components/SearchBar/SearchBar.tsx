import { Suspense, useCallback, useDeferredValue, useEffect, useState } from 'react';
import LoaderIcon from '../_icons/LoaderIcon';
import { onSearchBarChange } from './events';
import { observer } from 'mobx-react';

export interface SearchBarProps {
  label?: string;
  placeholder?: string;
  className?: string;
  callback: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const { label = '', placeholder = 'search..', className = '', callback } = props;

  const searchCallback = useCallback((query: string) => callback(query), [callback]);

  const [query, setQuery] = useState<string>('');
  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    searchCallback(deferredQuery);
  }, [deferredQuery, searchCallback]);

  return (
    <div className={`${className}`}>
      <div className="search-bar">
        <label>
          {label}
          <input
            type="text"
            data-testid="search-bar_input"
            className="search-bar_input"
            value={query}
            placeholder={placeholder}
            onChange={(event) => onSearchBarChange({ event, setQuery })}
          />
        </label>
      </div>
      <Suspense fallback={<LoaderIcon />} />
    </div>
  );
};

export default observer(SearchBar);
