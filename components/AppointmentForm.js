"use client";

import { useEffect, useState } from "react";
import { clinic } from "@/lib/clinic";
import { whatsappLink, appointmentMessage } from "@/lib/utils";

const timeSlots = [
  "Morning (10 AM - 1 PM)",
  "Afternoon (1 PM - 4 PM)",
  "Evening (4 PM - 8 PM)",
];

const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200";

export default function AppointmentForm() {
  const [today, setToday] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: clinic.services[0].title,
    date: "",
    time: timeSlots[0],
    note: "",
  });

  // aaj ki date min ke liye (hydration error se bachne ke liye useEffect me)
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setToday(new Date().toISOString().split("T")[0]);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = whatsappLink(appointmentMessage(form));
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="appointment" className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        {/* Left text */}
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-teal-600">
            Appointment
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Book Your Visit in 1 Minute
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Fill the form and we will receive your request directly on WhatsApp.
            No waiting, no calls.
          </p>
          <ul className="mt-6 space-y-2 text-slate-700">
            <li>✅ {clinic.timings}</li>
            <li>✅ Quick confirmation on WhatsApp</li>
            <li>✅ Painless and affordable treatment</li>
          </ul>
          <a
            href={`tel:${clinic.phone}`}
            className="mt-6 inline-block font-semibold text-teal-700 hover:underline"
          >
            Or call us: {clinic.phone}
          </a>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-3xl bg-white p-6 shadow-xl sm:p-8"
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className={inputClass}
          />
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            required
            pattern="[0-9+ ]{10,14}"
            placeholder="Phone number"
            className={inputClass}
          />
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className={inputClass}
          >
            {clinic.services.map((s) => (
              <option key={s.title} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-slate-600">Preferred date</span>
            <input
              name="date"
              type="date"
              min={today}
              value={form.date}
              onChange={handleChange}
             required
      className={`${inputClass} min-h-[52px] text-left`}
            />
            </label>
             <label className="block">
    <span className="mb-1 block text-sm font-semibold text-slate-600">Preferred time</span>
            <select
              name="time"
              value={form.time}
              onChange={handleChange}
              className={inputClass}
            >
              {timeSlots.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
             </label>
          </div>

          <textarea
            name="note"
            value={form.note}
            onChange={handleChange}
            rows={3}
            placeholder="Any problem or message (optional)"
            className={inputClass}
          />

          <button
            type="submit"
            className="w-full rounded-full bg-orange-500 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-orange-600"
          >
            Send on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}