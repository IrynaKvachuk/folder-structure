import { DispatchT, SetStateActionT } from '../../store/_common/types/baseTypes';

type OnSearchBarChange = {
  event: React.ChangeEvent<HTMLInputElement>;
  setQuery: DispatchT<SetStateActionT<string>>;
};

export const onSearchBarChange = (props: OnSearchBarChange) => {
  const { event, setQuery } = props;

  setQuery(event.target.value);

  return;
};
