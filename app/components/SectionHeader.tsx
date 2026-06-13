interface SectionHeaderProps {
  title: string;
  count: number;
}

export default function SectionHeader({ title, count }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-white text-xl font-bold">{title}</h2>
      <span className="text-gray-400 text-base font-medium">{count}</span>
    </div>
  );
}
// componente SectionHeader
