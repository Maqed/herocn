"use client";

import { ChevronDownIcon } from "lucide-react";

import {
  type Translations,
  useTranslation,
} from "@/components/language-selector";
import { Button } from "@/registry/new-york-v4/ui/button";
import { Card, CardContent } from "@/registry/new-york-v4/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible";

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      trigger: "Frequently asked questions",
      answer:
        "Yes. Free to use for personal and commercial projects. No attribution required.",
      learnMore: "Learn More",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      trigger: "الأسئلة الشائعة",
      answer:
        "نعم. مجاني للاستخدام في المشاريع الشخصية والتجارية. لا يلزم ذكر المصدر.",
      learnMore: "اعرف المزيد",
    },
  },
  he: {
    dir: "rtl",
    values: {
      trigger: "שאלות נפוצות",
      answer: "כן. חינמי לשימוש בפרויקטים אישיים ומסחריים. אין צורך בייחוס.",
      learnMore: "למד עוד",
    },
  },
};

export function CollapsibleRtl() {
  const { dir, language, t } = useTranslation(translations, "ar");

  return (
    <Card className="mx-auto w-full max-w-sm" lang={language} dir={dir}>
      <CardContent>
        <Collapsible className="rounded-md data-open:bg-muted">
          <CollapsibleTrigger
            render={<Button variant="ghost" className="w-full" />}
          >
            {t.trigger}
            <ChevronDownIcon className="ms-auto group-data-panel-open/button:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-1 text-sm">
            <div>{t.answer}</div>
            <Button size="sm">{t.learnMore}</Button>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}
