import E from './heroLetters/firstName/E';
import LowerA from './heroLetters/firstName/LowerA';
import LowerD from './heroLetters/firstName/LowerD';
import LowerN from './heroLetters/firstName/LowerN';

export default function FirstName() {
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
