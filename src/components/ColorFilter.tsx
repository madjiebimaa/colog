'use client'

export default function ColorFilter() {
  return (
    <div className="flex justify-between items-center bg-gray-200 p-1 rounded-full">
      <button className="shrink-0 bg-transparent hover:bg-gray-300 rounded-full p-4 text-gray-900 font-semibold">
        Nippon Paint
      </button>
      <button className="shrink-0 bg-transparent hover:bg-gray-300 rounded-full p-4 text-gray-900 font-semibold">
        Dulux
      </button>
    </div>
  );
}
