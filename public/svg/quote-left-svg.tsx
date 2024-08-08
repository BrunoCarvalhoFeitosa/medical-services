"use client"

interface QuoteLeftSvgProps {
    width: string
    height: string
}

export const QuoteLeftSvg = ({ width, height }: QuoteLeftSvgProps) => {
    return (
        <svg
            viewBox="0 0 43 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
        >
            <path
                d="M15.4173 0.291992L9.33399 12.4587H18.459V30.7087H0.208984V12.4587L6.29232 0.291992H15.4173ZM39.7507 0.291992L33.6673 12.4587H42.7923V30.7087H24.5423V12.4587L30.6257 0.291992H39.7507Z"
                fill="#90C6CD"
            />
        </svg>
    )
}