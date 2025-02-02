import Link from 'next/link';
import React from 'react';

import Image from 'next/image';  // Make sure this is the only Image import

import blog1 from '@/app/blog1.jpg';
import blog2 from '@/app/blog2.jpg';
import blog3 from '@/app/blog3.jpg';

const posts = [
  { 
    id: 1, 
    title: 'Exploring the Beauty of Nature', 
    body: 'Nature has always been a source of wonder and inspiration for humanity. From the towering peaks of snow-capped mountains to the expansive meadows that stretch as far as the eye can see, every aspect of nature holds a story. The rustling of leaves in ancient forests, the vibrant colors of blooming wildflowers, and the gentle murmurs of flowing rivers combine to create a tranquil escape from the demands of daily life. By immersing ourselves in these natural wonders, we can find a deep sense of peace, reconnecting with the earth and rediscovering our place within its vast ecosystems.', 
    image: blog1 
  },
  { 
    id: 2, 
    title: 'The Majestic World of Wildlife', 
    body: 'The animal kingdom is a breathtaking testament to the diversity and resilience of life on Earth. In the vast savannas, mighty lions assert their dominance, while in the skies, eagles soar with unmatched grace and precision. Each species, whether large or small, plays a crucial role in the delicate balance of their ecosystems. From the playful antics of otters in clear rivers to the stealthy movements of tigers in dense jungles, observing wildlife reveals both the beauty and struggle inherent in survival. It is through conservation and respect that we can ensure future generations will continue to marvel at these magnificent creatures.', 
    image: blog2 
  },
  { 
    id: 3, 
    title: 'Secrets of the Deep Blue Sea', 
    body: 'Beneath the ocean’s surface lies a realm of mystery and wonder, home to countless forms of life that defy imagination. Coral reefs, often referred to as the rainforests of the sea, teem with vibrant fish, sea turtles, and other marine species. In the deeper, darker waters, strange and otherworldly creatures thrive in an environment of extreme pressure and cold. The ocean’s vast currents shape climates and support a delicate web of life that connects with ecosystems on land. By exploring and preserving these underwater worlds, we gain a greater appreciation for the interconnected nature of our planet’s biosphere.', 
    image: blog3 
  },
];


const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto p-5">
          <h1 className="text-2xl font-bold mb-5">Blog Posts</h1>
          <div className="flex lg:grid md:grid flex-col grid-cols-3 gap-4">
            {posts.map((post) => (
              <div key={post.id} className="p-4 border rounded-lg shadow-lg">
                <Image src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-md mb-4" />
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p>{post.body.substring(0, 50)}...</p>
                <Link href={`/blog/${post.id}`} className="text-blue-500">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
