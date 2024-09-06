import E from './heroLetters/firstName/E';
import LowerA from './heroLetters/firstName/LowerA';
import LowerD from './heroLetters/firstName/LowerD';
import LowerN from './heroLetters/firstName/LowerN';

export default function FirstName() {
  return (
    <div className="flex">
      <E />
      <LowerD />
      <LowerA />
      <div className="mr-4" />
      <LowerN />
    </div>
  );
}
