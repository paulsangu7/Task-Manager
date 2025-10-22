export default function Card({ title, description }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h2 className="font-bold text-xl">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
