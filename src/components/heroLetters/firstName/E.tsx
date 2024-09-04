import Bar from '../Bar';

/**
 * @returns A component comprised of dyanmically moving Bar components that constructs an 'E'.
 */
export default function E() {
  return (
    <div className="flex items-end h-[288px]">
      {/* OK so I know this is trash code but for some reason looping the Bar component
          is super buggy so I'm leaving this code as is because doesn't break. Looped
          code is commented underneath, for later if I've got time. */}
       {/* Left vertical line */}
      <div className="flex items-end">
        <Bar height="h-[7px]" />
        <Bar height="h-[29px]" />
        <Bar height="h-[57px]" />
        <Bar height="h-[86px]" />
        <Bar height="h-[112px]" />
        <Bar height="h-[143px]" />
        <Bar height="h-[169px]" />
        <Bar height="h-[195px]" />
        <Bar height="h-[224px]" />
        <Bar height="h-[252px]" />
        <Bar height="h-[271px]" />
        <Bar height="h-[281px]" />
        <Bar height="h-[284px]" />
        <Bar height="h-[284px]" />
        <Bar height="h-[284px]" />
      </div>

      <div className='space-y-6'>
        <div className="flex">
          <Bar height="h-[207px]" />
          <Bar height="h-[180px]" />
          <Bar height="h-[164px]" />
          <Bar height="h-[164px]" />
          <div>
            {/* Top line */}
            <div className='flex mb-[18px]'>
                <Bar height="h-[98px]" />
                <Bar height="h-[68px]" />
                <Bar height="h-[55px]" />
                <Bar height="h-[55px]" />
                <Bar height="h-[55px]" />
                <Bar height="h-[55px]" />
                <Bar height="h-[55px]" />
                <Bar height="h-[55px]" />
                <Bar height="h-[55px]" />
                <Bar height="h-[55px]" />
                <Bar height="h-[55px]" />
                <Bar height="h-[55px]" />
                <Bar height="h-[55px]" />
                <Bar height="h-[55px]" />
                <Bar height="h-[55px]" />
                <Bar height="h-[55px]" />
                <Bar height="h-[55px]" />
                <Bar height="h-[55px]" />
                <Bar height="h-[55px]" />
                <Bar height="h-[55px]" />
                <Bar height="h-[55px]" />
                <Bar height="h-[55px]" />
                <Bar height="h-[55px]" />
                <Bar height="h-[55px]" />
                <Bar height="h-[55px]" />
                <div className="flex mb-[15px] items-start">
                    <Bar height="h-[48px]" />
                    <Bar height="h-[22px]" />
                    <Bar height="h-[8px]" />
                </div>
            </div>
            {/* middle line */}
            <div className='flex items-end'>
                <Bar height="h-[48px]" />
                <Bar height="h-[48px]" />
                <Bar height="h-[48px]" />
                <Bar height="h-[48px]" />
                <Bar height="h-[48px]" />
                <Bar height="h-[48px]" />
                <Bar height="h-[48px]" />
                <Bar height="h-[48px]" />
                <Bar height="h-[48px]" />
                <Bar height="h-[48px]" />
                <Bar height="h-[48px]" />
                <Bar height="h-[48px]" />
                <Bar height="h-[48px]" />
                <Bar height="h-[48px]" />
                <Bar height="h-[48px]" />
                <Bar height="h-[48px]" />
                <Bar height="h-[48px]" />
                <Bar height="h-[48px]" />
                <div className="flex mb-[15px] items-start">
                    <Bar height="h-[33px]" />
                    <Bar height="h-[8px]" />
                </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="flex"> 
          <Bar height="h-[53px]" />
          <Bar height="h-[53px]" />
          <Bar height="h-[53px]" />
          <Bar height="h-[53px]" />
          <Bar height="h-[53px]" />
          <Bar height="h-[53px]" />
          <Bar height="h-[53px]" />
          <Bar height="h-[53px]" />
          <Bar height="h-[53px]" />
          <Bar height="h-[53px]" />
          <Bar height="h-[53px]" />
          <Bar height="h-[53px]" />
          <Bar height="h-[53px]" />
          <Bar height="h-[53px]" />
          <Bar height="h-[53px]" />
          <Bar height="h-[53px]" />
          <Bar height="h-[53px]" />
          <Bar height="h-[53px]" />
          <Bar height="h-[53px]" />
          <Bar height="h-[53px]" />
          <Bar height="h-[53px]" />
          <div className="flex items-start">
            <Bar height="h-[33px]" />
            <Bar height="h-[8px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

// interface BarGroupProps {
//   heights: number[];
//   classes: string;
// }

// const BarGroup: React.FC<BarGroupProps> = ({ heights, classes }) => (
//   <div className={`${classes}`}>
//     {heights.map((height, index) => (
//       <Bar key={index} height={`h-[${height}px]`} />
//     ))}
//   </div>
// );

// export default function E() {
//   return (
//     <div className="flex items-end h-[288px]">
//       {/* Left vertical line */}
//       <div className="flex items-end">
//         <BarGroup
//           classes={'flex items-end'}
//           heights={[
//             7, 29, 57, 86, 112, 143, 169, 195, 224, 252, 271, 281, 284, 284,
//             284,
//           ]}
//         />
//       </div>

//       <div className="space-y-6">
//         <div className="flex">
//           <BarGroup classes={'flex'} heights={[207, 180, 164, 164]} />
//           <div>
//             {/* Top line */}
//             <div className="flex">
//               <BarGroup classes={'flex'} heights={[98, 68]} />
//               <BarGroup classes={'flex'} heights={Array(23).fill(55)} />
//               <div className="flex items-start">
//                 <BarGroup classes={'flex items-start'} heights={[48, 22, 8]} />
//               </div>
//             </div>
//             <div className="flex relative items-end">
//               {' '}
//               {/* middle line */}
//               <BarGroup
//                 classes={'flex items-end'}
//                 heights={Array(18).fill(48)}
//               />
//               <div className="flex mb-[33px] items-start">
//                 <BarGroup
//                   classes={'flex relative items-start top-[18px]'}
//                   heights={[33, 8]}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Bottom line */}
//         <div className="flex">
//           <BarGroup classes={'flex'} heights={Array(21).fill(53)} />
//           <div className="flex items-start">
//             <BarGroup classes={'flex items-start'} heights={[33, 8]} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }