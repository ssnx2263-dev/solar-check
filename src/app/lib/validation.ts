import { z } from "zod";

export const solarFormSchema = z.object({
  immobilie: z.string().min(1, "Pflichtfeld"),
  dach: z.array(z.string()).min(1, "Mindestens eine Auswahl"),
  dachAlter: z.string().min(1, "Pflichtfeld"),
  strom: z.string().min(1, "Pflichtfeld"),
  interesse: z.string().min(1, "Pflichtfeld"),
  name: z.string().optional(),
  //email: z.string().email("Ungültige E-Mail").optional(),
  email: z.string().email("Ungültige E-Mail").or(z.literal("")).optional(),
  telefon: z.string().optional(),
});

export type SolarFormInput = z.infer<typeof solarFormSchema>;