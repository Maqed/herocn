"use client";

import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

import {
  type Translations,
  useTranslation,
} from "@/components/language-selector";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu";

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      open: "Open",
      myAccount: "My Account",
      profile: "Profile",
      billing: "Billing",
      settings: "Settings",
      logOut: "Log out",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      open: "افتح",
      myAccount: "حسابي",
      profile: "الملف الشخصي",
      billing: "الفواتير",
      settings: "الإعدادات",
      logOut: "تسجيل الخروج",
    },
  },
  he: {
    dir: "rtl",
    values: {
      open: "פתח",
      myAccount: "החשבון שלי",
      profile: "פרופיל",
      billing: "חיוב",
      settings: "הגדרות",
      logOut: "התנתק",
    },
  },
};

export function DropdownMenuRtl() {
  const { dir, language, t } = useTranslation(translations, "ar");

  return (
    <div lang={language} dir={dir}>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="tertiary" />}>
          {t.open}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>{t.myAccount}</DropdownMenuLabel>
            <DropdownMenuItem>
              <UserIcon />
              {t.profile}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCardIcon />
              {t.billing}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SettingsIcon />
              {t.settings}
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem variant="destructive">
              <LogOutIcon />
              {t.logOut}
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
