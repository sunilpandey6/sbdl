import { useLanguage } from "../../hooks/useLanguage";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="w-10 h-10 rounded-full overflow-hidden hover:ring-2 hover:ring-blue-400 transition-all"
      aria-label="Toggle language"
    >
      <img
        src={`https://flagcdn.com/${language === 'en' ? 'np' : 'gb'}.svg`}
        alt={language === 'en' ? 'Nepal Flag' : 'UK Flag'}
        className="w-full h-full object-cover"
      />
    </button>
  );
}