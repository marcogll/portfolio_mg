import { useState } from "react";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import CvModal from "../components/CvModal";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const [showCv, setShowCv] = useState(false);

  return (
    <>
      <Profile />
      <Projects />
      <div className="flex flex-col items-center justify-center py-2">
        <h2 className="text-3xl font-semibold text-center">
          {t.letsWork}
        </h2>
        <p className="text-sm md:text-lg text-gray-500 mt-2">
          {t.understanding}
        </p>
        <button
          type="button"
          onClick={() => setShowCv(true)}
          className="mt-5 text-sm text-gray-400 hover:text-gray-600 underline underline-offset-2 transition-colors"
        >
          {t.viewCv || "CV"} / Resume →
        </button>
      </div>
      <CvModal isOpen={showCv} onClose={() => setShowCv(false)} />
    </>
  );
}
