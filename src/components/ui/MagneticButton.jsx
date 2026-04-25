export default function MagneticButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:scale-105 transition"
    >
      {children}
    </button>
  );
}