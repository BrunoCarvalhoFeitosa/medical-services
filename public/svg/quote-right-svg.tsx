"use client"

interface QuoteRightSvgProps {
    width: string
    height: string
}

export const QuoteRightSvg = ({ width, height }: QuoteRightSvgProps) => {
    return (
        <svg
            viewBox="0 0 43 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
        >
            <path
                d="M27.584 30.7087H36.709L42.7923 18.542V0.291992H24.5423V18.542H33.6673M3.25065 30.7087H12.3757L18.459 18.542V0.291992H0.208984V18.542H9.33398L3.25065 30.7087Z"
                fill="#90C6CD"
            />
        </svg>
    )
}