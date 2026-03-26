"use client";

import {
  type Translations,
  useTranslation,
} from "@/components/language-selector";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/new-york-v4/ui/avatar";

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      teamLabel: "Team members",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      teamLabel: "أعضاء الفريق",
    },
  },
  he: {
    dir: "rtl",
    values: {
      teamLabel: "חברי הצוות",
    },
  },
};

export function AvatarRtl() {
  const { dir, language, t } = useTranslation(translations, "ar");

  return (
    <div className="flex items-center gap-3" lang={language} dir={dir}>
      <AvatarGroup>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/Maqed.png" alt="@0xMaqed" />
          <AvatarFallback>Mqd</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
      <span className="text-sm text-muted-foreground">{t.teamLabel}</span>
    </div>
  );
}
