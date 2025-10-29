import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Step 1: Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.date.trim()) {
      toast.error("Booking Failed", {
        description: "Please fill all required fields (Name, Email, Phone, Date)."
      });
      return;
    }

    // ✅ Step 2: Prepare data for backend
    const bookingData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      date: formData.date,
      notes: formData.message,
    };

    setIsSubmitting(true);

    try {
      // ✅ Step 3: Send data to backend
      const response = await fetch("https://b-p01new.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      // ✅ Step 4: Handle response
      if (response.ok) {
        toast.success("Booking Successful!", {
          description: data.message || "We'll confirm your appointment within 24 hours via email or phone."
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          message: ""
        });
      } else {
        toast.error("Booking Failed", {
          description: data.message || "Please try again."
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Server Error", {
        description: "Unable to connect to the server. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to book your appointment? Contact us today and let us help you look and feel your best.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Beauty parlour</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-pink-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">Oppo Maharani parlour<br />Akkayyapalem<br />Visakhapatnam</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-pink-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">7981904087</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-pink-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">sivakumari882@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-pink-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Mon - Fri: 10:00 AM - 9:00 PM</p>
                      <p>Sat: 10:00 AM - 9:00 PM</p>
                      <p>Sun: 10:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50">
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Book Your Appointment</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name *</label>
                  <Input id="name" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email *</label>
                  <Input id="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number *</label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" value={formData.phone} onChange={handleInputChange} required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium">Preferred Service</label>
                  <Input id="service" placeholder="e.g., Facial Treatment, Hair Styling" value={formData.service} onChange={handleInputChange} />
                </div>

                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium">Preferred Date *</label>
                  <Input id="date" type="date" value={formData.date} onChange={handleInputChange} required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Additional Notes</label>
                  <Textarea id="message" placeholder="Any special requests or questions?" rows={4} value={formData.message} onChange={handleInputChange} />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Book Appointment"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
