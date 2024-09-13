import Header from './Header';

export default function AboutMe() {
  return (
    <div id="about" className="text-white roboto-flex-italic-800">
      <Header title="About Me" />
      <div className="font-robotoFlex font-light text-[16px] sm:text-[19px] md:text-[22px]">
        <p className="mb-4">
          I’m a third-year Computing Science major at Simon Fraser University,
          concentrating in AI.
        </p>
        <p className="mb-4">
          I’m passionate about autonomous systems and modern financial
          technologies, with an affinity for decentralized and open-source
          solutions.
        </p>
      </div>
    </div>
  );
}
