"use client";

import React from "react";

interface PentagonChartProps {
  // 各パラメータの値（0〜100）
  clickSpeed: number;
  judgment: number;
  accuracy: number;
  reaction: number;
  robotness: number;
  size?: number;
}

const PentagonChart: React.FC<PentagonChartProps> = ({
  clickSpeed,
  judgment,
  accuracy,
  reaction,
  robotness,
  size = 280,
}) => {
  const center = size / 2;
  const maxRadius = size * 0.4;
  const labelOffset = size * 0.48;

  // 5つのパラメータ
  const params = [
    { label: "クリック速度", value: clickSpeed },
    { label: "判断力", value: judgment },
    { label: "正確さ", value: accuracy },
    { label: "反応速度", value: reaction },
    { label: "ロボット性", value: robotness },
  ];

  // 頂点の角度を計算（上から時計回り、-90度から開始）
  const getPoint = (index: number, radius: number) => {
    const angle = (Math.PI * 2 * index) / 5 - Math.PI / 2;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  };

  // 背景の五角形（グリッド）を生成
  const createPentagonPath = (radius: number) => {
    const points = [];
    for (let i = 0; i < 5; i++) {
      const point = getPoint(i, radius);
      points.push(`${point.x},${point.y}`);
    }
    return `M ${points.join(" L ")} Z`;
  };

  // データの五角形を生成
  const createDataPath = () => {
    const points = params.map((param, index) => {
      const radius = (param.value / 100) * maxRadius;
      return getPoint(index, radius);
    });
    return `M ${points.map((p) => `${p.x},${p.y}`).join(" L ")} Z`;
  };

  // グリッドの線（中心から頂点へ）
  const createGridLines = () => {
    const lines = [];
    for (let i = 0; i < 5; i++) {
      const point = getPoint(i, maxRadius);
      lines.push(
        <line
          key={`line-${i}`}
          x1={center}
          y1={center}
          x2={point.x}
          y2={point.y}
          stroke="#a0aec0"
          strokeWidth="1"
          opacity="0.5"
        />
      );
    }
    return lines;
  };

  // ラベルの位置
  const getLabelPosition = (index: number) => {
    const angle = (Math.PI * 2 * index) / 5 - Math.PI / 2;
    return {
      x: center + labelOffset * Math.cos(angle),
      y: center + labelOffset * Math.sin(angle),
    };
  };

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* 背景グリッド */}
        {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => (
          <path
            key={`grid-${i}`}
            d={createPentagonPath(maxRadius * scale)}
            fill="none"
            stroke="#cbd5e0"
            strokeWidth="1"
            opacity="0.6"
          />
        ))}

        {/* 中心からの線 */}
        {createGridLines()}

        {/* データ五角形 */}
        <path
          d={createDataPath()}
          fill="rgba(66, 153, 225, 0.4)"
          stroke="#3182ce"
          strokeWidth="2"
        />

        {/* データ点 */}
        {params.map((param, index) => {
          const radius = (param.value / 100) * maxRadius;
          const point = getPoint(index, radius);
          return (
            <circle
              key={`point-${index}`}
              cx={point.x}
              cy={point.y}
              r="6"
              fill="#3182ce"
              stroke="white"
              strokeWidth="2"
            />
          );
        })}

        {/* ラベル */}
        {params.map((param, index) => {
          const pos = getLabelPosition(index);
          return (
            <text
              key={`label-${index}`}
              x={pos.x}
              y={pos.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-xs font-medium fill-gray-700"
              style={{ fontSize: "12px" }}
            >
              {param.label}
            </text>
          );
        })}
      </svg>

      {/* 数値表示 */}
      <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-600">
        {params.map((param, index) => (
          <div key={index} className="flex justify-between gap-2">
            <span className="font-medium">{param.label}:</span>
            <span className="text-blue-600 font-bold">{param.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PentagonChart;
