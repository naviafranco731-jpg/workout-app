import InfoLabel from "./components/InfoLabel";
import SectionHeader from "./components/SectionHeader";
import ExerciseList from "./components/ExerciseList";

const exercises = [
  { id: 1, name: "Puxada frontal",     sets: 3, reps: 12, imageSrc: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=64&h=64&fit=crop" },
  { id: 2, name: "Remada curvada",     sets: 3, reps: 12, imageSrc: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=64&h=64&fit=crop" },
  { id: 3, name: "Remada unilateral",  sets: 3, reps: 12, imageSrc: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=64&h=64&fit=crop" },
  { id: 4, name: "Levantamento terra", sets: 3, reps: 12, imageSrc: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=64&h=64&fit=crop" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] px-4 py-6 max-w-md mx-auto">
      <InfoLabel label="info" />
      <SectionHeader title="Exercícios" count={exercises.length} />
      <InfoLabel label="item" />
      <ExerciseList exercises={exercises} />
    </main>
  );
}// pagina principal
