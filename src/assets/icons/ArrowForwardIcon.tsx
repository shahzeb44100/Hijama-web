interface ArrowForwardIconProps {
    color?: string;
    width?: string;
    height?: string;
}

const ArrowForwardIcon = ({ color = "#3D4C52", width = "65", height = "116" }: ArrowForwardIconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 65 116" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 9.48033L9.66715 0L62.3217 51.6678C63.1705 52.4957 63.8441 53.4802 64.3037 54.5647C64.7634 55.6491 65 56.812 65 57.9866C65 59.1611 64.7634 60.3241 64.3037 61.4085C63.8441 62.4929 63.1705 63.4774 62.3217 64.3053L9.66715 116L0.0091095 106.52L49.4291 58L0 9.48033Z" fill={color} />
        </svg>
    )
}

export default ArrowForwardIcon