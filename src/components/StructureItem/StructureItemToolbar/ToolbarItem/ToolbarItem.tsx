import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ToolbarItem: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return <div className="structure-item_toolbar__item">{children}</div>;
};

export default ToolbarItem;
