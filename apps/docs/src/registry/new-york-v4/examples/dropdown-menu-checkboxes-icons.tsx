"use client";

import { BellIcon, MailIcon, MessageSquareIcon } from "lucide-react";
import * as React from "react";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu";

export default function DropdownMenuCheckboxesIcons() {
  const [notifications, setNotifications] = React.useState({
    email: true,
    sms: false,
    push: true,
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="tertiary" />}>
        Notifications
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Notification Preferences</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={notifications.email}
            onCheckedChange={(checked) =>
              setNotifications((prev) => ({
                ...prev,
                email: checked === true,
              }))
            }
          >
            <MailIcon />
            Email notifications
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={notifications.sms}
            onCheckedChange={(checked) =>
              setNotifications((prev) => ({
                ...prev,
                sms: checked === true,
              }))
            }
          >
            <MessageSquareIcon />
            SMS notifications
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={notifications.push}
            onCheckedChange={(checked) =>
              setNotifications((prev) => ({
                ...prev,
                push: checked === true,
              }))
            }
          >
            <BellIcon />
            Push notifications
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
