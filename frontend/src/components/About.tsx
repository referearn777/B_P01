import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Star, Heart, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Expert Professionals",
    description: "Our certified beauticians have years of experience and ongoing training."
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Every treatment is customized to your unique needs and preferences."
  },
  {
    icon: Shield,
    title: "Premium Products",
    description: "We use only the finest, cruelty-free products from trusted brands."
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book appointments that fit your busy lifestyle, including evenings and weekends."
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-pink-100 text-pink-600 hover:bg-pink-100">About Alankritha Naturals</Badge>
              <h2 className="text-4xl font-bold text-gray-900">
                Where Beauty Meets
                <span className="block text-pink-500">Excellence</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Alankritha Naturals has been the premier destination for natural beauty treatments. 
                Our passion is helping you discover and enhance your natural beauty through organic care and 
                time-tested natural techniques.
              </p>
              <p className="text-gray-600">
                Located in the heart of the city, our serene spa environment provides the perfect escape 
                from daily stress. We believe that true beauty comes from feeling confident and comfortable 
                in your own skin.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-pink-500 mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1684014286330-ddbeb4a40c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjB0cmVhdG1lbnQlMjBza2luY2FyZXxlbnwxfHx8fDE3NTg3NzYyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Facial treatment"
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1698181842513-2179d5f8bc65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBhcnRpc3QlMjBiZWF1dHl8ZW58MXx8fHwxNzU4NzIwMTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Makeup artistry"
                  className="w-full h-32 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1647462741268-e5724e5886c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBzdHlsaW5nfGVufDF8fHx8MTc1ODY3ODg3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Hair styling"
                  className="w-full h-32 object-cover rounded-xl shadow-lg"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjByZWxheGF0aW9uJTIwbWFzc2FnZXxlbnwxfHx8fDE3NTg2OTM5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Spa relaxation"
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}