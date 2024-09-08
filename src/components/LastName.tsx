interface Props {
  browserWidth: number;
  browserWidthThreshold: number;
}

export default function LastName({
  browserWidth,
  browserWidthThreshold,
}: React.PropsWithChildren<Props>) {
  return (
    <div
      className={`${browserWidth >= browserWidthThreshold ? "text-[120px]" : "text-[110px] -mb-12"}
          roboto-flex-italic-800 text-subHero`}
    >
      Stasiuk
    </div>
  );
}
