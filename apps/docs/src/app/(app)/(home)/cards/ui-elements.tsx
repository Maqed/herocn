"use client";

import { ArrowRightIcon, ArrowUpIcon, SearchIcon } from "lucide-react";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/registry/new-york-v4/ui/alert-dialog";
import { Badge } from "@/registry/new-york-v4/ui/badge";
import { Button } from "@/registry/new-york-v4/ui/button";
import { ButtonGroup } from "@/registry/new-york-v4/ui/button-group";
import { Card, CardContent } from "@/registry/new-york-v4/ui/card";
import { Checkbox } from "@/registry/new-york-v4/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu";
import { Field, FieldGroup } from "@/registry/new-york-v4/ui/field";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupText,
} from "@/registry/new-york-v4/ui/input-group";
import {
	RadioGroup,
	RadioGroupItem,
} from "@/registry/new-york-v4/ui/radio-group";
import { Switch } from "@/registry/new-york-v4/ui/switch";
import { Textarea } from "@/registry/new-york-v4/ui/textarea";

export function UIElements() {
	return (
		<Card className="w-full">
			<CardContent className="flex flex-col gap-6">
				<div className="flex gap-2">
					<Button>
						Button <ArrowRightIcon strokeWidth={2} data-icon="inline-end" />
					</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="outline">Outline</Button>
				</div>
				<FieldGroup>
					<Field>
						<InputGroup variant="secondary">
							<InputGroupInput placeholder="Name" />
							<InputGroupAddon align="inline-end">
								<InputGroupText>
									<SearchIcon strokeWidth={2} />
								</InputGroupText>
							</InputGroupAddon>
						</InputGroup>
					</Field>
					<Field className="flex-1">
						<Textarea
							variant="secondary"
							placeholder="Message"
							className="resize-none"
						/>
					</Field>
				</FieldGroup>
				<div className="flex items-center gap-2">
					<div className="flex gap-2">
						<Badge>Badge</Badge>
						<Badge variant="primary">Primary</Badge>
						<Badge variant="success" className="4xl:flex hidden">
							Success
						</Badge>
					</div>
					<RadioGroup
						variant="secondary"
						defaultValue="apple"
						className="ml-auto flex w-fit gap-3"
						aria-label="Fruit preference"
					>
						<RadioGroupItem value="apple" aria-label="Apple" />
						<RadioGroupItem value="banana" aria-label="Banana" />
					</RadioGroup>
					<div className="flex gap-3">
						<Checkbox
							variant="secondary"
							defaultChecked
							aria-label="Enable email alerts"
						/>
						<Checkbox
							variant="secondary"
							className="4xl:flex hidden"
							aria-label="Enable push alerts"
						/>
					</div>
					<Switch
						defaultChecked
						className="flex 4xl:hidden"
						aria-label="Enable compact notifications"
					/>
				</div>
				<div className="flex items-center gap-4">
					<AlertDialog>
						<AlertDialogTrigger render={<Button variant="outline" />}>
							<span className="hidden md:flex style-sera:md:hidden">
								Alert Dialog
							</span>
							<span className="flex style-sera:md:flex md:hidden">Dialog</span>
						</AlertDialogTrigger>
						<AlertDialogContent size="sm" className="theme-neutral">
							<AlertDialogHeader>
								<AlertDialogTitle>Allow accessory to connect?</AlertDialogTitle>
								<AlertDialogDescription>
									Do you want to allow the USB accessory to connect to this
									device and your data?
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel>Don&apos;t allow</AlertDialogCancel>
								<AlertDialogAction>Allow</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
					<ButtonGroup className="ml-auto">
						<Button variant="outline">
							<span className="style-sera:hidden">Button Group</span>
							<span className="style-sera:block hidden">Group</span>
						</Button>
						<DropdownMenu>
							<DropdownMenuTrigger
								render={
									<Button
										variant="outline"
										size="icon"
										aria-label="Open quick actions"
									/>
								}
							>
								<ArrowUpIcon strokeWidth={2} />
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end" side="top" className="w-40">
								<DropdownMenuGroup>
									<DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
									<DropdownMenuItem>Mute Conversation</DropdownMenuItem>
									<DropdownMenuItem>Mark as Read</DropdownMenuItem>
									<DropdownMenuItem>Block User</DropdownMenuItem>
								</DropdownMenuGroup>
								<DropdownMenuSeparator />
								<DropdownMenuGroup>
									<DropdownMenuItem variant="destructive">
										Delete Conversation
									</DropdownMenuItem>
								</DropdownMenuGroup>
							</DropdownMenuContent>
						</DropdownMenu>
					</ButtonGroup>
					<Switch
						defaultChecked
						className="4xl:flex hidden"
						aria-label="Enable advanced setting"
					/>
				</div>
			</CardContent>
		</Card>
	);
}
