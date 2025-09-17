"use client";

import Image from "next/image";
import logo from "../assets/logo_61cf661a-b17b-48a8-9a53-8aea3c3a3601.png";
import icon_email from "../assets/mail_8c3b39f4-3694-4bae-8598-8d6727619372.png";
import icon_phone from "../assets/tel_d5578c9e-43dd-45be-809d-529536d7c1c3.png";
import { UseFormReturn } from "react-hook-form";
import { SolarFormInput } from "@/app/lib/validation";
import styles from "./FormUI.module.css";

type Props = {
  form: UseFormReturn<SolarFormInput>;
  onSubmit: (data: SolarFormInput) => void;
};

export default function FormUI({ form, onSubmit }: Props) {
  const { register, handleSubmit, formState: { errors } } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
      <div>
        <Image src={logo} alt="Logo" width={550} height={195} />
      </div>
      <h1 className="text-xl font-bold">Solar-Check</h1>
      <br/>
      <div>
        <label>1. Welche Art von Immobilie besitzen Sie?</label>
        <select {...register("immobilie")}>
          <option value="">Bitte wählen</option>
          <option>Einfamilienhaus</option>
          <option>Mehrfamilienhaus</option>
          <option>Gewerbeimmobilie</option>
        </select>
        {errors.immobilie && <p>{errors.immobilie.message}</p>}
      </div>
      
      <div>
        <label className="block">2. Wie ist Ihr Dach ausgerichtet?</label>

        <label>
          <input type="checkbox" value="sued" {...register("dach", { required: "Bitte mindestens eine Ausrichtung wählen" })} />
          Süd
        </label>

        <label>
          <input type="checkbox" value="west" {...register("dach")} />
          West
        </label>

        <label>
          <input type="checkbox" value="ost" {...register("dach")} />
          Ost
        </label>

        <label>
          <input type="checkbox" value="nord" {...register("dach")} />
          Nord
        </label>

        <label>
          <input type="checkbox" value="keine" {...register("dach")} />
          Keine Angabe
        </label>

        {errors.dach && <p className="text-red-600">{errors.dach.message}</p>}
      </div>

      <div>
        <label>3. Wie alt ist Ihr Dach?</label>
        <select {...register("dachAlter")}>
          <option value="">Bitte wählen</option>
          <option>Unter 5 Jahre</option>
          <option>5 - 15 Jahre</option>
          <option>Über 15 Jahre</option>
          <option>Keine Angabe</option>
        </select>
        {errors.dachAlter && <p>{errors.dachAlter.message}</p>}
      </div>

      <div>
        <label>4. Wie hoch ist ihr Stromverbrauch pro Jahr?</label>
        <select {...register("strom")}>
          <option value="">Bitte wählen</option>
          <option>Unter 3.000 kWh</option>
          <option>3.000–5.000 kWh</option>
          <option>ber 5.000 kWh</option>
          <option>Keine Angabe</option>
        </select>
        {errors.strom && <p>{errors.strom.message}</p>}
      </div>

      <div>
        <label>5. Sind Sie auch an weiteren Energielösungen interessiert?</label>
        <select {...register("interesse")}>
          <option value="">Bitte wählen</option>
          <option>Ja</option>
          <option>Nein</option>
          <option>Ich weiß nicht</option>
        </select>
        {errors.interesse && <p>{errors.interesse.message}</p>}
      </div>

      {/* Weitere Fragen analog */}
      <br/>
      <h2 className="text-lg font-semibold">Optional: Kontakt</h2>
      <div>
        <input placeholder="Name" {...register("name")} />
      </div>
      <div>
        <Image src={icon_email} alt="Icon_Email" width={30} height={30} />
        <input placeholder="E-Mail" type="email" {...register("email")} />
      </div>
      <div>
        <Image src={icon_phone} alt="Icon_Email" width={30} height={30} />
        <input placeholder="Telefon" {...register("telefon")} />
      </div>
      
      <br/>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Absenden
      </button>
    </form>
  );
}