interface ArrowBackIconProps {
    color?: string;
    width?: string;
    height?: string;
}

const ArrowBackIcon = ({ color = "#3D4C52", width = "84", height = "116" }: ArrowBackIconProps) => {
    return (
        <svg width={width} height={height} viewBox={`0 0 65 116`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M65 106.52L55.3328 116L2.67829 64.3322C1.82952 63.5043 1.15593 62.5198 0.696284 61.4353C0.236634 60.3509 0 59.188 0 58.0134C0 56.8389 0.236634 55.6759 0.696284 54.5915C1.15593 53.5071 1.82952 52.5226 2.67829 51.6947L55.3328 0L64.9909 9.48034L15.5709 58L65 106.52Z" fill={color} />
        </svg>
    )
}

export default ArrowBackIcon