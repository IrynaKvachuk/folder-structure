type Props = {
  size?: number;
  className?: string;
};

const ArrowIcon: React.FC<Props> = (props: Props) => {
  const { size = 40, className = 'icon-arrow' } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width={size}
      height={size}
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );
};

export default ArrowIcon;
