import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Ruqyah from '../pages/Ruqyah'
import Hijama from '../pages/Hijama'
import Blogs from '../pages/Blogs'
import ContactUs from '../pages/ContactUs'

export const RouterProvider = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="Ruqyah" element={<Ruqyah />} />
                    <Route path="hijama" element={<Hijama />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<ContactUs />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
} 