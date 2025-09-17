"use client";

import { useSearchParams } from "next/navigation";

export default function ResultPage() {
  const params = useSearchParams();
  const answer = params.get("answer");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Ergebnis</h1>
      {answer === "Ja" ? (
        <p className="text-green-600">✅ Eine Solaranlage lohnt sich wahrscheinlich für Ihr Dach!</p>
      ) : (
        <p className="text-red-600">❌ Eine Solaranlage ist eventuell nicht optimal – lassen Sie sich beraten.</p>
      )}
    </div>
  );
}