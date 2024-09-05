import E from "./heroLetters/firstName/E";
import LowerA from "./heroLetters/firstName/LowerA";
import LowerD from "./heroLetters/firstName/LowerD";

export default function FirstName() {

    return (
      <div className="flex">
        <div className="-mr-1">
            <E />
        </div>
        <div className="-mr-1">
            <LowerD />
        </div>
        <div className="scale-95 relative top-[6px]">
            <LowerA />
        </div>
      </div>
    )
}
  