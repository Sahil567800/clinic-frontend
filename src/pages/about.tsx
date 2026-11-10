"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Clock, Stethoscope, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GoogleMap from "@/components/common/map";

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

export default function AboutPage() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-teal-50/50 to-white dark:from-teal-950/20 dark:to-background py-16 md:py-24">
      
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Stethoscope className="w-4 h-4" />
            <span>Since 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-teal-900 dark:text-teal-100 tracking-tight">
            About Our Clinic
          </h1>
          <p className="text-lg text-teal-700/80 dark:text-teal-300/80 max-w-2xl mx-auto">
            Providing compassionate and personalized homeopathic care to help you achieve optimal health and wellness.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Map Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-teal-500 to-teal-300 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative  bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-teal-100 dark:border-teal-800 shadow-xl">
                <GoogleMap />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal-900/90 to-transparent p-6">
                  <div className="flex items-center gap-2 text-white">
                    <MapPin className="w-5 h-5 text-teal-300" />
                    <span className="font-medium">Visit us at Madhav Ganj</span>
                  </div>
                </div>
              </div>
            </div>

           
          </motion.div>

          {/* Info Section */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="w-full lg:w-1/2 space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-3xl font-bold text-teal-900 dark:text-teal-100">
                Jaihind Homeopathic Clinic &<br />
                <span className="text-teal-600 dark:text-teal-400">Healthcare Centre</span>
              </h2>
              <p className="text-teal-800/70 dark:text-teal-200/70 leading-relaxed ">
                Located conveniently near Ahuja Hospital, we offer gentle and effective 
                homeopathic treatments tailored to your individual needs. Our approach 
                focuses on treating the root cause, not just the symptoms.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              <InfoCard 
                icon={<MapPin className="w-5 h-5" />}
                title="Location"
                content="Madhav Ganj, Near Ahuja Hospital"
                delay={0.1}
              />
              <InfoCard 
                icon={<Mail className="w-5 h-5" />}
                title="Email"
                content="Abdulkaleemqureshi191@gmail.com"
                isLink
                delay={0.2}
              />
              <InfoCard 
                icon={<Clock className="w-5 h-5" />}
                title="Consultation Hours"
                content="Monday - Saturday: 10:00 AM - 8:00 PM"
                delay={0.3}
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-4">
              <Button 
                className="bg-teal-600 hover:bg-teal-700 text-white group transition-all duration-300 shadow-lg hover:shadow-teal-500/25"
                size="lg"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Helper Component for Info Cards
function InfoCard({ 
  icon, 
  title, 
  content, 
  isLink = false,
  delay = 0 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string; 
  isLink?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Card className="border-teal-100 dark:border-teal-800/50 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm hover:border-teal-300 dark:hover:border-teal-700 transition-colors duration-300">
        <CardContent className="p-3 flex items-start gap-4">
          <div className="p-2.5 bg-teal-50 dark:bg-teal-900/30 rounded-lg text-teal-600 dark:text-teal-400 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/50 transition-colors">
            {icon}
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold text-teal-900 dark:text-teal-100">{title}</h3>
            {isLink ? (
              <a 
                href={`mailto:${content}`}
                className="text-teal-700 dark:text-teal-300 hover:text-teal-600 dark:hover:text-teal-200 transition-colors text-sm break-all"
              >
                {content}
              </a>
            ) : (
              <p className="text-teal-700/80 dark:text-teal-300/80 text-sm">{content}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}