"use client";

import { useSolarForm } from "./hooks/useSolarForm";
import FormUI from "./FormUI";

export default function FormPage() {
  const { form, onSubmit } = useSolarForm();

  return <FormUI form={form} onSubmit={onSubmit} />;
}