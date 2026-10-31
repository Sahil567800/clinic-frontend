import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Calendar, 
  Clock, 
  Heart, 
  MapPin, 
  Phone, 
  Shield, 
  Star, 
  Stethoscope, 
  Users, 
  Activity,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Ambulance,
  Microscope,
  Baby,
  Eye,
  Bone,
  Brain,
  Leaf,
  Droplets,
  Sun,
  Moon,
  Flower2,
  Sparkles,
  HandHeart,
  Home
} from "lucide-react";
import { useState } from "react";


// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
};

export default function JaihindClinicHomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  const services = [
    {
      icon: <Leaf className="h-8 w-8 text-teal-500" />,
      title: "Chronic Diseases",
      description: "Natural treatment for long-term conditions like arthritis, asthma, and skin disorders.",
      color: "bg-teal-50"
    },
    {
      icon: <Droplets className="h-8 w-8 text-teal-600" />,
      title: "Pediatric Care",
      description: "Gentle and safe homeopathic treatments for infants, children, and adolescents.",
      color: "bg-teal-50"
    },
    {
      icon: <Sun className="h-8 w-8 text-teal-500" />,
      title: "Skin & Hair",
      description: "Holistic solutions for acne, eczema, psoriasis, hair fall, and other dermatological issues.",
      color: "bg-teal-50"
    },
    {
      icon: <Moon className="h-8 w-8 text-teal-600" />,
      title: "Sleep Disorders",
      description: "Natural remedies for insomnia, anxiety, stress, and sleep-related problems.",
      color: "bg-teal-50"
    },
    {
      icon: <Flower2 className="h-8 w-8 text-teal-500" />,
      title: "Women's Health",
      description: "Specialized care for hormonal imbalances, PCOS, menopause, and menstrual issues.",
      color: "bg-teal-50"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-teal-600" />,
      title: "Immunity Boost",
      description: "Strengthen your immune system with constitutional homeopathic treatment.",
      color: "bg-teal-50"
    }
  ];

  const stats = [
    { icon: <Users className="h-6 w-6 text-teal-500" />, value: "30K+", label: "Happy Patients" },
    { icon: <Stethoscope className="h-6 w-6 text-teal-500" />, value: "15+", label: "Expert Doctors" },
    { icon: <Activity className="h-6 w-6 text-teal-500" />, value: "20+", label: "Years Experience" },
    { icon: <Shield className="h-6 w-6 text-teal-500" />, value: "98%", label: "Success Rate" }
  ];

  const doctors = [
    {
      name: "Dr. Priya Sharma",
      role: "Chief Homeopath",
      image: "/doctors/doctor-1.jpg",
      rating: 4.9,
      reviews: 324
    },
    {
      name: "Dr. Rajesh Patel",
      role: "Pediatric Specialist",
      image: "/doctors/doctor-2.jpg",
      rating: 4.8,
      reviews: 256
    },
    {
      name: "Dr. Anjali Desai",
      role: "Skin Specialist",
      image: "/doctors/doctor-3.jpg",
      rating: 5.0,
      reviews: 412
    },
    {
      name: "Dr. Vikram Mehta",
      role: "Chronic Care",
      image: "/doctors/doctor-4.jpg",
      rating: 4.9,
      reviews: 198
    }
  ];

  const testimonials = [
    {
      name: "Sunita Agarwal",
      role: "Arthritis Patient",
      content: "After years of allopathic treatment, homeopathy at Jaihind Clinic gave me relief from arthritis pain. The doctors are very caring and understanding.",
      rating: 5
    },
    {
      name: "Rahul Verma",
      role: "Father of Two",
      content: "My kids love visiting Dr. Rajesh. No more fear of medicines! Their immunity has improved significantly with homeopathic treatment.",
      rating: 5
    },
    {
      name: "Meera Krishnan",
      role: "Skin Patient",
      content: "My chronic eczema completely healed with Dr. Anjali's treatment. The holistic approach addresses root causes, not just symptoms.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.header 
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
              {["Home", "Services", "Doctors", "About", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-muted-foreground hover:text-teal-600 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
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

      {/* Hero Section */}
      <section id="home" className="relative pt-16 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-background to-background" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-teal-100 text-teal-700 hover:bg-teal-200">
                <Leaf className="mr-1 h-3 w-3" />
                Natural Healing Since 2005
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Natural Healing,{" "}
                <span className="text-teal-600">Lasting Wellness</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Discover the power of homeopathy at Jaihind Clinic. We treat the root cause 
                of your ailments with gentle, safe, and effective natural remedies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group bg-teal-600 hover:bg-teal-700">
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </div>
              
              <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-teal-100 border-2 border-background flex items-center justify-center text-xs font-medium text-teal-700">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p>Trusted by 30,000+ patients</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Leaf className="h-24 w-24 text-teal-400 mx-auto mb-4" />
                    <p className="text-muted-foreground">Natural Healing Center</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-background rounded-lg shadow-lg p-4 border border-teal-100"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">100% Natural</p>
                    <p className="text-xs text-muted-foreground">No Side Effects</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -top-6 -right-6 bg-background rounded-lg shadow-lg p-4 border border-teal-100"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <Clock className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Quick Relief</p>
                    <p className="text-xs text-muted-foreground">Fast Recovery</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center text-center"
                variants={fadeInUp}
              >
                <div className="bg-background p-3 rounded-full shadow-sm mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-teal-100 text-teal-700 hover:bg-teal-200">Our Treatments</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Holistic Healing Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              We offer specialized homeopathic treatments for various conditions, 
              focusing on treating the individual as a whole.
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg hover:border-teal-200 transition-all cursor-pointer group">
                  <CardHeader>
                    <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-teal-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-teal-100 text-teal-700 hover:bg-teal-200">Why Choose Us</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                The Homeopathic Advantage
              </h2>
              <p className="text-muted-foreground mb-6">
                Homeopathy offers a unique approach to healing that treats the whole person 
                rather than just symptoms. At Jaihind Clinic, we combine traditional 
                homeopathic wisdom with modern diagnostic approaches.
              </p>
              <ul className="space-y-4">
                {[
                  "No side effects or drug dependencies",
                  "Treats root cause, not just symptoms",
                  "Safe for all ages including infants",
                  "Boosts natural immunity",
                  "Personalized treatment plans",
                  "Complements conventional medicine"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <HandHeart className="h-32 w-32 text-teal-400 mx-auto mb-4" />
                    <p className="text-muted-foreground">Holistic Care</p>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-background rounded-lg shadow-lg p-4 border border-teal-100"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <Shield className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Certified</p>
                    <p className="text-xs text-muted-foreground">Practitioners</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-teal-100 text-teal-700 hover:bg-teal-200">Our Doctors</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Meet Our Homeopaths
            </h2>
            <p className="text-muted-foreground text-lg">
              Our experienced homeopathic doctors are dedicated to providing 
              personalized care with compassion and expertise.
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {doctors.map((doctor, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="text-center hover:shadow-lg hover:border-teal-200 transition-all">
                  <CardHeader>
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={doctor.image} alt={doctor.name} />
                      <AvatarFallback className="bg-teal-100 text-teal-700">{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-lg">{doctor.name}</CardTitle>
                    <CardDescription>{doctor.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center gap-1 mb-4">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-medium">{doctor.rating}</span>
                      <span className="text-sm text-muted-foreground">({doctor.reviews} reviews)</span>
                    </div>
                    <Button variant="outline" className="w-full border-teal-200 text-teal-700 hover:bg-teal-50">Book Now</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-teal-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-teal-100 text-teal-700 hover:bg-teal-200">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Our Patients Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Real stories from patients who experienced the healing power of homeopathy.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:border-teal-200 transition-colors">
                  <CardHeader>
                    <div className="flex gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <CardDescription className="text-base italic">
                      "{testimonial.content}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-teal-100 text-teal-700">{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Begin Your Healing Journey Today
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Take the first step towards natural, lasting wellness. Schedule your 
              consultation with our expert homeopaths today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group bg-white text-teal-600 hover:bg-teal-50">
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
                <Phone className="mr-2 h-4 w-4" />
                Call Us Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-50 border-t border-teal-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-teal-100 p-2 rounded-lg">
                  <Leaf className="h-6 w-6 text-teal-600" />
                </div>
                <span className="text-xl font-bold">Jaihind Clinic</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Providing natural homeopathic healing with compassion and excellence since 2005.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-teal-900">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#home" className="hover:text-teal-600">Home</a></li>
                <li><a href="#services" className="hover:text-teal-600">Services</a></li>
                <li><a href="#doctors" className="hover:text-teal-600">Doctors</a></li>
                <li><a href="#contact" className="hover:text-teal-600">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-teal-900">Treatments</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Chronic Diseases</li>
                <li>Pediatric Care</li>
                <li>Skin & Hair</li>
                <li>Women's Health</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-teal-900">Contact Info</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-teal-500" />
                  123 Wellness Center, Mumbai, India
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-teal-500" />
                  +91 98765 43210
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-teal-500" />
                  Mon-Sat: 9:00 AM - 8:00 PM
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-teal-200 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Jaihind Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}