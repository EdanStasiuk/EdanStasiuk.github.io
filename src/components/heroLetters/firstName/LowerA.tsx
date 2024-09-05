import Bar from '../Bar';

/**
 * @returns A component comprised of dyanmically moving Bar components that constructs an 'a'.
 */
export default function LowerA() {
  const barGroup1 = [
    { h: 'h-[41px]', mb: 'mb-[22px]' },
    { h: 'h-[52px]', mb: 'mb-[17px]' },
    { h: 'h-[66px]', mb: 'mb-[11px]' },
    { h: 'h-[73px]', mb: 'mb-[8px]' },
  ];

  const barGroup2 = [
    [
      { h: 'h-[13px]', mb: 'mb-[24px]' },
      { h: 'h-[79px]', mb: 'mb-[5px]' },
    ],
    [
      { h: 'h-[23px]', mb: 'mb-[21px]' },
      { h: 'h-[84px]', mb: 'mb-[3px]' },
    ],
    [
      { h: 'h-[31px]', mb: 'mb-[19px]' },
      { h: 'h-[87px]', mb: 'mb-[2px]' },
    ],
    [
      { h: 'h-[41px]', mb: 'mb-[17px]' },
      { h: 'h-[90px]', mb: 'mb-[1px]' },
    ],
    [
      { h: 'h-[46px]', mb: 'mb-[15px]' },
      { h: 'h-[93px]', mb: '' },
    ],
    [
      { h: 'h-[51px]', mb: 'mb-[14px]' },
      { h: 'h-[94px]', mb: '' },
    ],
    [
      { h: 'h-[55px]', mb: 'mb-[13px]' },
      { h: 'h-[94px]', mb: 'mb-[1px]' },
    ],
    [
      { h: 'h-[58px]', mb: 'mb-[12px]' },
      { h: 'h-[94px]', mb: 'mb-[2px]' },
    ],
    [
      { h: 'h-[61px]', mb: 'mb-[11px]' },
      { h: 'h-[95px]', mb: 'mb-[2px]' },
    ],
  ];

  const barGroup3 = [
    [
      { h: 'h-[63px]', mb: 'mb-[11px]' },
      { h: 'h-[36px]', mb: 'mb-[11px]' },
      { h: 'h-[47px]', mb: 'mb-[3px]' },
    ],
    [
      { h: 'h-[65px]', mb: 'mb-[10px]' },
      { h: 'h-[33px]', mb: 'mb-[20px]' },
      { h: 'h-[41px]', mb: 'mb-[4px]' },
    ],
    [
      { h: 'h-[55px]', mb: 'mb-[22px]' },
      { h: 'h-[30px]', mb: 'mb-[25px]' },
      { h: 'h-[37px]', mb: 'mb-[6px]' },
    ],
    [
      { h: 'h-[47px]', mb: 'mb-[31px]' },
      { h: 'h-[29px]', mb: 'mb-[28px]' },
      { h: 'h-[34px]', mb: 'mb-[8px]' },
    ],
    [
      { h: 'h-[44px]', mb: 'mb-[34px]' },
      { h: 'h-[28px]', mb: 'mb-[29px]' },
      { h: 'h-[33px]', mb: 'mb-[10px]' },
    ],
    [
      { h: 'h-[42px]', mb: 'mb-[36px]' },
      { h: 'h-[28px]', mb: 'mb-[28px]' },
      { h: 'h-[33px]', mb: 'mb-[12px]' },
    ],
    [
      { h: 'h-[40px]', mb: 'mb-[38px]' },
      { h: 'h-[28px]', mb: 'mb-[27px]' },
      { h: 'h-[33px]', mb: 'mb-[14px]' },
    ],
    [
      { h: 'h-[39px]', mb: 'mb-[38px]' },
      { h: 'h-[28px]', mb: 'mb-[25px]' },
      { h: 'h-[31px]', mb: 'mb-[19px]' },
    ],
    [
      { h: 'h-[41px]', mb: 'mb-[36px]' },
      { h: 'h-[28px]', mb: 'mb-[21px]' },
      { h: 'h-[31px]', mb: 'mb-[24px]' },
    ],
    [
      { h: 'h-[42px]', mb: 'mb-[33px]' },
      { h: 'h-[29px]', mb: 'mb-[12px]' },
      { h: 'h-[40px]', mb: 'mb-[25px]' },
    ],
  ];

  const barGroup4 = [
    [
      { h: 'h-[43px]', mb: 'mb-[28px]' },
      { h: 'h-[92px]', mb: 'mb-[18px]' },
    ],
    [
      { h: 'h-[48px]', mb: 'mb-[16px]' },
      { h: 'h-[105px]', mb: 'mb-[12px]' },
    ],
  ];

  const barGroup5 = [
    { h: 'h-[172px]', mb: 'mb-[8px]' },
    { h: 'h-[175px]', mb: 'mb-[5px]' },
    { h: 'h-[176px]', mb: 'mb-[3px]' },
    { h: 'h-[177px]', mb: 'mb-[1px]' },
    { h: 'h-[177px]', mb: '' },
    { h: 'h-[175px]', mb: '' },
    { h: 'h-[173px]', mb: '' },
    { h: 'h-[168px]', mb: 'mb-[1px]' },
    { h: 'h-[163px]', mb: 'mb-[2px]' },
    { h: 'h-[158px]', mb: 'mb-[4px]' },
  ];

  const barGroup6 = [
    [
      { h: 'h-[91px]', mb: 'mb-[20px]' },
      { h: 'h-[42px]', mb: 'mb-[5px]' },
    ],
    [
      { h: 'h-[63px]', mb: 'mb-[43px]' },
      { h: 'h-[37px]', mb: 'mb-[7px]' },
    ],
    [
      { h: 'h-[30px]', mb: 'mb-[66px]' },
      { h: 'h-[32px]', mb: 'mb-[12px]' },
    ],
  ];

  const barGroup7 = [
    { h: 'h-[25px]', mb: 'mb-[22px]' },
    { h: 'h-[7px]', mb: 'mb-[41px]' },
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

      {barGroup6.map((group, index) => (
        <div key={`group-${index}`}>
          <div className={`${group[0].mb}`}>
            <Bar height={group[0].h} />
          </div>
          <div className={`${group[1].mb}`}>
            <Bar height={group[1].h} />
          </div>
        </div>
      ))}

      {barGroup7.map((bar, index) => (
        <div className={bar.mb} key={`single-${index}`}>
          <Bar height={bar.h} />
        </div>
      ))}
    </div>
  );
}
