import { cn } from "@/lib/utils"

interface HamburgerMenuProps {
    isOpen: boolean
    onClick: () => void
    className?: string
}

const HamburgerMenu = ({ isOpen, onClick, className }: HamburgerMenuProps) => {
    return (
        <button
            className={cn("flex flex-col justify-center items-center w-8 h-8 relative", className)}
            onClick={onClick}
            aria-label={isOpen ? "Close menu" : "Open menu"}
        >
            <span
                className={cn(
                    "absolute w-6 h-0.5 bg-current transition-all duration-300 ease-in-out",
                    isOpen ? "rotate-45" : "translate-y-[-8px]"
                )}
            />
            <span
                className={cn(
                    "absolute w-6 h-0.5 bg-current transition-all duration-300 ease-in-out",
                    isOpen ? "opacity-0" : "translate-y-0"
                )}
            />
            <span
                className={cn(
                    "absolute w-6 h-0.5 bg-current transition-all duration-300 ease-in-out",
                    isOpen ? "-rotate-45" : "translate-y-[8px]"
                )}
            />
        </button>
    )
}

export default HamburgerMenu 