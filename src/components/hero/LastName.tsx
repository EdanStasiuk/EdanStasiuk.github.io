import { BROWSER_WIDTH_THRESHOLD } from '../../Utils/constants';
import { useBrowserWidth } from '../../Utils/contexts/useBrowserWidth';

export default function LastName() {
  const { browserWidth } = useBrowserWidth();
  return (
    <div
      className={`${browserWidth >= BROWSER_WIDTH_THRESHOLD ? 'text-[120px]' : 'text-[110px] -mb-12'}
          roboto-flex-italic-800 text-subHero`}
    >
      Stasiuk
    </div>
  );
}
