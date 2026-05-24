import Link from "next/link";
import { getPostBySlug, getPosts } from "@/lib/supabase";

export async function generateStaticParams() {
  try {
    const posts = await getPosts();
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    return { title: "المقال غير موجود | DevSeed" };
  }

  return {
    title: `${post.title} | DevSeed`,
    description: post.excerpt || "مقال من مدونة DevSeed",
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const article = await getPostBySlug(resolvedParams.slug);

  if (!article) {
    return (
      <section className="min-h-screen pt-24 px-5 bg-[#0a0a0f] text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl text-white font-bold mb-4">المقال غير موجود</h1>
        <Link href="/blog" className="text-teal-400 hover:underline">العودة إلى المدونة</Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-24 pb-16 sm:pb-24 relative overflow-hidden bg-[#0a0a0f]">

      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-teal-500/5 rounded-full blur-[120px]" />

      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 relative z-10">

        <div className="mb-8 sm:mb-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors text-sm mb-6">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
            </svg>
            العودة إلى المدونة
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full">{article.category}</span>
            <span className="text-xs text-gray-500">{new Date(article.created_at).toLocaleDateString("ar-SA")}</span>
            <span className="text-xs text-gray-500">· {article.read_time || "5 دقائق"} قراءة</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">{article.title}</h1>
          {article.excerpt && <p className="text-gray-400 text-lg">{article.excerpt}</p>}
        </div>

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: article.content || "" }}
        />

        <div className="mt-12 sm:mt-16 p-8 sm:rounded-2xl border-t sm:border border-white/5 bg-white/[0.02] text-center">
          <h3 className="text-xl font-semibold text-white mb-2">هل تريد بناء مشروعك القادم؟</h3>
          <p className="text-gray-400 text-sm mb-6">فريق DevSeed جاهز لمساعدتك. دعنا نناقش فكرتك.</p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/25"
          >
            تواصل معنا
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}