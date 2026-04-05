"use client";

import {
  type Translations,
  useTranslation,
} from "@/components/language-selector";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover";

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      title: "Dimensions",
      description: "Set the dimensions for the layer.",
      "inline-start": "Inline Start",
      left: "Left",
      top: "Top",
      bottom: "Bottom",
      right: "Right",
      "inline-end": "Inline End",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      title: "الأبعاد",
      description: "تعيين الأبعاد للطبقة.",
      "inline-start": "بداية السطر",
      left: "يسار",
      top: "أعلى",
      bottom: "أسفل",
      right: "يمين",
      "inline-end": "نهاية السطر",
    },
  },
  he: {
    dir: "rtl",
    values: {
      title: "מימדים",
      description: "הגדר את המימדים לשכבה.",
      "inline-start": "תחילת השורה",
      left: "שמאל",
      top: "למעלה",
      bottom: "למטה",
      right: "ימין",
      "inline-end": "סוף השורה",
    },
  },
};

const physicalSides = ["left", "top", "bottom", "right"] as const;
const logicalSides = ["inline-start", "inline-end"] as const;

export default function PopoverRtl() {
  const { dir, language, t } = useTranslation(translations, "ar");

  return (
    <div lang={language} dir={dir} className="grid max-w-lg gap-4">
      <div className="flex flex-wrap justify-center gap-2">
        {physicalSides.map((side) => (
          <Popover key={side}>
            <PopoverTrigger render={<Button variant="tertiary" size="sm" />}>
              {t[side]}
            </PopoverTrigger>
            <PopoverContent side={side} dir={dir}>
              <PopoverHeader>
                <PopoverTitle>{t.title}</PopoverTitle>
                <PopoverDescription>{t.description}</PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {logicalSides.map((side) => (
          <Popover key={side}>
            <PopoverTrigger render={<Button variant="tertiary" size="sm" />}>
              {t[side]}
            </PopoverTrigger>
            <PopoverContent side={side} dir={dir}>
              <PopoverHeader>
                <PopoverTitle>{t.title}</PopoverTitle>
                <PopoverDescription>{t.description}</PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </div>
  );
}
