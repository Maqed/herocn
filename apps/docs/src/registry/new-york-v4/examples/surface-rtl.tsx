"use client";

import {
  type Translations,
  useTranslation,
} from "@/components/language-selector";
import { Surface } from "@/registry/new-york-v4/ui/surface";

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      cardTitle: "Project Overview",
      cardDescription: "Use for cards, panels, and grouped content.",
      nestedTitle: "Details",
      nestedDescription: "Great for nested sections and subtle emphasis.",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      cardTitle: "نظرة عامة على المشروع",
      cardDescription: "يُستخدم للبطاقات واللوحات والمحتوى المُجمَّع.",
      nestedTitle: "التفاصيل",
      nestedDescription: "مناسب للأقسام المتداخلة والتمييز الخفي.",
    },
  },
  he: {
    dir: "rtl",
    values: {
      cardTitle: "סקירת פרויקט",
      cardDescription: "לשימוש בכרטיסים, פנלים ותוכן מקובץ.",
      nestedTitle: "פרטים",
      nestedDescription: "מצוין לסקציות מקוננות ודגש עדין.",
    },
  },
};

export function SurfaceRtl() {
  const { dir, language, t } = useTranslation(translations, "ar");

  return (
    <div className="grid w-full gap-3 md:grid-cols-2" lang={language} dir={dir}>
      <Surface className="rounded-lg border p-4">
        <h4 className="text-sm font-medium">{t.cardTitle}</h4>
        <p className="mt-1 text-sm text-muted-foreground">
          {t.cardDescription}
        </p>
      </Surface>
      <Surface variant="secondary" className="rounded-lg border p-4">
        <h4 className="text-sm font-medium">{t.nestedTitle}</h4>
        <p className="mt-1 text-sm text-muted-foreground">
          {t.nestedDescription}
        </p>
      </Surface>
    </div>
  );
}
