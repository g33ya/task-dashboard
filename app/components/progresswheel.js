import React from 'react';
export function ProgressWheel({ progress }) {

    const radius = 50; 
    const strokeWidth = 10; 
    const circumference = 2 * Math.PI * radius; 
    const offset = circumference - (progress / 100) * circumference; 

    return (
        <svg
            width="120"
            height="120"
        >
            <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="#e0e0e0"
                strokeWidth={strokeWidth}
                fill="none"
            />
            <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="#4caf50"
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                transform="rotate(-90 60 60)"
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


