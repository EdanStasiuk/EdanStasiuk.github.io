import Bar from '../Bar';

/**
 * @returns A component comprised of dyanmically moving Bar components that constructs an 'n'.
 */
export default function LowerN() {
  const barGroup1 = [
    { h: 'h-[3.2px]', mb: '' },
    { h: 'h-[14px]', mb: '' },
    { h: 'h-[24.6px]', mb: '' },
    { h: 'h-[36px]', mb: '' },
    { h: 'h-[47.6px]', mb: '' },
    { h: 'h-[58.6px]', mb: '' },
    { h: 'h-[71.6px]', mb: '' },
    { h: 'h-[71.6px]', mb: '' },
    { h: 'h-[71.6px]', mb: '' },
    { h: 'h-[71.6px]', mb: '' },
    { h: 'h-[71.6px]', mb: '' },
    { h: 'h-[71.6px]', mb: '' },
    { h: 'h-[71.6px]', mb: '' },
    { h: 'h-[66px]', mb: 'mb-[5.6px]' },
    { h: 'h-[56px]', mb: 'mb-[15.6px]' },
    { h: 'h-[42.4px]', mb: 'mb-[29.2px]' },
    { h: 'h-[30.8px]', mb: 'mb-[40.8px]' },
    { h: 'h-[25.2px]', mb: 'mb-[46.4px]' },
    { h: 'h-[22.8px]', mb: 'mb-[48.8px]' },
  ];

  const barGroup2 = [
    [
      { h: 'h-[2.4px]', mb: 'mb-[6px]' },
      { h: 'h-[12.8px]', mb: 'mb-[50px]' },
    ],
  ];

  const barGroup3 = [
    { h: 'h-[13.6px]', mb: 'mb-[51.2px]' },
    { h: 'h-[14.4px]', mb: 'mb-[52.4px]' },
    { h: 'h-[15.2px]', mb: 'mb-[52.8px]' },
    { h: 'h-[16px]', mb: 'mb-[53.2px]' },
  ];

  const barGroup4 = [
    [
      { h: 'h-[17.2px]', mb: 'mb-[51.2px]' },
      { h: 'h-[2.4px]', mb: '' },
    ],
    [
      { h: 'h-[18.4px]', mb: 'mb-[40.8px]' },
      { h: 'h-[12.4px]', mb: '' },
    ],
    [
      { h: 'h-[19.6px]', mb: 'mb-[29.2px]' },
      { h: 'h-[23.6px]', mb: '-mb-[0.4px]' },
    ],
    [
      { h: 'h-[21.7px]', mb: 'mb-[15.6px]' },
      { h: 'h-[35.6px]', mb: '-mb-[0.4px]' },
    ],
  ];

  const barGroup5 = [
    { h: 'h-[72.8px]', mb: '' },
    { h: 'h-[73.2px]', mb: '-mb-[0.4px]' },
    { h: 'h-[73.2px]', mb: '-mb-[0.4px]' },
    { h: 'h-[73.2px]', mb: '-mb-[0.4px]' },
    { h: 'h-[73.2px]', mb: '-mb-[0.4px]' },
    { h: 'h-[73.2px]', mb: '-mb-[0.4px]' },
    { h: 'h-[72.8px]', mb: '' },
    { h: 'h-[72.4px]', mb: '' },
    { h: 'h-[71.6px]', mb: '' },
    { h: 'h-[66.8px]', mb: 'mb-[4px]' },
    { h: 'h-[54.4px]', mb: 'mb-[15.6px]' },
    { h: 'h-[41.2px]', mb: 'mb-[26.8px]' },
    { h: 'h-[26.8px]', mb: 'mb-[37.6px]' },
    { h: 'h-[13.6px]', mb: 'mb-[47.6px]' },
  ];

  return (
    <div className="flex items-end">
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

// const barGroup1 = [
//   { h: 'h-[8px]', mb: '' },
//   { h: 'h-[35px]', mb: '' },
//   { h: 'h-[62px]', mb: '' },
//   { h: 'h-[90px]', mb: '' },
//   { h: 'h-[119px]', mb: '' },
//   { h: 'h-[147px]', mb: '' },
//   { h: 'h-[179px]', mb: '' },
//   { h: 'h-[179px]', mb: '' },
//   { h: 'h-[179px]', mb: '' },
//   { h: 'h-[179px]', mb: '' },
//   { h: 'h-[179px]', mb: '' },
//   { h: 'h-[179px]', mb: '' },
//   { h: 'h-[179px]', mb: '' },
//   { h: 'h-[165px]', mb: 'mb-[14px]' },
//   { h: 'h-[140px]', mb: 'mb-[39px]' },
//   { h: 'h-[106px]', mb: 'mb-[73px]' },
//   { h: 'h-[77px]', mb: 'mb-[102px]' },
//   { h: 'h-[63px]', mb: 'mb-[116px]' },
//   { h: 'h-[57px]', mb: 'mb-[122px]' },
// ];

// const barGroup2 = [
//   [
//     { h: 'h-[6px]', mb: 'mb-[15px]' },
//     { h: 'h-[32px]', mb: 'mb-[125px]' },
//   ],
// ];

// const barGroup3 = [
//   { h: 'h-[34px]', mb: 'mb-[128px]' },
//   { h: 'h-[36px]', mb: 'mb-[131px]' },
//   { h: 'h-[38px]', mb: 'mb-[132px]' },
//   { h: 'h-[40px]', mb: 'mb-[133px]' },
// ];

// const barGroup4 = [
//   [
//     { h: 'h-[43px]', mb: 'mb-[128px]' },
//     { h: 'h-[6px]', mb: '' },
//   ],
//   [
//     { h: 'h-[46px]', mb: 'mb-[102px]' },
//     { h: 'h-[31px]', mb: '' },
//   ],
//   [
//     { h: 'h-[49px]', mb: 'mb-[73px]' },
//     { h: 'h-[58px]', mb: '' },
//   ],
//   [
//     { h: 'h-[54px]', mb: 'mb-[39px]' },
//     { h: 'h-[88px]', mb: '' },
//   ],
// ];

// const barGroup5 = [
//   { h: 'h-[182px]', mb: '' },
//   { h: 'h-[183px]', mb: '' },
//   { h: 'h-[183px]', mb: '' },
//   { h: 'h-[183px]', mb: '' },
//   { h: 'h-[183px]', mb: '' },
//   { h: 'h-[183px]', mb: '' },
//   { h: 'h-[182px]', mb: '' },
//   { h: 'h-[181px]', mb: '' },
//   { h: 'h-[179px]', mb: '' },
//   { h: 'h-[167px]', mb: 'mb-[10px]' },
//   { h: 'h-[136px]', mb: 'mb-[39px]' },
//   { h: 'h-[103px]', mb: 'mb-[67px]' },
//   { h: 'h-[67px]', mb: 'mb-[94px]' },
//   { h: 'h-[34px]', mb: 'mb-[119px]' },
// ];