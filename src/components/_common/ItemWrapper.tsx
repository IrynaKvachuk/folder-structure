import { ReactNode } from 'react';

type Props = {
  className?: string;
  children: ReactNode;
};

const ItemWrapper: React.FC<Props> = (props: Props) => {
  const { className = '', children } = props;

  return <div className={className}>{children}</div>;
};

export default ItemWrapper;
