import Image from "next/image";

interface ExerciseImageProps {
  src: string;
  alt: string;
}

export default function ExerciseImage({ src, alt }: ExerciseImageProps) {
  return (
    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-700">
      <Image src={src} alt={alt} width={64} height={64} className="w-full h-full object-cover" />
    </div>
  );
}

