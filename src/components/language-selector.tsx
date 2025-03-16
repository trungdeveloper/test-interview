import { useState } from "react";
import { Check } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/language-provider";

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  {
    code: "vn",
    name: "Vietnamese",
    flag: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img-axVPxjwEmhDNkY6VGyZh5QZGoQYycc.png", // Using the provided img for demo
  },
  {
    code: "en",
    name: "English",
    flag: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img-axVPxjwEmhDNkY6VGyZh5QZGoQYycc.png", // Using the provided img for demo
  },
];

export function LanguageSelector() {
  const { locale, setLocale } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages.find((lg) => lg.code === locale) || languages[0]
  );

  console.log(locale);

  const handleChangeLanguage = (language: Language) => {
    setLocale(language.code);
    setSelectedLanguage(language);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center justify-center">
          <img
            src={selectedLanguage.flag || "/placeholder.svg"}
            alt={selectedLanguage.name}
            width={30}
            height={20}
            className="rounded-sm"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[230px] rounded-xl p-0 border shadow-md">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            className="flex items-center px-4 py-3 cursor-pointer focus:bg-gray-50"
            onClick={() => handleChangeLanguage(language)}
          >
            <div className="flex items-center w-full">
              <img
                src={language.flag || "/placeholder.svg"}
                alt={language.name}
                width={30}
                height={20}
                className="rounded-sm mr-3"
              />
              <span className="font-medium text-base">{language.name}</span>
              {selectedLanguage.code === language.code && (
                <Check className="ml-auto w-5 h-5" />
              )}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
