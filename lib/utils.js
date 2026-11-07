
import { clinic } from "./clinic";

export function whatsappLink(message = "Hello, I would like to book an appointment.") {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function appointmentMessage({ name, phone, service, date, time, note }) {
  return [
    `Hello ${clinic.name}, I would like to book an appointment.`,
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
    `Date: ${date}`,
    `Time: ${time}`,
    note ? `Note: ${note}` : null,
  ]
    .filter((line) => line !== null)
    .join("\n");
}