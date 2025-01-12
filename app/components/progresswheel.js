import React from 'react';
export function ProgressWheel({ progress }) {

    const radius = 70; 
    const strokeWidth = 10; 
    const circumference = 2 * Math.PI * radius; 
    const offset = circumference - (progress / 100) * circumference; 

    return (
        <svg
            width="160"
            height="160"
        >
            <circle
                cx="80"
                cy="80"
                r={radius}
                stroke="#e0e0e0"
                strokeWidth={strokeWidth}
                fill="none"
            />
            <circle
                cx="80"
                cy="80"
                r={radius}
                stroke="#4caf50"
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                transform="rotate(-90 80 80)"
            />
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy="0.3em"
                fontSize="18"
                fill="#333"
            >
                {Math.round(progress)}%
            </text>
        </svg>
    );
};


