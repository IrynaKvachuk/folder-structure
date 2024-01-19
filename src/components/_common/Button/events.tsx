import { ButtonClickT } from '../../../store/_common/types/baseTypes';

interface OnButtonClick extends ButtonClickT {
  onClick: (props: ButtonClickT) => void;
}

export const onButtonClick = (props: OnButtonClick) => {
  const { event, setIsLoading, onClick = () => {} } = props;

  onClick({ event, setIsLoading });

  return;
};
