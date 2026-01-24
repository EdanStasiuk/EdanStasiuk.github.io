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
          I’ve worked on backend systems and real-world engineering projects, including developing
          ground station software for the ALEASAT CubeSat and building APIs and services that handle
          complex data flows, asynchronous processing, and reliable storage and retrieval.
        </p>
        <p className='mb-4'>
          When I’m not immersed in code or my studies, you can find me at the gym or playing piano!
        </p>
      </div>
    </div>
  );
}
