'use client';

import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  slug: string;
}

export default function BlogGridSection() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Learn the Conjugation of the Verb "To Be" in English',
      date: '20 Rajab 1446 AH',
      image: '/blog/post1.png',
      slug: 'learn-conjugation-verb-to-be',
    },
    {
      id: 2,
      title: 'The Role of the English Language in Highlighting Saudi Culture on the International Stage',
      date: '20 Rajab 1446 AH',
      image: '/blog/post2.png',
      slug: 'english-saudi-culture-international-stage',
    },
    {
      id: 3,
      title: 'Celebrating Saudi National Day: How Can Learning English Empower Saudi Youth?',
      date: '20 Rajab 1446 AH',
      image: '/blog/post3.png',
      slug: 'saudi-national-day-english-youth',
    },
    {
      id: 4,
      title: 'Why Should Every Saudi Learn English?',
      date: '20 Rajab 1446 AH',
      image: '/blog/post4.png',
      slug: 'why-saudi-learn-english',
    },
    {
      id: 5,
      title: 'How Learning English Supports Vision 2030: The Road to Success',
      date: '20 Rajab 1446 AH',
      image: '/blog/post5.png',
      slug: 'english-vision-2030-success',
    },
    {
      id: 6,
      title: 'English as a Language of Innovation: How English Supports Saudi Startups?',
      date: '20 Rajab 1446 AH',
      image: '/blog/post6.png',
      slug: 'english-innovation-saudi-startups',
    },
  ];

  return (
    <section className="container mx-auto px-4 md:px-8 lg:px-24 py-16 lg:py-28 bg-white">
      <div className="flex flex-col gap-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.slice(0, 2).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="flex flex-col gap-5 group"
            >
              <div className="relative w-full h-64 md:h-80 lg:h-[322px] bg-bg-soft rounded-2xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-text-strong text-xl md:text-2xl lg:text-[26px] font-bold leading-tight group-hover:text-primary-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-text-soft text-sm">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.slice(2, 4).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="flex flex-col gap-5 group"
            >
              <div className="relative w-full h-64 md:h-80 lg:h-[322px] bg-bg-soft rounded-2xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-text-strong text-xl md:text-2xl lg:text-[26px] font-bold leading-tight group-hover:text-primary-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-text-soft text-sm">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.slice(4, 6).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="flex flex-col gap-5 group"
            >
              <div className="relative w-full h-64 md:h-80 lg:h-[322px] bg-bg-soft rounded-2xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-text-strong text-xl md:text-2xl lg:text-[26px] font-bold leading-tight group-hover:text-primary-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-text-soft text-sm">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

