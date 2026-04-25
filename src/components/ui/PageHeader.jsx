export default function PageHeader({ title, subtitle }) {
  return (
    <div className="text-center py-10">
      <p className="text-blue-600 uppercase text-xs">{subtitle}</p>
      <h2 className="text-4xl font-bold">{title}</h2>
    </div>
  );
}