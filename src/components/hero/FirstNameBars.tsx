import E from './heroBarLetters/firstName/E';
import LowerA from './heroBarLetters/firstName/LowerA';
import LowerD from './heroBarLetters/firstName/LowerD';
import LowerN from './heroBarLetters/firstName/LowerN';

export default function FirstNameBars() {
  return (
    <div className="flex">
      <E />
      <div className="-mr-2" />
      <LowerD />
      <div className="-mr-2" />
      <LowerA />
      <div className="mr-2" />
      <LowerN />
    </div>
  );
}
