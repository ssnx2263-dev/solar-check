"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { solarFormSchema, SolarFormInput } from "@/app/lib/validation";

export function useSolarForm() {
  const form = useForm<SolarFormInput>({
    resolver: zodResolver(solarFormSchema),
    defaultValues: {
      dach: [],
    },
  });

  /*const onSubmit = async (data: SolarFormInput) => {
    const res = await fetch("/api/submit", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await res.json();
    window.location.href = `/form/result?answer=${result.answer}`;
  }; */ 

  /*const onSubmit = async (data: SolarFormInput) => {
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",   // ✅ Wichtig!
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      console.error("Fehler beim Absenden", await res.text());
      return;
    }

    const result = await res.json(); // ✅ jetzt klappt JSON.parse
    window.location.href = `/form/result?answer=${result.answer}`;
  };*/

  const onSubmit = async (data: SolarFormInput) => {
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        console.error("Fehler beim Absenden", await res.text());
        return;
      }

      const result = await res.json();

      // ✅ Weiterleitung zur Ergebnis-Seite mit Parameter
      window.location.href = `/form/result?answer=${result.answer}`;
    } catch (error) {
      console.error("Netzwerkfehler:", error);
    }
  };

return { form, onSubmit };
}
