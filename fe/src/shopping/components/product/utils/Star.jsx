import { validate } from "graphql";
import React from "react";

const Star = React.memo(({ value }) => {
  const round = Math.floor(value);
  console.log(round);
  let stars = Array.from({ length: round }, (_, index) => (
    <Handle key={`full-${index}`} percentage={100} />
  ));
  if (round !== value) {
    stars.push(<Handle key={`half`} percentage={(value - round) * 100} />);
    for (let i = 0; i < parseInt(5 - value); i += 1) {
      stars.push(<Handle key={`none - i`} percentage={0} />);
    }
  }

  return <>{stars}</>;
});

const Handle = React.memo(({ percentage }) => {
  const svgWidth = 24; // Chiều rộng tổng thể của SVG
  const rectWidth = (svgWidth * percentage) / 100; // Chiều rộng của vùng tô màu vàng

  // Tạo ID duy nhất cho clipPath
  const clipPathId = `star-clip-${Math.random()}`;

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id={clipPathId}>
          <rect x="0" y="0" width={rectWidth} height="24" />
        </clipPath>
      </defs>
      <polygon
        points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"
        fill="#ff5300"
        stroke="#ff5300"
        strokeWidth="1"
        clipPath={`url(#${clipPathId})`}
      />
      <polygon
        points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"
        fill="none"
        stroke="#ff5300"
        strokeWidth="1"
      />
    </svg>
  );
});

export default Star;
