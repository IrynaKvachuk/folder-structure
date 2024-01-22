import { ReactNode, Suspense, useCallback, useDeferredValue, useEffect, useState } from 'react';
import LoaderIcon from '../_icons/LoaderIcon';
import { onSearchBarChange } from './events';
import { observer } from 'mobx-react';

interface Props {
  label?: string;
  placeholder?: string;
  className?: string;
  children: ReactNode;
  callback: (query: string) => void;
}

const SearchBarWrapper: React.FC<Props> = (props: Props) => {
  const { label = '', placeholder = 'search..', className = '', children, callback } = props;

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
            className="search-bar_input"
            value={query}
            placeholder={placeholder}
            onChange={(event) => onSearchBarChange({ event, setQuery })}
          />
        </label>
      </div>
      <Suspense fallback={<LoaderIcon />}>
        <div>{children}</div>
      </Suspense>
    </div>
  );
};

export default observer(SearchBarWrapper);
