import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Leaf, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Link, useLocation } from "react-router-dom";
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
    const location = useLocation();
    const navLinks = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
        { label: "Services", path: "/services" },
        { label: "Doctors", path: "/doctors" },
    ];
    return <motion.header
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-teal-100"
        style={{ opacity: headerOpacity }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="bg-teal-100 p-2 rounded-lg">
                        <Leaf className="h-6 w-6 text-teal-600" />
                    </div>
                    <span className="text-xl font-bold text-foreground">Jaihind Clinic</span>
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">

                    {navLinks.map((item) => {
                        const isActive = location.pathname === item.path;

                        return (
                            <motion.div key={item.path} whileHover={{ y: -2 }}>
                                <Link
                                    to={item.path}
                                    className={`text-sm font-medium transition-colors ${isActive
                                            ? "text-teal-600"
                                            : "text-muted-foreground hover:text-teal-600"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </motion.div>
                        );
                    })}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Button variant="outline" size="sm" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                        <Phone className="mr-2 h-4 w-4" />
                        Emergency: 911
                    </Button>
                    <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                        <Calendar className="mr-2 h-4 w-4" />
                        Book Appointment
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
            </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <motion.div
                className="md:hidden border-t border-teal-100 bg-background"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
            >
                <div className="px-4 py-4 space-y-3">
                    {["Home", "Services", "Doctors", "About", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="block text-sm font-medium text-muted-foreground hover:text-teal-600"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <div className="pt-4 space-y-2">
                        <Button variant="outline" className="w-full border-teal-200 text-teal-700 hover:bg-teal-50">
                            <Phone className="mr-2 h-4 w-4" />
                            Emergency: 911
                        </Button>
                        <Button className="w-full bg-teal-600 hover:bg-teal-700">
                            <Calendar className="mr-2 h-4 w-4" />
                            Book Appointment
                        </Button>
                    </div>
                </div>
            </motion.div>
        )}
    </motion.header>
}