export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || `https://${process.env.NEXT_PUBLIC_VERCEL_URL || "devseed.vercel.app"}`;

  const pages = [
    { url: "/", priority: 1, changeFreq: "weekly" },
    { url: "/blog", priority: 0.8, changeFreq: "weekly" },
    { url: "/pricing", priority: 0.8, changeFreq: "monthly" },
    { url: "/privacy", priority: 0.3, changeFreq: "yearly" },
    { url: "/blog/mvp-launch-2-months", priority: 0.6, changeFreq: "monthly" },
    { url: "/blog/why-nextjs-2025", priority: 0.6, changeFreq: "monthly" },
    { url: "/blog/startup-mistakes", priority: 0.6, changeFreq: "monthly" },
    { url: "/blog/react-native-vs-flutter", priority: 0.6, changeFreq: "monthly" },
    { url: "/blog/aws-scalable-infrastructure", priority: 0.6, changeFreq: "monthly" },
    { url: "/blog/translate-idea-to-requirements", priority: 0.6, changeFreq: "monthly" },
    { url: "/blog/how-we-ensure-code-quality", priority: 0.6, changeFreq: "monthly" },
    { url: "/blog/ai-impact-software-2025", priority: 0.6, changeFreq: "monthly" },
    { url: "/blog/what-happens-after-contact", priority: 0.6, changeFreq: "monthly" },
    { url: "/blog/web-app-security", priority: 0.6, changeFreq: "monthly" },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFreq,
    priority: page.priority,
  }));
}