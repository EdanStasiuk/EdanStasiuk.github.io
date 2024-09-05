import E from "./heroLetters/firstName/E";
import LowerA from "./heroLetters/firstName/LowerA";
import LowerD from "./heroLetters/firstName/LowerD";
import LowerN from "./heroLetters/firstName/LowerN";

export default function FirstName() {

    return (
      <div className="flex">
        <div className="-mr-1">
            <E />
        </div>
        <div className="-mr-1">
            <LowerD />
        </div>
        <div className="mr-8">
            <LowerA />
        </div>
        <LowerN />
      </div>
    )
}
  