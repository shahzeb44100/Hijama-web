import React from 'react'

interface BlogsFilterProps {
    activeFilter: string
    onFilterChange: (filter: string) => void
}

const BlogsFilter: React.FC<BlogsFilterProps> = ({ activeFilter, onFilterChange }) => {
    const filterItems = ['All', 'Hijama', 'Ruqyah', 'Life Coaching']

    return (
        <div className="w-full bg-white py-6">
            <div className="max-w-6xl mx-auto">
                <ul className="flex justify-center space-x-12 sm:space-x-24">
                    {filterItems.map((item) => (
                        <li key={item}>
                            <button
                                onClick={() => onFilterChange(item)}
                                className={`text-sm sm:text-xl font-medium transition-colors
                                    ${activeFilter === item
                                        ? 'text-primary-red'
                                        : 'text-dark-gray hover:text-primary-red'
                                    }`}
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default BlogsFilter 