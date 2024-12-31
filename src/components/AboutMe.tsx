import Header from './Header';

export default function AboutMe() {
  return (
    <div id="about" className='text-white roboto-flex-italic-800'>
      <Header title="About Me" />
      <div className='font-robotoFlex font-light text-[16px] sm:text-[19px] md:text-[22px]'>
        <p className='mb-4'>
          I’m a third-year Computing Science major at Simon Fraser University,
          concentrating in AI.
        </p>
        <p className='mb-4'>
          I am passionate about developing autonomous systems and advancing modern financial technologies, with a particular focus on decentralized and open-source solutions.
        </p>
        <p className='mb-4'>
          When I’m not immersed in code or my studies, you can find me at the gym or playing piano.
        </p>
      </div>
    </div>
  );
}
