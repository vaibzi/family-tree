export const CustomNode = ({ nodeDatum, toggleNode, onNameClick }: any) => {
  return (
    <g>
      {/* Circle: keep default toggle behavior */}
      <circle r={15} fill="steelblue" onClick={toggleNode} />

      {/* Name text: ONLY this opens dialog */}
      <text
        x={25}
        y={5}
        style={{ cursor: "pointer", fill: "black" }}
        onClick={() => onNameClick(nodeDatum)}
      >
        {nodeDatum.name}
      </text>
    </g>
  );
};
