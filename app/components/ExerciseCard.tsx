import ExerciseImage from "./ExerciseImage";

interface ExerciseCardProps {
  name: string;
  sets: number;
  reps: number;
  imageSrc: string;
}

export default function ExerciseCard({ name, sets, reps, imageSrc }: ExerciseCardProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-[#2a2a2a] rounded-xl mb-2 cursor-pointer hover:bg-[#333] transition-colors">
      <div className="flex items-center gap-4">
        <ExerciseImage src={imageSrc} alt={name} />
        <div>
          <p className="text-white font-semibold text-base">{name}</p>
          <p className="text-gray-400 text-sm">{sets} séries x {reps} repetições</p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}
// componente ExerciseCard
