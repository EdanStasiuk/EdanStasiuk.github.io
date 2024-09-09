import E from './heroBarLetters/firstName/E';
import LowerA from './heroBarLetters/firstName/LowerA';
import LowerN from './heroBarLetters/firstName/LowerN';

export default function LastNameBars() {
  return (
    <div className="flex">
      <E />
      <div className="-mr-2" />
      <LowerN />
      <LowerA />
      <LowerN />
      <LowerN />
      <LowerN />
      <LowerN />
    </div>
  );
}
