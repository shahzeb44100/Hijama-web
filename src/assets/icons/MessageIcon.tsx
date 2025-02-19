
const MessageIcon = ({ className }: { className?: string }) => {
    return (
        <svg className={className} width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3.5C0 1.575 1.62 0 3.6 0H32.4C34.38 0 36 1.575 36 3.5V24.5C36 26.425 34.38 28 32.4 28H3.6C1.62 28 0 26.425 0 24.5V3.5ZM3.6 3.5L18 12.25L32.4 3.5H3.6ZM3.6 24.5H32.4V7L18 15.75L3.6 7V24.5Z" fill="white" />
        </svg>
    )
}

export default MessageIcon