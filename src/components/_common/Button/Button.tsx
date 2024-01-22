import React, { useState, ReactNode, useEffect } from 'react';
import Loader from '../../_icons/LoaderIcon';
import ItemWrapper from '../ItemWrapper';
import { ButtonClickT } from '../../../store/_common/types/baseTypes';
import { onButtonClick } from './events';

interface Props {
  title?: string;
  loading?: boolean;
  disabled?: boolean;
  itemClassName?: string;
  buttonClassName?: string;
  children?: ReactNode;
  onClick?: (props: ButtonClickT) => void;
}

const ButtonWrapper: React.FC<Props> = (props: Props) => {
  const {
    title = '',
    disabled = false,
    loading = false,
    itemClassName = '',
    buttonClassName = '',
    children,
    onClick = () => {}
  } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  return (
    <ItemWrapper className={itemClassName}>
      <button
        className={`btn app_btn ${buttonClassName}`}
        title={title}
        disabled={disabled}
        onClick={(event) => onButtonClick({ event, setIsLoading, onClick })}
      >
        {isLoading ? <Loader size={40} /> : children ? children : <div></div>}
      </button>
    </ItemWrapper>
  );
};

export default React.memo(ButtonWrapper);
