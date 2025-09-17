/*export async function POST(req: Request) {
  const body = await req.json();  // ✅ funktioniert jetzt

  if (!body.immobilie || !body.dach || !body.dachAlter || !body.strom || !body.interesse) {
    return Response.json({ error: "Ungültige Eingabe" }, { status: 400 });
  }

  const answer = Math.random() > 0.5 ? "Ja" : "Nein";
  return Response.json({ answer }); // ✅ sendet JSON zurück
}*/

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Eingaben grob validieren (vereinfachtes Beispiel)
    if (
      !body.immobilie ||
      !body.dach ||
      !body.dachAlter ||
      !body.strom ||
      !body.interesse
    ) {
      return NextResponse.json(
        { error: "Ungültige Eingabe" },
        { status: 400 }
      );
    }

    // Zufällige Antwort generieren
    const answer = Math.random() > 0.5 ? "Ja" : "Nein";

    return NextResponse.json({ answer });
  } catch (error) {
    return NextResponse.json(
      { error: "Fehler beim Verarbeiten" },
      { status: 500 }
    );
  }
}