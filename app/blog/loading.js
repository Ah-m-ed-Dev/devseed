export default function BlogLoading() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-5 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto">
        
        {/* عنوان وهمي */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-40 h-8 rounded-full bg-white/[0.03] mb-6 animate-pulse" />
          <div className="h-10 w-48 bg-white/[0.03] rounded-lg mx-auto mb-4 animate-pulse" />
          <div className="h-5 w-72 bg-white/[0.03] rounded-lg mx-auto animate-pulse" />
        </div>

        {/* بطاقات وهمية */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="p-6 sm:p-8 border-b sm:border border-white/5 bg-white/[0.02] sm:rounded-2xl">
              <div className="flex gap-3 mb-4">
                <div className="h-6 w-16 bg-white/[0.03] rounded-full animate-pulse" />
                <div className="h-6 w-20 bg-white/[0.03] rounded-full animate-pulse" />
              </div>
              <div className="h-6 w-full bg-white/[0.03] rounded-lg mb-3 animate-pulse" />
              <div className="h-4 w-3/4 bg-white/[0.03] rounded-lg animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}