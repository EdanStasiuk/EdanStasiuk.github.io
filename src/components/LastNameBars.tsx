import E from './heroLetters/firstName/E';
import LowerA from './heroLetters/firstName/LowerA';
import LowerN from './heroLetters/firstName/LowerN';

export default function LastName() {
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
