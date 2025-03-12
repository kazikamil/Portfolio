"use client";

import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    const response = await fetch("https://formspree.io/f/xdkarbpj", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  
    if (response.ok) {
      alert("Message envoyé !");
      reset();
    } else {
      alert("Erreur lors de l'envoi.");
    }
    reset();
  };

  return (
    <div id="contact" className="px-5 md:px-0 space-y-6  w-full flex flex-col  items-center">
      <h2 className="text-3xl text-emerald-400 font-bold text-center">Contact Me</h2>
      <form onSubmit={handleSubmit(onSubmit)} className=" w-full md:w-1/3 space-y-8">
        <div>
          <label className="block text-md text-emerald-400 font-medium">Nom</label>
          <input
            type="text"
            {...register("name", { required: "Le nom est requis", minLength: { value: 2, message: "Le nom doit contenir au moins 2 caractères." } })}
            className="border bg-transparent border-emerald-400 p-2 w-full rounded"
            placeholder="Votre nom"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-md text-emerald-400 font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: "L'email est requis", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Veuillez entrer une adresse email valide." } })}
            className="border bg-transparent border-emerald-400 p-2 w-full rounded"
            placeholder="votre@email.com"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-md text-emerald-400 font-medium">Message</label>
          <textarea
            {...register("message", { required: "Le message est requis", minLength: { value: 10, message: "Le message doit contenir au moins 10 caractères." } })}
            className="border bg-transparent border-emerald-400 p-2 w-full rounded resize-none"
            placeholder="Votre message ici..."
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>
        <button type="submit" disabled={isSubmitting} className="bg-emerald-500 text-white p-2 rounded">
          {isSubmitting ? "Envoi en cours..." : "Envoyer"}
        </button>
      </form>
    </div>
  );
}