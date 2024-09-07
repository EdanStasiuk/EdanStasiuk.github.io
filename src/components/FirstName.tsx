interface Props {
  browserWidth: number;
  browserWidthTheshold: number;
}

export default function FirstName({
  browserWidth,
  browserWidthTheshold,
}: React.PropsWithChildren<Props>) {
  return (
    <div
      className={`${browserWidth >= browserWidthTheshold ? 'text-[96px] top-28' : 'text-[96px] top-32'} roboto-flex-italic text-header relative`}
    >
      Edan
    </div>
  );
}
