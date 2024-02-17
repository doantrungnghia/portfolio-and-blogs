export default function Loading() {
  return (
    <div className="mx-auto px-4 w-full">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col justify-start mb-4">
          <span className="w-40 h-12 bg-white rounded-sm animate-pulse"></span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="w-full h-6 bg-white rounded-sm animate-pulse"></span>
          <span className="w-1/2 h-6 bg-white rounded-sm animate-pulse"></span>
          <span className="w-full h-6 bg-white rounded-sm animate-pulse"></span>
          <span className="w-full h-6 bg-white rounded-sm animate-pulse"></span>
          <span className="w-3/4 h-6 bg-white rounded-sm animate-pulse"></span>
        </div>
      </div>
    </div>
  );
}
