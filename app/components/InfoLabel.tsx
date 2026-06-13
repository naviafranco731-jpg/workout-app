interface InfoLabelProps {
  label: string;
}

export default function InfoLabel({ label }: InfoLabelProps) {
  return (
    <p className="text-gray-500 text-xs mb-1 uppercase tracking-wide">{label}</p>
  );
}

