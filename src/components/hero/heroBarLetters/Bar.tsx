import { useState, useEffect, useRef } from 'react';
import { getRandomNumber } from '../../../Utils/functions';

interface Props {
  height: string;
}

/**
 * A React component representing a vertical bar that dynamically responds to mouse movements.
 * The bar moves up or down based on the proximity of the mouse pointer to its edges.
 *
 * The movement intensity is calculated by determining the closest distance from the mouse
 * to any edge of the bar, with movement starting when the mouse is within a defined threshold distance.
 * The bar's movement is capped by a maximum distance (`moveDistance`).
 *
 * Upon the mouse leaving the window, the bar resets its position with a slight delay.
 *
 * @param {string} height - The height of the bar, passed as a CSS value.
 * @returns {JSX.Element} The bar component.
 */
export default function Bar({
  height,
}: React.PropsWithChildren<Props>): JSX.Element {
  const [transform, setTransform] = useState('translateY(0)');
  const barRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [moveDistance] = useState(getRandomNumber(35, 75));

  const scale = 0.4;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (barRef.current) {
        const barRect = barRef.current.getBoundingClientRect();

        // Calculate distances to each edge
        const distanceToLeftEdge = Math.abs(e.clientX - barRect.left);
        const distanceToRightEdge = Math.abs(e.clientX - barRect.right);
        const distanceToTopEdge = Math.abs(e.clientY - barRect.top);
        const distanceToBottomEdge = Math.abs(e.clientY - barRect.bottom);

        // Find the minimum distance to any edge
        const distanceX = Math.min(distanceToLeftEdge, distanceToRightEdge);
        const distanceY = Math.min(distanceToTopEdge, distanceToBottomEdge);

        // Use the minimum distance between X and Y
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        const maxDistance = 130; // Max distance for effect to apply //TODO: 150 on larger screens, 130ish on smaller screens
        const threshold = 40; // Minimum distance for movement to start //TODO: 50 on larger screens, 40ish on smaller screens
        const intensity = Math.max(
          0,
          (maxDistance - distance) / (maxDistance - threshold)
        );

        // Adjust sensitivity factor
        const sensitivityFactor = 2 * scale; // Decrease to reduce sensitivity
        const translateY = intensity * moveDistance * sensitivityFactor;

        setTransform(`translateY(${translateY}px)`);

        // Clear any existing timeout to prevent premature reset
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
    };

    const handleMouseLeave = () => {
      // Delay before resetting the transform
      timeoutRef.current = setTimeout(() => {
        setTransform('translateY(0)');
      }, 400);
    };

    // Detect mouse movement and handle bar reset
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [moveDistance]);

  return (
    <div
      ref={barRef}
      className={`bg-white ${height} w-[1px] mr-[1px] rounded-md`}
      style={{
        transform,
        transition: 'transform 0.1s',
      }}
    />
  );
}
