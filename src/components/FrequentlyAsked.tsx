import React, { useState } from 'react'
import frequentlyAskedImage from "@/assets/images/frequentlyasked.png"
import { ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// FAQ data
const faqs = [
    {
        id: 1,
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?"
    },
    {
        id: 2,
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?"
    },
    {
        id: 3,
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?"
    },
    {
        id: 4,
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?"
    },
    {
        id: 5,
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?"
    },
    {
        id: 6,
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?"
    },
    {
        id: 7,
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?"
    },
]

const FrequentlyAsked: React.FC = () => {
    const [activeId, setActiveId] = useState<number | null>(null)
    const [hoveredId, setHoveredId] = useState<number | null>(null)

    const isActive = (id: number) => activeId === id || hoveredId === id

    return (
        <div className="relative w-[calc(100%-5.5rem)] sm:w-full h-full mx-11 my-11 sm:m-0 rounded-xl sm:rounded-none">
            {/* Background Image with darker white overlay */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-xl sm:rounded-none bg-white"
                style={{
                    backgroundImage: `url(${frequentlyAskedImage})`,
                    backgroundColor: '#FFFFFF66'  // Changed from 8A to 66 (about 40% opacity) for darker effect
                }}
            />

            {/* Content */}
            <div className="relative z-10 w-full h-full flex flex-col items-center pt-20 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-xs sm:text-2xl font-medium sm:font-normal text-primary-red mb-2 leading-[15px] sm:leading-normal tracking-[-0.03em]">
                        Frequently Asked
                    </h2>
                    <h1 className="text-[36px] sm:text-6xl font-bold text-primary-red tracking-[-0.03em] leading-[45px] sm:leading-normal">
                        FAQs
                    </h1>
                </div>

                {/* FAQ List */}
                <div className="max-w-full sm:max-w-4xl w-full space-y-4 p-4 sm:p-6 lg:p-8">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className={`overflow-hidden rounded-lg ${isActive(faq.id) ? 'bg-transparent shadow-none' : 'bg-white shadow-md'}`}
                            onMouseEnter={() => setHoveredId(faq.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <button
                                className={`w-full px-4 py-[10px] text-left flex items-center justify-between transition-all duration-300 rounded-lg
                                    ${isActive(faq.id)
                                        ? 'bg-primary-red text-white'
                                        : 'text-dark-gray hover:bg-primary-red hover:text-white'
                                    }`}
                                onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                            >
                                <span className="text-xs sm:text-2xl font-bold leading-[14.63px] sm:leading-normal text-inherit">
                                    {faq.question}
                                </span>
                                <ChevronRight
                                    className={`w-5 h-5 transition-transform duration-300 ${isActive(faq.id) ? 'rotate-90 text-white' : 'text-inherit'}`}
                                />
                            </button>
                            <AnimatePresence>
                                {isActive(faq.id) && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-4 py-2">
                                            <p className="text-gray-600">{faq.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FrequentlyAsked