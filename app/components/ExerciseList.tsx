import ExerciseCard from "./ExerciseCard";

interface Exercise {
  id: number;
  name: string;
  sets: number;
  reps: number;
  imageSrc: string;
}

interface ExerciseListProps {
  exercises: Exercise[];
}

export default function ExerciseList({ exercises }: ExerciseListProps) {
  return (
    <div className="flex flex-col gap-2">
      {exercises.map((exercise) => (
        <ExerciseCard key={exercise.id} {...exercise} />
      ))}
    </div>
  );
}
