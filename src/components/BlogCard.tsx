import React from 'react'
import { Link } from 'react-router-dom'

interface BlogCardProps {
    category: string
    title: string
    image?: string
    loading?: boolean
}

const BlogCard: React.FC<BlogCardProps> = ({ category, title, image, loading = false }) => {
    if (loading) {
        return (
            <div className="flex flex-col space-y-4">
                {/* Skeleton Image */}
                <div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg"></div>
                {/* Skeleton Category */}
                <div className="w-20 h-6 bg-gray-200 animate-pulse rounded-full"></div>
                {/* Skeleton Title */}
                <div className="w-full h-8 bg-gray-200 animate-pulse rounded"></div>
                {/* Skeleton Link */}
                <div className="w-32 h-6 bg-gray-200 animate-pulse rounded"></div>
            </div>
        )
    }

    return (
        <div className="flex flex-col space-y-4">
            <div className="w-full h-64 rounded-lg overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <span className={`
                px-4 py-1 rounded-full text-sm font-medium w-fit
                ${category.toLowerCase() === 'hijama' ? 'bg-pink-100 text-primary-red' : ''}
                ${category.toLowerCase() === 'Ruqyah' ? 'bg-green-100 text-green-600' : ''}
                ${category.toLowerCase() === 'life coaching' ? 'bg-blue-100 text-blue-600' : ''}
            `}>
                {category}
            </span>
            <h3 className="text-xl font-bold text-dark-gray">
                {title}
            </h3>
            <Link
                to="#"
                className="flex items-center text-dark-gray hover:text-primary-red transition-colors"
            >
                <span className="mr-2">See the article</span>
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Link>
        </div>
    )
}

export default BlogCard 