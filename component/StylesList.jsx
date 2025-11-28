"use client";

export default function StylesList({ styles }) {
  return (
    <div className="flex gap-6 overflow-x-auto py-4 px-2">
      {styles.map((style, i) => (
        <div
          key={i}
          className="min-w-[200px] bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0"
        >
          <img
            src={style.image}
            alt={style.name}
            className="w-full h-40 object-cover"
          />
          <div className="p-3 text-center font-semibold text-gray-800">
            {style.name}
          </div>
        </div>
      ))}
    </div>
  );
}
