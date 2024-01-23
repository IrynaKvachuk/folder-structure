import React, { ReactNode } from 'react';

interface Props {
  size?: 'lg' | 'md' | 'sm';
  children?: ReactNode;
}

const TitleWrapper: React.FC<Props> = (props: Props) => {
  const { children, size = 'sm' } = props;

  return (
    <div className="title">
      {size === 'sm' && <h2 className="title_text">{children}</h2>}
      {size === 'md' && <h4 className="title_text">{children}</h4>}
      {size === 'lg' && <h6 className="title_text">{children}</h6>}
    </div>
  );
};

export default React.memo(TitleWrapper);
