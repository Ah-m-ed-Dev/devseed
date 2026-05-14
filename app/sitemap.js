export default function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL || "devseed.vercel.app"}`;

  const blogPosts = [
    "mvp-launch-2-months",
    "why-nextjs-2025",
    "startup-mistakes",
    "react-native-vs-flutter",
    "aws-scalable-infrastructure",
    "translate-idea-to-requirements",
    "how-we-ensure-code-quality",
    "ai-impact-software-2025",
    "what-happens-after-contact",
    "web-app-security",
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    ...blogPosts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  ];
}