import Bar from '../Bar';

/**
 * @returns A component comprised of dyanmically moving Bar components that constructs an 'd'.
 */
export default function LowerD() {
  const barGroup1 = [
    { h: 'h-[15.6px]', mb: 'mb-[19.2px]' },
    { h: 'h-[31.2px]', mb: 'mb-[13.2px]' },
    { h: 'h-[40.8px]', mb: 'mb-[9.6px]' },
    { h: 'h-[48px]', mb: 'mb-[6.8px]' },
    { h: 'h-[53.2px]', mb: 'mb-[4.8px]' },
    { h: 'h-[57.2px]', mb: 'mb-[3.6px]' },
    { h: 'h-[60.8px]', mb: 'mb-[2.4px]' },
    { h: 'h-[63.6px]', mb: 'mb-[1.6px]' },
    { h: 'h-[66px]', mb: 'mb-[0.8px]' },
    { h: 'h-[68px]', mb: 'mb-[0.px]' },
    { h: 'h-[70px]', mb: '' },
    { h: 'h-[71px]', mb: '' },
    { h: 'h-[72px]', mb: '' },
  ];

  const barGroup2 = [
    [
      { h: 'h-[35.2px]', mb: 'mb-[12px]' },
      { h: 'h-[25.6px]', mb: '' },
    ],
    [
      { h: 'h-[28.8px]', mb: 'mb-[23.2px]' },
      { h: 'h-[21.2px]', mb: 'mb-[0.4px]' },
    ],
    [
      { h: 'h-[25.2px]', mb: 'mb-[28.8px]' },
      { h: 'h-[19.2px]', mb: 'mb-[0.8px]' },
    ],
    [
      { h: 'h-[22.6px]', mb: 'mb-[32.8px]' },
      { h: 'h-[17.6px]', mb: 'mb-[1.4px]' },
    ],
    [
      { h: 'h-[21.7px]', mb: 'mb-[34.8px]' },
      { h: 'h-[16px]', mb: 'mb-[2px]' },
    ],
    [
      { h: 'h-[20.2px]', mb: 'mb-[36.8px]' },
      { h: 'h-[14.8px]', mb: 'mb-[2.8px]' },
    ],
    [
      { h: 'h-[19.2px]', mb: 'mb-[37.6px]' },
      { h: 'h-[14.2px]', mb: 'mb-[3.6px]' },
    ],
    [
      { h: 'h-[18.4px]', mb: 'mb-[37.6px]' },
      { h: 'h-[13.6px]', mb: 'mb-[4.8px]' },
    ],
    [
      { h: 'h-[18px]', mb: 'mb-[37.2px]' },
      { h: 'h-[13.2px]', mb: 'mb-[6px]' },
    ],
    [
      { h: 'h-[17.2px]', mb: 'mb-[36.4px]' },
      { h: 'h-[12.8px]', mb: 'mb-[7.2px]' },
    ],
    [
      { h: 'h-[17px]', mb: 'mb-[35.2px]' },
      { h: 'h-[12px]', mb: 'mb-[9.2px]' },
    ],
  ];

  const barGroup3 = [
    [
      { h: 'h-[17.2px]', mb: 'mb-[32.4px]' },
      { h: 'h-[11.6px]', mb: 'mb-[8px]' },
      { h: 'h-[2px]', mb: 'mb-[1.6px]' },
    ],
  ];

  const barGroup4 = [
    [
      { h: 'h-[17.6px]', mb: 'mb-[29.6px]' },
      { h: 'h-[23.2px]', mb: 'mb-[1.4px]' },
    ],
    [
      { h: 'h-[17.6px]', mb: 'mb-[23.6px]' },
      { h: 'h-[28px]', mb: 'mb-[1.6px]' },
    ],
    [
      { h: 'h-[17.6px]', mb: 'mb-[10.4px]' },
      { h: 'h-[39.6px]', mb: 'mb-[1.6px]' },
    ],
  ];

  const barGroup5 = [
    { h: 'h-[65.2px]', mb: 'mb-[1.6px]' },
    { h: 'h-[63.2px]', mb: 'mb-[1.6px]' },
    { h: 'h-[70.4px]', mb: 'mb-[1.6px]' },
    { h: 'h-[81.2px]', mb: 'mb-[1.6px]' },
    { h: 'h-[92.4px]', mb: 'mb-[1.6px]' },
    { h: 'h-[103.6px]', mb: 'mb-[1.6px]' },
  ];

  const barGroup6 = [
    { h: 'h-[113.6px]', mb: '' },
    { h: 'h-[113.6px]', mb: '' },
    { h: 'h-[113.6px]', mb: '' },
    { h: 'h-[103.2px]', mb: '' },
    { h: 'h-[92px]', mb: '' },
    { h: 'h-[80.8px]', mb: '' },
    { h: 'h-[69.2px]', mb: '' },
    { h: 'h-[58.8px]', mb: '' },
    { h: 'h-[47.6px]', mb: '' },
    { h: 'h-[35.6px]', mb: '' },
    { h: 'h-[24.4px]', mb: '' },
    { h: 'h-[12.8px]', mb: '' },
    { h: 'h-[3.2px]', mb: '' },
    { h: 'h-[2px]', mb: '' },
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

      {barGroup3.map((group, index) => (
        <div key={`group-${index}`}>
          <div className={`${group[0].mb}`}>
            <Bar height={group[0].h} />
          </div>
          <div className={`${group[1].mb}`}>
            <Bar height={group[1].h} />
          </div>
          <div className={`${group[2].mb}`}>
            <Bar height={group[2].h} />
          </div>
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

      <div className="flex items-start mb-[1.6px]">
        {barGroup6.map((bar, index) => (
          <div className={bar.mb} key={`single-${index}`}>
            <Bar height={bar.h} />
          </div>
        ))}
      </div>
    </div>
  );
}

// const barGroup1 = [
//   { h: 'h-[39px]', mb: 'mb-[48px]' },
//   { h: 'h-[78px]', mb: 'mb-[33px]' },
//   { h: 'h-[102px]', mb: 'mb-[24px]' },
//   { h: 'h-[120px]', mb: 'mb-[17px]' },
//   { h: 'h-[133px]', mb: 'mb-[12px]' },
//   { h: 'h-[143px]', mb: 'mb-[9px]' },
//   { h: 'h-[152px]', mb: 'mb-[6px]' },
//   { h: 'h-[159px]', mb: 'mb-[4px]' },
//   { h: 'h-[165px]', mb: 'mb-[2px]' },
//   { h: 'h-[170px]', mb: 'mb-[1px]' },
//   { h: 'h-[175px]', mb: '' },
//   { h: 'h-[177px]', mb: '' },
//   { h: 'h-[180px]', mb: '' },
 
// ];

// const barGroup2 = [
//   [
//     { h: 'h-[88px]', mb: 'mb-[30px]' },
//     { h: 'h-[64px]', mb: '' },
//   ],
//   [
//     { h: 'h-[72px]', mb: 'mb-[58px]' },
//     { h: 'h-[53px]', mb: 'mb-[1px]' },
//   ],
//   [
//     { h: 'h-[63px]', mb: 'mb-[72px]' },
//     { h: 'h-[48px]', mb: 'mb-[2px]' },
//   ],
//   [
//     { h: 'h-[57px]', mb: 'mb-[82px]' },
//     { h: 'h-[44px]', mb: 'mb-[3px]' },
//   ],
//   [
//     { h: 'h-[54px]', mb: 'mb-[87px]' },
//     { h: 'h-[42px]', mb: 'mb-[4px]' },
//   ],
//   [
//     { h: 'h-[50px]', mb: 'mb-[92px]' },
//     { h: 'h-[39px]', mb: 'mb-[6px]' },
//   ],
//   [
//     { h: 'h-[48px]', mb: 'mb-[94px]' },
//     { h: 'h-[36px]', mb: 'mb-[9px]' },
//   ],
//   [
//     { h: 'h-[46px]', mb: 'mb-[94px]' },
//     { h: 'h-[34px]', mb: 'mb-[12px]' },
//   ],
//   [
//     { h: 'h-[45px]', mb: 'mb-[93px]' },
//     { h: 'h-[33px]', mb: 'mb-[15px]' },
//   ],
//   [
//     { h: 'h-[43px]', mb: 'mb-[91px]' },
//     { h: 'h-[32px]', mb: 'mb-[18px]' },
//   ],
//   [
//     { h: 'h-[43px]', mb: 'mb-[88px]' },
//     { h: 'h-[30px]', mb: 'mb-[23px]' },
//   ],
// ];

// const barGroup3 = [
//   [
//     { h: 'h-[43px]', mb: 'mb-[81px]' },
//     { h: 'h-[29px]', mb: 'mb-[20px]' },
//     { h: 'h-[5px]', mb: 'mb-[4px]' },
//   ],
// ];

// const barGroup4 = [
//   [
//     { h: 'h-[44px]', mb: 'mb-[74px]' },
//     { h: 'h-[58px]', mb: 'mb-[4px]' },
//   ],
//   [
//     { h: 'h-[44px]', mb: 'mb-[59px]' },
//     { h: 'h-[70px]', mb: 'mb-[4px]' },
//   ],
//   [
//     { h: 'h-[44px]', mb: 'mb-[26px]' },
//     { h: 'h-[99px]', mb: 'mb-[4px]' },
//   ],
// ];

// const barGroup5 = [
//   { h: 'h-[163px]', mb: 'mb-[4px]' },
//   { h: 'h-[158px]', mb: 'mb-[4px]' },
//   { h: 'h-[176px]', mb: 'mb-[4px]' },
//   { h: 'h-[203px]', mb: 'mb-[4px]' },
//   { h: 'h-[231px]', mb: 'mb-[4px]' },
//   { h: 'h-[259px]', mb: 'mb-[4px]' },
// ];

// const barGroup6 = [
//   { h: 'h-[284px]', mb: '' },
//   { h: 'h-[284px]', mb: '' },
//   { h: 'h-[284px]', mb: '' },
//   { h: 'h-[258px]', mb: '' },
//   { h: 'h-[230px]', mb: '' },
//   { h: 'h-[202px]', mb: '' },
//   { h: 'h-[173px]', mb: '' },
//   { h: 'h-[147px]', mb: '' },
//   { h: 'h-[119px]', mb: '' },
//   { h: 'h-[89px]', mb: '' },
//   { h: 'h-[61px]', mb: '' },
//   { h: 'h-[32px]', mb: '' },
//   { h: 'h-[8px]', mb: '' },
//   { h: 'h-[5px]', mb: '' },
// ]