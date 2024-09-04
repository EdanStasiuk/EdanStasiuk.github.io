import Bar from '../Bar';

interface BarGroupProps {
  heights: number[];
  classes: string;
}

const BarGroup: React.FC<BarGroupProps> = ({ heights, classes }) => (
  <div className={`${classes}`}>
    {heights.map((height, index) => (
      <Bar key={index} height={`h-[${height}px]`} />
    ))}
  </div>
);

/**
 * @returns A component comprised of dyanmically moving Bar components that constructs an 'E'.
 */
export default function E() {
  return (
    <div className="flex items-end">
      {/* Left vertical line */}
      <div className="flex items-end">
        <BarGroup
          classes={'flex items-end'}
          heights={[
            7, 29, 57, 86, 112, 143, 169, 195, 224, 252, 271, 281, 284, 284,
            284,
          ]}
        />
      </div>

      <div className="space-y-6">
        <div className="flex">
          <BarGroup classes={'flex'} heights={[207, 180, 164, 164]} />
          <div>
            {/* Top line */}
            <div className="flex">
              <BarGroup classes={'flex'} heights={[98, 68]} />
              <BarGroup classes={'flex'} heights={Array(23).fill(55)} />
              <div className="flex items-start">
                <BarGroup classes={'flex items-start'} heights={[48, 22, 8]} />
              </div>
            </div>
            <div className="flex relative items-end">
              {' '}
              {/* middle line */}
              <BarGroup
                classes={'flex items-end'}
                heights={Array(18).fill(48)}
              />
              <div className="flex mb-[33px] items-start">
                <BarGroup
                  classes={'flex relative items-start top-[18px]'}
                  heights={[33, 8]}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Bottom line */}
        <div className="flex">
          <BarGroup classes={'flex'} heights={Array(21).fill(53)} />
          <div className="flex items-start">
            <BarGroup classes={'flex items-start'} heights={[33, 8]} />
          </div>
        </div>
      </div>
    </div>
  );
}
