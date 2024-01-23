import React, { useId, useState } from 'react';
import { RadioItemType } from '../../../store/_common/types/baseTypes';

type Props = {
  name: string;
  items: Array<RadioItemType>;
  defaultValue?: RadioItemType;
  title?: string;
  className?: string;
  callback?: (value: string) => void;
};

const RadioGroupWrapper: React.FC<Props> = (props: Props) => {
  const {
    name,
    title = '',
    items,
    defaultValue = items[0],
    className = '',
    callback = () => {}
  } = props;
  const id = useId();

  const [chosen, setChosen] = useState<RadioItemType>(defaultValue);

  return (
    <div className={`radio-group ${className}`}>
      <span className="radio-group_title">{title}</span>
      <div>
        {items.map((item) => {
          const { label, value } = item;

          return (
            <label key={id + label}>
              <input
                type="radio"
                name={name}
                value={value}
                checked={chosen?.value === value}
                onChange={() => {
                  setChosen(item);
                  callback(value);
                }}
              />
              {label}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(RadioGroupWrapper);
