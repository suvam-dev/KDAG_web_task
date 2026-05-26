import { useParams, Link } from 'react-router-dom';

const BlogPage = ({ blogData }) => {
  const { slug } = useParams();
  const post = blogData.find(item => item.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-white">
        <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
        <Link
          to="/"
          className="px-4 py-2 bg-[#1e1e24] border border-white/10 rounded-xl hover:bg-accent transition-colors"
        >
          Back to Feed
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl w-full px-6 py-12 text-white font-sans mx-auto">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-accent mb-8 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
        Back to all articles
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>Published: {post.date}</span>
          <span>•</span>
          <span>Likes: {post.likes}</span>
        </div>
      </header>

      <div className="w-full aspect-[16/9] rounded-[2rem] overflow-hidden mb-8 border border-white/10">
        <img src={post.image} alt={post.imageAlt} className="w-full h-full object-cover" />
      </div>

      <section className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg">
        <p className="mb-6">{post.description}</p>
        {/* TODO: fetch full content from CMS or MDX */}
        <p>
          This is a full article template. You can fetch richer content from your CMS
          or data endpoints using this pattern. KDAG research and developments are ongoing!
        </p>
      </section>
    </article>
  );
};

export default BlogPage;