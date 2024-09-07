interface Props {
  browserWidth: number;
  browserWidthTheshold: number;
}

export default function LastName({
  browserWidth,
  browserWidthTheshold,
}: React.PropsWithChildren<Props>) {
  return (
    <div
      className={`${browserWidth >= browserWidthTheshold ? 'text-[96px] top-10' : 'text-[96px] top-16'} roboto-flex-italic text-header relative`}
    >
      Stasiuk
    </div>
  );
}
