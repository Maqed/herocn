"use client";

import {
  type Translations,
  useTranslation,
} from "@/components/language-selector";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/new-york-v4/ui/field";
import { Switch } from "@/registry/new-york-v4/ui/switch";

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      label: "Share across devices",
      description:
        "Focus is shared across devices, and turns off when you leave the app.",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      label: "المشاركة عبر الأجهزة",
      description:
        "يتم مشاركة التركيز عبر الأجهزة، ويتم إيقاف تشغيله عند مغادرة التطبيق.",
    },
  },
  he: {
    dir: "rtl",
    values: {
      label: "שיתוף בין מכשירים",
      description: "המיקוד משותף בין מכשירים, וכבה כשאתה עוזב את האפליקציה.",
    },
  },
};

export function SwitchRtl() {
  const { dir, language, t } = useTranslation(translations, "ar");

  return (
    <div lang={language} dir={dir}>
      <Field orientation="horizontal" className="max-w-sm">
        <FieldContent>
          <FieldLabel htmlFor="switch-focus-mode-rtl">{t.label}</FieldLabel>
          <FieldDescription>{t.description}</FieldDescription>
        </FieldContent>
        <Switch id="switch-focus-mode-rtl" />
      </Field>
    </div>
  );
}
