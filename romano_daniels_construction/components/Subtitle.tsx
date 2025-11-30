import clsx from 'clsx';
import { RiCornerUpRightFill } from 'react-icons/ri';

const Subtitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h2
      className={clsx(
        'font-azeret-mono flex items-center uppercase gap-x-1',
        className,
      )}
    >
      <RiCornerUpRightFill size={20} />
      {title}
    </h2>
  );
};

export default Subtitle;
