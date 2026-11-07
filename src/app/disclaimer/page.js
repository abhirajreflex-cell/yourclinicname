import LegalPage from "../../../components/LegalPage";
import { clinic } from "@/lib/clinic";

export const metadata = {
  title: "Disclaimer",
  alternates: { canonical: "/disclaimer" },
};

export default function Disclaimer() {
  return (
    <LegalPage title="Disclaimer">
      <p>
        The information on this website is for general awareness only. It is not a substitute
        for professional dental advice, diagnosis or treatment.
      </p>
      <p>
        Treatment results can differ from person to person. Photos, ratings and reviews shown
        on this website do not guarantee any specific result.
      </p>
      <p>
        Please visit {clinic.name} for a proper check-up before starting any treatment.
        In an emergency, contact your nearest hospital.
      </p>
    </LegalPage>
  );
}