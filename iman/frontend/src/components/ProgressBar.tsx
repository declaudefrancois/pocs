export default function ProgressBar({ value }: { value: number }) {
  return (
    <div className="bg-gray-100 w-full h-2">
      <div className="bg-blue-500 h-full" style={{ width: `${value}%` }} />
    </div>
  );
}
