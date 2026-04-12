"use client";

import {
  type Translations,
  useTranslation,
} from "@/components/language-selector";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york-v4/ui/dialog";
import { Field, FieldGroup } from "@/registry/new-york-v4/ui/field";
import { Input } from "@/registry/new-york-v4/ui/input";
import { Label } from "@/registry/new-york-v4/ui/label";

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      openDialog: "Open Dialog",
      editProfile: "Edit profile",
      description:
        "Make changes to your profile here. Click save when you're done.",
      name: "Name",
      username: "Username",
      cancel: "Cancel",
      saveChanges: "Save changes",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      openDialog: "فتح الحوار",
      editProfile: "تعديل الملف الشخصي",
      description:
        "قم بإجراء تغييرات على ملفك الشخصي هنا. انقر فوق حفظ عند الانتهاء.",
      name: "الاسم",
      username: "اسم المستخدم",
      cancel: "إلغاء",
      saveChanges: "حفظ التغييرات",
    },
  },
  he: {
    dir: "rtl",
    values: {
      openDialog: "פתח דיאלוג",
      editProfile: "ערוך פרופיל",
      description: "בצע שינויים בפרופיל שלך כאן. לחץ על שמור כשתסיים.",
      name: "שם",
      username: "שם משתמש",
      cancel: "בטל",
      saveChanges: "שמור שינויים",
    },
  },
};

export default function DialogRtl() {
  const { dir, language, t } = useTranslation(translations, "ar");

  return (
    <div lang={language} dir={dir}>
      <Dialog>
        <form>
          <DialogTrigger render={<Button variant="tertiary" />}>
            {t.openDialog}
          </DialogTrigger>
          <DialogContent
            dir={dir}
            data-lang={dir === "rtl" ? language : undefined}
            className="sm:max-w-sm"
          >
            <DialogHeader>
              <DialogTitle>{t.editProfile}</DialogTitle>
              <DialogDescription>{t.description}</DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <Label htmlFor="name-rtl">{t.name}</Label>
                <Input
                  variant="secondary"
                  id="name-rtl"
                  name="name"
                  defaultValue="Maged Ibrahim"
                />
              </Field>
              <Field>
                <Label htmlFor="username-rtl">{t.username}</Label>
                <Input
                  variant="secondary"
                  id="username-rtl"
                  name="username"
                  defaultValue="@0xMaqed"
                />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose render={<Button variant="tertiary" />}>
                {t.cancel}
              </DialogClose>
              <Button type="submit">{t.saveChanges}</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
