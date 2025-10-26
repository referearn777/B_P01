import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

const services = [
  {
    title: "Facial Treatments",
    description: "Rejuvenating facials tailored to your skin type for a radiant, healthy glow.",
    image: "https://images.unsplash.com/photo-1684014286330-ddbeb4a40c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjB0cmVhdG1lbnQlMjBza2luY2FyZXxlbnwxfHx8fDE3NTg3NzYyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    popular: true
  },
  {
    title: "Hair Styling",
    description: "Professional cuts, colors, and styling to complement your unique features.",
    image: "https://images.unsplash.com/photo-1647462741268-e5724e5886c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBzdHlsaW5nfGVufDF8fHx8MTc1ODY3ODg3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    popular: false
  },
  {
    title: "Pedicure & Manicure",
    description: "Beautiful pedicure and professional manicure services for perfect hands.",
    image: "https://www.shutterstock.com/image-photo/beautiful-female-feet-after-spa-600nw-2414474989.jpg",
    popular: false
  },
  {
    title: "Makeup Artistry",
    description: "Expert makeup application for special events, weddings, or photo shoots.",
    image: "https://images.unsplash.com/photo-1698181842513-2179d5f8bc65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBhcnRpc3QlMjBiZWF1dHl8ZW58MXx8fHwxNzU4NzIwMTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    popular: false
  },
  {
    title: "Spa & Massage",
    description: "Relaxing massage therapy and spa treatments for complete wellness.",
    image: "https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjByZWxheGF0aW9uJTIwbWFzc2FnZXxlbnwxfHx8fDE3NTg2OTM5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    popular: true
  },
  {
    title: "Eyebrow Shaping",
    description: "Perfect eyebrow shaping and tinting to frame your beautiful eyes.",
    image: "https://media.istockphoto.com/id/177177852/photo/woman-on-facial-hair-removal-threading-procedure.jpg?s=612x612&w=0&k=20&c=H_Ojngs3D6SKquUtRQVBh2jc2oIhtQSWfiteQIujFn4=",
    popular: false
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of beauty and wellness treatments designed to make you look and feel your best.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="relative overflow-hidden">
                {service.popular && (
                  <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-pink-500 to-rose-400">
                    Popular
                  </Badge>
                )}
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}