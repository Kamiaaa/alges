'use client'
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Gallery data with images
const galleryItems = [
  {
    title: "Photo Title-01",
    description: "Photo Description-01",
    image: "/img/pa-01.jpg",
    gradient: "from-red-500 to-orange-500",
    link: "/",
  },
  {
    title: "Photo Title-02",
    description: "Photo Description-02",
    image: "/img/pa-02.jpg",
    gradient: "from-blue-500 to-cyan-500",
    link: "/",
  },
  {
    title: "Photo Title-03",
    description: "Photo Description-03",
    image: "/img/pa-03.jpg",
    gradient: "from-purple-500 to-pink-500",
    link: "/",
  },
  {
    title: "Photo Title-04",
    description: "Photo Description-04",
    image: "/img/pa-04.jpg",
    gradient: "from-green-500 to-emerald-500",
    link: "/",
  },
  {
    title: "Photo Title-05",
    description: "Photo Description-05",
    image: "/img/pa-05.jpg",
    gradient: "from-yellow-500 to-amber-500",
    link: "/",
  },
  {
    title: "Photo Title-06",
    description: "Photo Description-06",
    image: "/img/pa-06.jpg",
    gradient: "from-indigo-500 to-purple-500",
    link: "/",
  },
];

// Type definitions
interface GalleryItem {
  title: string;
  description: string;
  image: string;
  gradient: string;
  link: string;
}

interface GalleryCardProps {
  item: GalleryItem;
  index: number;
}

interface PhotoGalleryProps {
  title?: string;
  description?: string;
  heroImage?: string;
}

// Gallery Card Component (original design preserved)
function GalleryCard({ item, index }: GalleryCardProps) {
  return (
    <div
      className="group relative h-full bg-slate-900 dark:bg-gray-800 overflow-hidden shadow-lg flex flex-col"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden flex-shrink-0">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-linear-to-t ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex-grow flex flex-col">
        {/* Title and Button Row */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-red-500">
            {item.title}
          </h3>
          
          {/* Explore Button with Link */}
          <Link href={item.link}>
            <button className="group/btn inline-flex items-center gap-1.5 text-green-500 font-medium hover:transition-all">
              Explore
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
        
        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Optional: Make the whole card clickable */}
      {/* <Link href={item.link} className="absolute inset-0 z-10" aria-label={`View ${item.title} details`} /> */}

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-200 dark:group-hover:border-gray-700 transition-all duration-500 pointer-events-none" />

      {/* Glow Effect */}
      <div
        className={`absolute inset-0 bg-linear-to-r ${item.gradient} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 pointer-events-none`}
      />
    </div>
  );
}

// Hero Section Component
function GalleryHero({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative h-[40vh] min-h-65 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/slide-03.jpg"
          alt="Gallery hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bail text-white mb-4 animate-fade-in">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-slide-up">
          {description}
        </p>
      </div>
    </div>
  );
}

// Main Photo Gallery Component
export default function PhotoGallery({
  title = "Photo Gallery",
  description = "Explore our stunning collection of automotive photography showcasing innovation and design excellence.",
}: PhotoGalleryProps) {
  return (
    <>
      {/* Hero Section */}
      <GalleryHero title={title} description={description} />

      {/* Gallery Section - No gap, no extra title */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <GalleryCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}