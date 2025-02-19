import { useState } from "react"
import logo from "@/assets/images/logo.png"
import { Link, useLocation } from "react-router-dom"
import HamburgerMenu from "@/components/ui/HamburgerMenu"
import { AnimatePresence, motion } from "framer-motion"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Ruqyah", href: "/Ruqyah" },
  { name: "Hijama", href: "/hijama" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="w-full fixed z-50 border-b border-slate-200 bg-white py-2 sm:py-6">
      <div className="mx-6 lg:mx-108">
        <div className="flex items-center justify-between px-6 sm:px-0">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={logo}
                alt="Rewired Logo"
                className="h-68 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center lg:space-x-8 space-x-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-xl transition-colors hover:text-primary-red ${isActive
                    ? "text-primary-red font-bold"
                    : "text-dark-gray font-medium"
                    }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Get in touch button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="rounded-md border-2 border-primary-red px-6 py-2 text-base font-medium text-primary-red transition-colors hover:bg-primary-red hover:text-white"
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <HamburgerMenu
              isOpen={isMenuOpen}
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.3
            }}
            className="fixed inset-0 z-50 bg-primary-red text-white flex flex-col items-center"
          >
            {/* Close Button */}
            <HamburgerMenu
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-12 text-white"
            />

            {/* Logo with fade in animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-[102px] flex flex-row items-center justify-center gap-2"
            >
              <img src={logo} alt="Rewired Logo"
                className="h-[72px] w-24"
              />
              <div className="flex flex-col">
                <h3 className="text-3xl font-bold">Rewired</h3>
                <p className="text-sm font-normal">Ruqyah & Hijama Centre</p>
              </div>
            </motion.div>

            {/* Menu Title with fade in */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-40 font-bold text-[#FFF8EF]"
            >
              Menu
            </motion.h2>

            {/* Navigation Links with stagger effect */}
            <motion.div
              className="mt-4 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {navigation.map((item, index) => {
                const isActive = location.pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block w-full py-3 text-center text-lg border-b border-white ${isActive ? "text-white font-bold" : "text-gray-200"
                        }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

