"use client"
import Header from '@/app/components/header';
import Image from 'next/image';  // Make sure this is the only Image import
import { useState } from 'react';

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

export default function BlogDetail({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === parseInt(params.id));
  const [comments, setComments] = useState<string[]>([]);
  const [commentText, setCommentText] = useState('');

  if (!post) return <p>Post not found.</p>;

  const handleAddComment = () => {
    if (commentText.trim() !== '') {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-5">
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-auto object-cover rounded-md mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="mt-4">{post.body}</p>

        {/* Comment Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Comments</h2>
          <div className="mb-4">
            <textarea
              className="w-full p-3 border rounded-md mb-2"
              rows={4}
              placeholder="Add a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleAddComment}
            >
              Submit Comment
            </button>
          </div>
          {comments.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {comments.map((comment, index) => (
                <li key={index} className="p-3 border rounded-md bg-gray-100">
                  {comment}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    </>
  );
}
