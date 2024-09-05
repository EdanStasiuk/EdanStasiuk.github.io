import Bar from '../Bar';

/**
 * @returns A component comprised of dyanmically moving Bar components that constructs an 'n'.
 */
export default function LowerN() {
  const barGroup1 = [
    { h: 'h-[8px]', mb: '' },
    { h: 'h-[35px]', mb: '' },
    { h: 'h-[62px]', mb: '' },
    { h: 'h-[90px]', mb: '' },
    { h: 'h-[119px]', mb: '' },
    { h: 'h-[147px]', mb: '' },
    { h: 'h-[179px]', mb: '' },
    { h: 'h-[179px]', mb: '' },
    { h: 'h-[179px]', mb: '' },
    { h: 'h-[179px]', mb: '' },
    { h: 'h-[179px]', mb: '' },
    { h: 'h-[179px]', mb: '' },
    { h: 'h-[179px]', mb: '' },
    { h: 'h-[165px]', mb: 'mb-[14px]' },
    { h: 'h-[140px]', mb: 'mb-[39px]' },
    { h: 'h-[106px]', mb: 'mb-[73px]' },
    { h: 'h-[77px]', mb: 'mb-[102px]' },
    { h: 'h-[63px]', mb: 'mb-[116px]' },
    { h: 'h-[57px]', mb: 'mb-[122px]' },
  ];

  const barGroup2 = [
    [
      { h: 'h-[6px]', mb: 'mb-[15px]' },
      { h: 'h-[32px]', mb: 'mb-[125px]' },
    ],
  ];

  const barGroup3 = [
    { h: 'h-[34px]', mb: 'mb-[128px]' },
    { h: 'h-[36px]', mb: 'mb-[131px]' },
    { h: 'h-[38px]', mb: 'mb-[132px]' },
    { h: 'h-[40px]', mb: 'mb-[133px]' },
  ];

  const barGroup4 = [
    [
      { h: 'h-[43px]', mb: 'mb-[128px]' },
      { h: 'h-[6px]', mb: '' },
    ],
    [
      { h: 'h-[46px]', mb: 'mb-[102px]' },
      { h: 'h-[31px]', mb: '' },
    ],
    [
      { h: 'h-[49px]', mb: 'mb-[73px]' },
      { h: 'h-[58px]', mb: '' },
    ],
    [
      { h: 'h-[54px]', mb: 'mb-[39px]' },
      { h: 'h-[88px]', mb: '' },
    ],
  ];

  const barGroup5 = [
    { h: 'h-[182px]', mb: '' },
    { h: 'h-[183px]', mb: '' },
    { h: 'h-[183px]', mb: '' },
    { h: 'h-[183px]', mb: '' },
    { h: 'h-[183px]', mb: '' },
    { h: 'h-[183px]', mb: '' },
    { h: 'h-[182px]', mb: '' },
    { h: 'h-[181px]', mb: '' },
    { h: 'h-[179px]', mb: '' },
    { h: 'h-[167px]', mb: 'mb-[10px]' },
    { h: 'h-[136px]', mb: 'mb-[39px]' },
    { h: 'h-[103px]', mb: 'mb-[67px]' },
    { h: 'h-[67px]', mb: 'mb-[94px]' },
    { h: 'h-[34px]', mb: 'mb-[119px]' },
  ];

  return (
    <div className="flex items-end h-[288px]">
      {barGroup1.map((bar, index) => (
        <div className={bar.mb} key={`single-${index}`}>
          <Bar height={bar.h} />
        </div>
      ))}

      {barGroup2.map((group, index) => (
        <div key={`group-${index}`}>
          <div className={`${group[0].mb}`}>
            <Bar height={group[0].h} />
          </div>
          <div className={`${group[1].mb}`}>
            <Bar height={group[1].h} />
          </div>
        </div>
      ))}

      {barGroup3.map((bar, index) => (
        <div className={bar.mb} key={`single-${index}`}>
          <Bar height={bar.h} />
        </div>
      ))}

      {barGroup4.map((group, index) => (
        <div key={`group-${index}`}>
          <div className={`${group[0].mb}`}>
            <Bar height={group[0].h} />
          </div>
          <div className={`${group[1].mb}`}>
            <Bar height={group[1].h} />
          </div>
        </div>
      ))}

      {barGroup5.map((bar, index) => (
        <div className={bar.mb} key={`single-${index}`}>
          <Bar height={bar.h} />
        </div>
      ))}
    </div>
  );
}
