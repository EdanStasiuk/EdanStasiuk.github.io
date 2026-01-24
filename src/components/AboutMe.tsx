import Header from './Header';

export default function AboutMe() {
  return (
    <div id="about" className='text-white roboto-flex-800'>
      <Header title="About Me" />
      <div className='font-roboto font-light text-[16px] sm:text-[19px] md:text-[22px]'>
        <p className='mb-4'>
          I’m a fourth-year Computing Science major at Simon Fraser University,
          dual-concentrating in Artificial Intelligence and Computing Systems.
        </p>
        <p className='mb-4'>
          I aspire to develop autonomous systems and advance modern financial technologies, with a focus on decentralized and open-source solutions.
        </p>
        <p className='mb-4'>
          When I’m not immersed in code or my studies, you can find me at the gym or playing piano!
        </p>
      </div>
    </div>
  );
}
