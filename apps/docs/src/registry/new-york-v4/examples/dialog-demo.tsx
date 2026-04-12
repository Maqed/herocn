"use client";

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

export default function DialogDemo() {
  return (
    <Dialog>
      <form>
        <DialogTrigger render={<Button variant="tertiary" />}>
          Open Dialog
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input
                variant="secondary"
                id="name-1"
                name="name"
                defaultValue="Maged Ibrahim"
              />
            </Field>
            <Field>
              <Label htmlFor="username-1">Username</Label>
              <Input
                variant="secondary"
                id="username-1"
                name="username"
                defaultValue="@0xMaqed"
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="tertiary" />}>
              Cancel
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
