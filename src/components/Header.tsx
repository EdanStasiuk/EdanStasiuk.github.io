import { BROWSER_WIDTH_THRESHOLD } from '../Utils/constants';
import { useBrowserWidth } from '../Utils/contexts/useBrowserWidth';

interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  const { browserWidth } = useBrowserWidth();
  return (
    <div
      className={`${browserWidth >= BROWSER_WIDTH_THRESHOLD ? 'text-[38px]' : 'text-[32px]'} text-white roboto-flex-italic-800 mb-2`}
    >
      {title}
    </div>
  );
}
