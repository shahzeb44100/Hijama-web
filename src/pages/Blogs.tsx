import React from 'react'
import GetInTouchSection from '@/components/GetInTouchSection'
import BlogsFilter from '@/components/BlogsFilter'
import BlogCard from '@/components/BlogCard'
import blogsImage from "@/assets/images/blogsImage.jpg"
import blog1 from "@/assets/images/blog1.png"

const Blogs: React.FC = () => {
    const [loading, setLoading] = React.useState(true)
    const [activeFilter, setActiveFilter] = React.useState('All')

    // Memoize the blog posts data
    const blogPosts = React.useMemo(() => [
        {
            category: 'Hijama',
            title: 'Lorem ipsum dolor sit amet consectetur. Orci quam cum lobortis eget mi nunc id.',
            image: blog1
        },
        {
            category: 'Ruqyah',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            image: blog1
        },
        {
            category: 'Ruqyah',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            image: blog1
        },
        {
            category: 'Life Coaching',
            title: 'Lorem ipsum dolor sit amet consectetur.',
            image: blog1
        }
    ], []) // Empty dependency array since data is static

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    const filteredPosts = React.useMemo(() => {
        if (activeFilter === 'All') return blogPosts
        return blogPosts.filter(post =>
            post.category.toLowerCase() === activeFilter.toLowerCase()
        )
    }, [activeFilter, blogPosts]) // Now blogPosts is memoized, so this is safe

    return (
        <div className="flex flex-col items-center justify-center">
            {/* Hero Section */}
            <GetInTouchSection
                imageUrl={blogsImage}
                title="BLOGS"
            />

            {/* Blogs Content */}
            <div className="w-full bg-white">
                <BlogsFilter
                    activeFilter={activeFilter}
                    onFilterChange={setActiveFilter}
                />
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {loading ? (
                            // Skeleton loading
                            Array(6).fill(null).map((_, index) => (
                                <BlogCard
                                    key={index}
                                    category=""
                                    title=""
                                    loading={true}
                                />
                            ))
                        ) : (
                            // Filtered blog posts
                            filteredPosts.map((post, index) => (
                                <BlogCard
                                    key={index}
                                    category={post.category}
                                    title={post.title}
                                    image={post.image}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs 