"use client";

export default function RunningText({ text, speed = 15 }) {
  // Split text by bullet and render each with extra margin for spacing
  const items = text.split('•').map((item, idx) => (
    <span
      key={`item-${idx}`}
      className="text-base xs:text-lg sm:text-xl md:text-3xl font-extrabold text-green-700 mx-4 whitespace-nowrap flex items-center"
      style={{ lineHeight: 1.2 }}
    >
      {item.trim()}
    </span>
  ));
  // Duplicate the items once for seamless looping, ensuring unique keys
  const loopedItems = [
    ...text.split('•').map((item, idx) => (
      <span
        key={`item-${idx}`}
        className="text-base xs:text-lg sm:text-xl md:text-3xl font-extrabold text-green-700 mx-4 whitespace-nowrap flex items-center"
        style={{ lineHeight: 1.2 }}
      >
        {item.trim()}
      </span>
    )),
    ...text.split('•').map((item, idx) => (
      <span
        key={`item-dup-${idx}`}
        className="text-base xs:text-lg sm:text-xl md:text-3xl font-extrabold text-green-700 mx-4 whitespace-nowrap flex items-center"
        style={{ lineHeight: 1.2 }}
      >
        {item.trim()}
      </span>
    ))
  ];
  return (
    <div className="relative overflow-hidden bg-white py-2 sm:py-4 border-y-2 border-green-400 shadow-md w-full min-w-0 flex items-center" style={{height: 'auto', minHeight: '2.5rem'}}>
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
