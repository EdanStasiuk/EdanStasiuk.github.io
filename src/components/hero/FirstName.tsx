import { BROWSER_WIDTH_THRESHOLD } from '../../Utils/constants';
import { useBrowserWidth } from '../../Utils/contexts/useBrowserWidth';

export default function FirstName() {
  const { browserWidth } = useBrowserWidth();
  return (
    <div
      className={`${browserWidth >= BROWSER_WIDTH_THRESHOLD ? 'text-[120px] -mb-24' : 'text-[110px] -mb-20'} roboto-flex-italic-800 text-subHero`}
    >
      Edan
    </div>
  );
}
