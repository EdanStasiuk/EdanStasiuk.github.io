interface Props {
  browserWidth: number;
  browserWidthThreshold: number;
}

export default function FirstName({
  browserWidth,
  browserWidthThreshold,
}: React.PropsWithChildren<Props>) {
  return (
    <div
      className={`${browserWidth >= browserWidthThreshold ? 'text-[120px] -mb-24' : 'text-[110px] -mb-20'} roboto-flex-italic-800 text-subHero`}
    >
      Edan
    </div>
  );
}
