import Bar from '../Bar';

/**
 * @returns A component comprised of dyanmically moving Bar components that constructs an 'E'.
 */
export default function E() {
  return (
    <div className="flex items-end">
      {/* OK so I know this is trash code but for some reason looping the Bar component
          is super buggy so I'm leaving this code as is because doesn't break. Looped
          code is commented underneath, for later if I've got time. */}
      {/* Left vertical line */}
      <div className="flex items-end">
        <Bar height="h-[3px]" />
        <Bar height="h-[12px]" />
        <Bar height="h-[23px]" />
        <Bar height="h-[34px]" />
        <Bar height="h-[45px]" />
        <Bar height="h-[57px]" />
        <Bar height="h-[68px]" />
        <Bar height="h-[78px]" />
        <Bar height="h-[89px]" />
        <Bar height="h-[101px]" />
        <Bar height="h-[108px]" />
        <Bar height="h-[112px]" />
        <Bar height="h-[113.5px]" />
        <Bar height="h-[113.5px]" />
        <Bar height="h-[113.5px]" />
      </div>

      <div className="space-y-[9.6px]">
        <div className="flex">
          <Bar height="h-[83px]" />
          <Bar height="h-[72px]" />
          <Bar height="h-[66px]" />
          <Bar height="h-[66px]" />
          <div>
            {/* Top line */}
            <div className="flex mb-[7.2px]">
              <Bar height="h-[39px]" />
              <Bar height="h-[27px]" />
              <Bar height="h-[22px]" />
              <Bar height="h-[22px]" />
              <Bar height="h-[22px]" />
              <Bar height="h-[22px]" />
              <Bar height="h-[22px]" />
              <Bar height="h-[22px]" />
              <Bar height="h-[22px]" />
              <Bar height="h-[22px]" />
              <Bar height="h-[22px]" />
              <Bar height="h-[22px]" />
              <Bar height="h-[22px]" />
              <Bar height="h-[22px]" />
              <Bar height="h-[22px]" />
              <Bar height="h-[22px]" />
              <Bar height="h-[22px]" />
              <Bar height="h-[22px]" />
              <Bar height="h-[22px]" />
              <Bar height="h-[22px]" />
              <Bar height="h-[22px]" />
              <Bar height="h-[22px]" />
              <Bar height="h-[22px]" />
              <Bar height="h-[22px]" />
              <div className="flex mb-[6px] items-start">
                <Bar height="h-[19px]" />
                <Bar height="h-[9px]" />
                <Bar height="h-[3px]" />
              </div>
            </div>
            {/* middle line */}
            <div className="flex items-end">
              <Bar height="h-[19px]" />
              <Bar height="h-[19px]" />
              <Bar height="h-[19px]" />
              <Bar height="h-[19px]" />
              <Bar height="h-[19px]" />
              <Bar height="h-[19px]" />
              <Bar height="h-[19px]" />
              <Bar height="h-[19px]" />
              <Bar height="h-[19px]" />
              <Bar height="h-[19px]" />
              <Bar height="h-[19px]" />
              <Bar height="h-[19px]" />
              <Bar height="h-[19px]" />
              <Bar height="h-[19px]" />
              <Bar height="h-[19px]" />
              <Bar height="h-[19px]" />
              <Bar height="h-[19px]" />
              <Bar height="h-[19px]" />
              <div className="flex mb-[6px] items-start">
                <Bar height="h-[13px]" />
                <Bar height="h-[3px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="flex">
          <Bar height="h-[21.2px]" />
          <Bar height="h-[21.2px]" />
          <Bar height="h-[21.2px]" />
          <Bar height="h-[21.2px]" />
          <Bar height="h-[21.2px]" />
          <Bar height="h-[21.2px]" />
          <Bar height="h-[21.2px]" />
          <Bar height="h-[21.2px]" />
          <Bar height="h-[21.2px]" />
          <Bar height="h-[21.2px]" />
          <Bar height="h-[21.2px]" />
          <Bar height="h-[21.2px]" />
          <Bar height="h-[21.2px]" />
          <Bar height="h-[21.2px]" />
          <Bar height="h-[21.2px]" />
          <Bar height="h-[21.2px]" />
          <Bar height="h-[21.2px]" />
          <Bar height="h-[21.2px]" />
          <Bar height="h-[21.2px]" />
          <Bar height="h-[21.2px]" />
          <Bar height="h-[21.2px]" />
          <div className="flex items-start">
            <Bar height="h-[13px]" />
            <Bar height="h-[3px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function E() {
//   return (
//     <div className="flex items-end">
//       {/* OK so I know this is trash code but for some reason looping the Bar component
//           is super buggy so I'm leaving this code as is because doesn't break. Looped
//           code is commented underneath, for later if I've got time. */}
//        {/* Left vertical line */}
//       <div className="flex items-end">
//         <Bar height="h-[7px]" />
//         <Bar height="h-[29px]" />
//         <Bar height="h-[57px]" />
//         <Bar height="h-[86px]" />
//         <Bar height="h-[112px]" />
//         <Bar height="h-[143px]" />
//         <Bar height="h-[169px]" />
//         <Bar height="h-[195px]" />
//         <Bar height="h-[224px]" />
//         <Bar height="h-[252px]" />
//         <Bar height="h-[271px]" />
//         <Bar height="h-[281px]" />
//         <Bar height="h-[284px]" />
//         <Bar height="h-[284px]" />
//         <Bar height="h-[284px]" />
//       </div>

//       <div className='space-y-[9.6px]'>
//         <div className="flex">
//           <Bar height="h-[207px]" />
//           <Bar height="h-[180px]" />
//           <Bar height="h-[164px]" />
//           <Bar height="h-[164px]" />
//           <div>
//             {/* Top line */}
//             <div className='flex mb-[7.2px]'>
//                 <Bar height="h-[98px]" />
//                 <Bar height="h-[68px]" />
//                 <Bar height="h-[55px]" />
//                 <Bar height="h-[55px]" />
//                 <Bar height="h-[55px]" />
//                 <Bar height="h-[55px]" />
//                 <Bar height="h-[55px]" />
//                 <Bar height="h-[55px]" />
//                 <Bar height="h-[55px]" />
//                 <Bar height="h-[55px]" />
//                 <Bar height="h-[55px]" />
//                 <Bar height="h-[55px]" />
//                 <Bar height="h-[55px]" />
//                 <Bar height="h-[55px]" />
//                 <Bar height="h-[55px]" />
//                 <Bar height="h-[55px]" />
//                 <Bar height="h-[55px]" />
//                 <Bar height="h-[55px]" />
//                 <Bar height="h-[55px]" />
//                 <Bar height="h-[55px]" />
//                 <Bar height="h-[55px]" />
//                 <Bar height="h-[55px]" />
//                 <Bar height="h-[55px]" />
//                 <Bar height="h-[55px]" />
//                 <Bar height="h-[55px]" />
//                 <div className="flex mb-[6px] items-start">
//                     <Bar height="h-[48px]" />
//                     <Bar height="h-[22px]" />
//                     <Bar height="h-[8px]" />
//                 </div>
//             </div>
//             {/* middle line */}
//             <div className='flex items-end'>
//                 <Bar height="h-[48px]" />
//                 <Bar height="h-[48px]" />
//                 <Bar height="h-[48px]" />
//                 <Bar height="h-[48px]" />
//                 <Bar height="h-[48px]" />
//                 <Bar height="h-[48px]" />
//                 <Bar height="h-[48px]" />
//                 <Bar height="h-[48px]" />
//                 <Bar height="h-[48px]" />
//                 <Bar height="h-[48px]" />
//                 <Bar height="h-[48px]" />
//                 <Bar height="h-[48px]" />
//                 <Bar height="h-[48px]" />
//                 <Bar height="h-[48px]" />
//                 <Bar height="h-[48px]" />
//                 <Bar height="h-[48px]" />
//                 <Bar height="h-[48px]" />
//                 <Bar height="h-[48px]" />
//                 <div className="flex mb-[6px] items-start">
//                     <Bar height="h-[33px]" />
//                     <Bar height="h-[8px]" />
//                 </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom line */}
//         <div className="flex"> 
//           <Bar height="h-[53px]" />
//           <Bar height="h-[53px]" />
//           <Bar height="h-[53px]" />
//           <Bar height="h-[53px]" />
//           <Bar height="h-[53px]" />
//           <Bar height="h-[53px]" />
//           <Bar height="h-[53px]" />
//           <Bar height="h-[53px]" />
//           <Bar height="h-[53px]" />
//           <Bar height="h-[53px]" />
//           <Bar height="h-[53px]" />
//           <Bar height="h-[53px]" />
//           <Bar height="h-[53px]" />
//           <Bar height="h-[53px]" />
//           <Bar height="h-[53px]" />
//           <Bar height="h-[53px]" />
//           <Bar height="h-[53px]" />
//           <Bar height="h-[53px]" />
//           <Bar height="h-[53px]" />
//           <Bar height="h-[53px]" />
//           <Bar height="h-[53px]" />
//           <div className="flex items-start">
//             <Bar height="h-[33px]" />
//             <Bar height="h-[8px]" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }