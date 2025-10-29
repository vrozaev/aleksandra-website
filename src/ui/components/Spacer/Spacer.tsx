import React from "react";

type SpacerProps = {
    size: 'm';
};

const sizeMapping = {
    'm': '40px',
} as const;

export const Spacer: React.FC<SpacerProps> = ({size}) => {
    return (
        <div style={{
            height: sizeMapping[size]
        }}></div>
    )
};