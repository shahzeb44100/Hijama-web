interface TopRightQuotationIconProps {
    color?: string;
}

const TopRightQuotationIcon = ({ color = "#6D7880" }: TopRightQuotationIconProps) => {
    return (
        <svg width="155" height="213" viewBox="0 0 155 213" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0626 212.988C15.0626 206.444 14.5416 200.961 15.2994 195.666C15.6191 193.414 18.2595 190.997 20.4263 189.641C30.9288 183.002 42.3312 177.696 52.1233 170.079C83.8083 145.41 102.587 112.936 103.617 70.746C103.902 58.7775 99.4732 55.7706 89.3852 60.4519C60.2221 73.9179 28.8568 66.0175 12.1262 40.9957C-6.11995 13.6863 -3.55058 -22.679 18.3187 -46.5217C46.2385 -76.9676 92.2032 -77.8874 123.9 -48.7857C142.88 -31.3577 151.903 -8.85926 154.152 16.7403C161.695 102.477 118.513 173.156 39.9039 204.203C32.1247 207.269 24.1561 209.793 15.0626 212.988Z" fill={color} />
        </svg>
    )
}

export default TopRightQuotationIcon