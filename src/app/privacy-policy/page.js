import LegalPage from "../../../components/LegalPage";
import { clinic } from "@/lib/clinic";

export const metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        {clinic.name} respects your privacy. This page explains what information we collect
        and how we use it.
      </p>
      <h2 className="text-xl font-bold text-slate-900">Information we collect</h2>
      <p>
        When you book an appointment, you share your name, phone number, preferred date and
        message with us through WhatsApp. We do not store this information on our website.
      </p>
      <h2 className="text-xl font-bold text-slate-900">How we use it</h2>
      <p>
        We use your details only to confirm and manage your appointment and to reply to your
        queries. We do not sell or share your information with third parties.
      </p>
      <h2 className="text-xl font-bold text-slate-900">Third party services</h2>
      <p>
        This website uses Google Maps and WhatsApp. These services have their own privacy
        policies.
      </p>
      <h2 className="text-xl font-bold text-slate-900">Contact</h2>
      <p>
        For any questions, email us at {clinic.email} or call {clinic.phone}.
      </p>
    </LegalPage>
  );
}