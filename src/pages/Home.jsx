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
      <div className="flex flex-col items-center justify-center py-6 gap-5">
        <button
          type="button"
          onClick={() => setShowCv(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
        >
          <span className="material-symbols-rounded text-base">description</span>
          {t.viewCv || "CV"} / Resume
        </button>
        <div className="text-center">
          <h2 className="text-3xl font-semibold">
            {t.letsWork}
          </h2>
          <p className="text-sm md:text-lg text-gray-500 mt-2">
            {t.understanding}
          </p>
        </div>
      </div>
      <CvModal isOpen={showCv} onClose={() => setShowCv(false)} />
    </>
  );
}
