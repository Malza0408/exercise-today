import React from "react";

export default function Traps({ fill, onClick }) {
  return (
    <svg
      style={{
        fill: fill === undefined ? "#cdcccc" : fill,
        fillOpacity: 1,
        stroke: "gray",
        strokeMiterlimit: "1",
        cursor: "pointer",
        opacity: fill === undefined ? 0 : 1,
      }}
      onClick={onClick}
    >
      <g>
        <path
          className="pt69"
          d="M142.9,49.6c6.4,2,11.6-2.7,11.9-6.4C150.7,45.2,146.9,47.4,142.9,49.6z"
        />
        <path
          className="pt120"
          d="M159,51c-1-2.1-1.8-3.5-2.7-5.3c-0.6,1.7-1,2.9-1.5,4.5C156.2,50.4,157.6,50.6,159,51z"
        />
        <path
          className="pt117"
          d="M174.6,50.2c-0.7-1.8-1.1-3-1.7-4.6c-0.8,1.7-1.4,3.2-2.3,5.3C171.9,50.6,173.2,50.4,174.6,50.2z"
        />
        <path
          className="pt68"
          d="M174.4,43.1c1.1,4.8,5.8,7.8,10.7,6.8c0.4-0.1,0.8-0.2,1.2-0.4C182.3,47.2,178.5,45.2,174.4,43.1z"
        />
      </g>
      <g>
        <path
          className="bt18"
          d="M317.8,49.2c3.7,1.1,7.6,2.3,11.6,3.5c3.5,1.1,4,0.8,4.3-2.7c0.1-0.7,0.2-1.4,0.3-2.1
	c1.3-6.4,2.3-12.8,1.8-19.4c-0.3-1-0.6-2-1.1-2.9c-0.3,0.1-0.5,0.2-0.8,0.3c0.1,0.9,0.3,1.8,0.4,2.8c0.3,4.5-1.7,8.8-5.2,11.6
	C325.1,43.3,321.2,46.3,317.8,49.2z"
        />
        <path
          className="bt17"
          d="M339.7,25.7c-0.4,0-0.8-0.1-1.2-0.1c-0.3,1-1,2.1-0.9,3.1c0.6,7.1,1.3,14.2,2,21.3c0.3,3.3,0.7,3.8,4,2.7
	c4.2-1.2,8.2-2.5,12.1-3.8c-2.3-1.8-5.1-3.9-7.8-6C342.2,38.7,337.9,33.7,339.7,25.7z"
        />
        <path
          className="bt5"
          d="M306.7,51.9c0,0.2-0.1,0.5-0.1,0.7c6.6,0,10.1,3.8,12.6,9.3c2.8,6.5,6.3,12.7,11.7,17.4
	c0.8,0.7,1.7,1.3,2.9,2.2c0.3-0.8,0.5-1.6,0.6-2.5c-0.1-6.3-0.3-12.5-0.6-18.8c0.1-2.9-1.9-5.5-4.8-6.1c-5.1-1.3-10.1-2.7-15.3-3.7
	C311.7,50.6,309.2,51.6,306.7,51.9z"
        />
        <path
          className="bt6"
          d="M366.8,52.5c-0.4-0.3-0.9-0.5-1.4-0.7c-7.8-2.2-14.9,0.5-22,3c-2.4,0.7-4,3-3.9,5.5
	c-0.2,6.3-0.4,12.5-0.5,18.8c0.1,0.9,0.2,1.7,0.4,2.6c0.8-0.4,1.6-1,2.3-1.6c2.7-2.7,5.2-5.7,7.4-8.8c2.4-3.9,4.5-7.9,6.4-12.1
	c1.4-3.2,4.2-5.4,7.6-6.1C364.4,53,365.6,52.8,366.8,52.5z"
        />
      </g>
    </svg>
  );
}
