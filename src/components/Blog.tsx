import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Blog() {
  const blogPosts = [
    {
      title: 'Why I Love Building AI Projects',
      excerpt: 'Working on AI-based systems like   sentiment analysis and fake news detection, and a computer vision system  has taught me how impactful technology can be when applied to healthcare. Combining deep learning with real-world problems is my favorite way to innovate.',
      image: './blog1.png',
      date: 'Nov 20, 2025',
      readTime: '5 min read',
    },

    {
      title: 'My Journey as a AI-ML Engineer',
      excerpt: 'Sharing my experiences, engineering challenges, and lessons learned while building intelligent systems and deploying machine learning models.',
      image: './blog3.jpg',
      date: 'Nov 10, 2025',
      readTime: '6 min read',
    },
  ];

  if (blogPosts.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-12"
        >
          My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Thoughts</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-gray-300 dark:border-white/10 rounded-2xl overflow-hidden hover:border-blue-500 dark:hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-white/60">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-white/70 mb-4">{post.excerpt}</p>

                <div className="flex items-center gap-2 text-blue-500 group-hover:gap-4 transition-all">
                  <span>Read More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}