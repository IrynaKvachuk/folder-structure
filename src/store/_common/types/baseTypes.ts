export type DispatchT<A> = (value: A) => void;
export type SetStateActionT<S> = S | ((prevState: S) => S);

export type ButtonClickT = {
  event: React.MouseEvent<HTMLButtonElement>;
  setIsLoading: DispatchT<SetStateActionT<boolean>>;
};

export type RadioItemType = {
  label: string;
  value: string;
};
