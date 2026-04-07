export default function Sidebar({ setPage }) {
  const items = ["Dashboard", "Expenses", "Income"];

  return (
    <div className="w-64 bg-black text-white p-4">
      <h1 className="text-xl mb-4">FinTrack</h1>
      {items.map(i => (
        <div key={i} onClick={() => setPage(i)} className="cursor-pointer mb-2">
          {i}
        </div>
      ))}
    </div>
  );
}
