import { Clock, Leaf, MapPin, Phone } from "lucide-react";

export default function Footer(){
    return  <footer className="bg-teal-50 border-t border-teal-100">
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
}