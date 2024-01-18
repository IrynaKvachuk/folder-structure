import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ToolbarItem: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default ToolbarItem;
