import React from 'react'
import calendarImage from "@/assets/images/calendarImage.jpeg"
import markImage from "@/assets/images/markImage.png"

const SunnaDaysSection: React.FC = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const sunnaDays = [17, 19, 21] // Days to highlight with circles

    const calendar = [
        [25, 26, 27, 28, 29, 1, 2],
        [3, 4, 5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14, 15, 16],
        [17, 18, 19, 20, 21, 22, 23],
        [24, 25, 26, 27, 28, 29, 30],
        [1, 2, 3, 4, 5, 6, 7],
    ]

    const isCurrentMonth = (day: number) => day >= 1 && day <= 30
    const isSunnaDay = (day: number) => sunnaDays.includes(day)
    const isWeekend = (dayIndex: number) => dayIndex === 6 // Saturday

    return (
        <div className="relative w-full bg-black text-white py-16 sm:py-24 px-4 overflow-hidden">
            {/* Background Pattern */}
            <img
                src={calendarImage}
                alt="pattern"
                className="absolute inset-0 w-full h-full object-cover opacity-10"
            />

            <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
                {/* Title Section */}
                <div className="space-y-4">
                    <h2 className="text-wxl sm:text-5xl lg:text-8xl font-bold text-primary-red -tracking-[0.05em]">
                        Sunnah Days
                    </h2>
                    <p className="text-base text-white sm:text-xl lg:text-2xl max-w-xl mx-auto -tracking-[0.05em]">
                        Lorem ipsum dolor sit amet consectetur. Tristique eget mattis at egestas non platea mattis faucibus.
                    </p>
                </div>

                {/* Calendar */}
                <div className="inline-block">
                    {/* Days Header */}
                    <div className="grid grid-cols-7 gap-4 mb-4">
                        {days.map((day, index) => (
                            <div
                                key={day}
                                className={`text-lg sm:text-xl ${isWeekend(index) ? 'text-primary-red' : 'text-white'}`}
                            >
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-4">
                        {calendar.map((week, weekIndex) => (
                            <React.Fragment key={weekIndex}>
                                {week.map((day, dayIndex) => (
                                    <div
                                        key={`${weekIndex}-${dayIndex}`}
                                        className={`
                                            text-2xl sm:text-3xl relative
                                            ${!isCurrentMonth(day) ? 'text-gray-600' : ''}
                                            ${isWeekend(dayIndex) && isCurrentMonth(day) ? 'text-primary-red' : ''}
                                            ${isSunnaDay(day) ? 'font-bold' : ''}
                                        `}
                                    >
                                        {day}
                                        {isSunnaDay(day) && (
                                            <img
                                                src={markImage}
                                                alt="highlight"
                                                className="absolute w-[60px] h-[60px] object-fill"
                                            />
                                        )}
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SunnaDaysSection