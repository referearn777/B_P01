import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

const galleryImages = [
  {
    src: "https://media.istockphoto.com/id/1494935138/photo/organic-cosmetics-with-ingredients.jpg?s=612x612&w=0&k=20&c=CU-pj99HM11FO2IDnQfBW_7lw7_0D-n_gBQaLmgc00Y=",
    alt: "Natural skincare products",
    category: "Organic Products"
  },
  {
    src: "https://images.unsplash.com/photo-1684014286330-ddbeb4a40c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjB0cmVhdG1lbnQlMjBza2luY2FyZXxlbnwxfHx8fDE3NTg3NzYyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Facial treatment",
    category: "Treatments"
  },
  {
    src: "https://images.unsplash.com/photo-1698181842513-2179d5f8bc65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBhcnRpc3QlMjBiZWF1dHl8ZW58MXx8fHwxNzU4NzIwMTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Makeup artistry",
    category: "Makeup"
  },
  {
    src: "https://images.unsplash.com/photo-1741934023052-26baf5535088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjBtYXNzYWdlJTIwdHJlYXRtZW50fGVufDF8fHx8MTc2MDcwNjIzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Facial massage treatment",
    category: "Massage"
  },
  {
    src: "https://images.unsplash.com/photo-1647462741268-e5724e5886c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBzdHlsaW5nfGVufDF8fHx8MTc1ODY3ODg3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Hair styling",
    category: "Hair"
  },
  {
    src: "https://images.unsplash.com/photo-1632838726812-d415bf0caf3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWtldXAlMjB0b29sc3xlbnwxfHx8fDE3NTg3NzYzMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Professional makeup tools",
    category: "Tools"
  },
  {
    src: "https://images.unsplash.com/photo-1588842867976-fd084ca2c87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBiZWF1dHl8ZW58MXx8fHwxNzYwNzA2MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Bridal makeup beauty",
    category: "Bridal"
  },
  {
    src: "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY2FyZSUyMG5hdHVyYWx8ZW58MXx8fHwxNzYwNzA2MjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Natural hair care",
    category: "Hair Care"
  },
  {
    src: "https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjByZWxheGF0aW9uJTIwbWFzc2FnZXxlbnwxfHx8fDE3NTg2OTM5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Spa relaxation",
    category: "Relaxation"
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Gallery</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a look at our beautiful salon space and see the transformations we create for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-white/20 text-white border-white/30">
                    {image.category}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Follow us on social media for more updates and beauty tips!</p>
          <div className="flex justify-center space-x-4">
            <div className="text-sm text-gray-500">@AlankrithaNaturals</div>
            <div className="text-sm text-gray-500">•</div>
            <div className="text-sm text-gray-500">#AlankrithaNaturalGlow</div>
          </div>
        </div>
      </div>
    </section>
  );
}