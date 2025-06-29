"use client";

export default function RunningText({ text, speed = 60 }) {
  // Split text by bullet and render each with extra margin for spacing
  const items = text.split('•').map((item, idx) => (
    <span key={idx} className="text-3xl md:text-4xl font-extrabold text-green-700 mx-10 whitespace-nowrap">
      {item.trim()}
    </span>
  ));
  // Duplicate the items once for seamless looping
  const loopedItems = [...items, ...items];
  return (
    <div className="relative overflow-hidden bg-white py-6 border-y-2 border-green-400 shadow-md w-full min-w-0">
      <style>{`
        @keyframes seamless-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .seamless-running-text {
          display: flex;
          width: max-content;
          animation: seamless-scroll ${speed}s linear infinite;
        }
      `}</style>
      <div className="seamless-running-text">
        {loopedItems}
      </div>
    </div>
  );
}
