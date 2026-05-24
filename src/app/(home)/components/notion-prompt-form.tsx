"use client";

import {
	AppWindow,
	ArrowUp,
	AtSign,
	Book,
	CirclePlus,
	Globe,
	Paperclip,
	Plus,
	X,
} from "lucide-react";
import { useMemo, useState } from "react";

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/registry/new-york-v4/ui/avatar";
import { Badge } from "@/registry/new-york-v4/ui/badge";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/registry/new-york-v4/ui/command";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu";
import { Field, FieldLabel } from "@/registry/new-york-v4/ui/field";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupTextarea,
} from "@/registry/new-york-v4/ui/input-group";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover";
import { Switch } from "@/registry/new-york-v4/ui/switch";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip";

const SAMPLE_DATA = {
	mentionable: [
		{
			type: "page",
			title: "Meeting Notes",
			image: "📝",
		},
		{
			type: "page",
			title: "Project Dashboard",
			image: "📊",
		},
		{
			type: "page",
			title: "Ideas & Brainstorming",
			image: "💡",
		},
		{
			type: "page",
			title: "Calendar & Events",
			image: "📅",
		},
		{
			type: "page",
			title: "Documentation",
			image: "📚",
		},
		{
			type: "page",
			title: "Goals & Objectives",
			image: "🎯",
		},
		{
			type: "page",
			title: "Budget Planning",
			image: "💰",
		},
		{
			type: "page",
			title: "Team Directory",
			image: "👥",
		},
		{
			type: "page",
			title: "Technical Specs",
			image: "🔧",
		},
		{
			type: "page",
			title: "Analytics Report",
			image: "📈",
		},
		{
			type: "user",
			title: "shadcn",
			image: "https://github.com/shadcn.png",
			workspace: "Workspace",
		},
		{
			type: "user",
			title: "maxleiter",
			image: "https://github.com/maxleiter.png",
			workspace: "Workspace",
		},
		{
			type: "user",
			title: "Maqed",
			image: "https://github.com/Maqed.png",
			workspace: "Workspace",
		},
	],
	models: [
		{
			name: "Auto",
		},
		{
			name: "Agent Mode",
			badge: "Beta",
		},
		{
			name: "Plan Mode",
		},
	],
};

function MentionableIcon({
	item,
}: {
	item: (typeof SAMPLE_DATA.mentionable)[0];
}) {
	return item.type === "page" ? (
		<span className="flex size-4 items-center justify-center">
			{item.image}
		</span>
	) : (
		<Avatar className="size-4">
			<AvatarImage src={item.image} />
			<AvatarFallback>{item.title[0]}</AvatarFallback>
		</Avatar>
	);
}

export function NotionPromptForm() {
	const [mentions, setMentions] = useState<string[]>([]);
	const [mentionPopoverOpen, setMentionPopoverOpen] = useState(false);
	const [modelPopoverOpen, setModelPopoverOpen] = useState(false);
	const [selectedModel, setSelectedModel] = useState<
		(typeof SAMPLE_DATA.models)[0]
	>(SAMPLE_DATA.models[0]);
	const [scopeMenuOpen, setScopeMenuOpen] = useState(false);
	const [webSearchSwitch, setWebSearchSwitch] = useState(true);
	const [appsSwitch, setAppsSwitch] = useState(true);

	const grouped = useMemo(() => {
		return SAMPLE_DATA.mentionable.reduce(
			(acc, item) => {
				const isAvailable = !mentions.includes(item.title);

				if (isAvailable) {
					if (!acc[item.type]) {
						acc[item.type] = [];
					}
					acc[item.type].push(item);
				}
				return acc;
			},
			{} as Record<string, typeof SAMPLE_DATA.mentionable>,
		);
	}, [mentions]);

	const hasMentions = mentions.length > 0;

	return (
		<form>
			<Field>
				<FieldLabel htmlFor="notion-prompt" className="sr-only">
					Prompt
				</FieldLabel>
				<InputGroup className="rounded-xl">
					<InputGroupTextarea
						id="notion-prompt"
						placeholder="Ask, search, or make anything..."
					/>
					<InputGroupAddon align="block-start" className="pt-3">
						<Popover
							open={mentionPopoverOpen}
							onOpenChange={setMentionPopoverOpen}
						>
							<Tooltip>
								<TooltipTrigger
									onFocusCapture={(e) => e.stopPropagation()}
									render={
										<PopoverTrigger
											render={
												<InputGroupButton
													variant="tertiary"
													size={!hasMentions ? "sm" : "icon-sm"}
													className="transition-transform"
												>
													<AtSign /> {!hasMentions && "Add context"}
												</InputGroupButton>
											}
										/>
									}
								/>
								<TooltipContent>Mention a person, page, or date</TooltipContent>
							</Tooltip>
							<PopoverContent className="p-0" align="start">
								<Command>
									<CommandInput placeholder="Search pages..." />
									<CommandList>
										<CommandEmpty>No pages found</CommandEmpty>
										{Object.entries(grouped).map(([type, items]) => (
											<CommandGroup
												key={type}
												heading={type === "page" ? "Pages" : "Users"}
											>
												{items.map((item) => (
													<CommandItem
														key={item.title}
														value={item.title}
														onSelect={(currentValue) => {
															setMentions((prev) => [...prev, currentValue]);
															setMentionPopoverOpen(false);
														}}
														className="rounded-lg"
													>
														<MentionableIcon item={item} />
														{item.title}
													</CommandItem>
												))}
											</CommandGroup>
										))}
									</CommandList>
								</Command>
							</PopoverContent>
						</Popover>
						<div className="no-scrollbar -m-1.5 flex gap-1 overflow-y-auto p-1.5">
							{mentions.map((mention) => {
								const item = SAMPLE_DATA.mentionable.find(
									(item) => item.title === mention,
								);

								if (!item) {
									return null;
								}

								return (
									<InputGroupButton
										key={mention}
										size="sm"
										variant="secondary"
										className="rounded-full pl-2!"
										onClick={() => {
											setMentions((prev) => prev.filter((m) => m !== mention));
										}}
									>
										<MentionableIcon item={item} />
										{item.title}
										<X />
									</InputGroupButton>
								);
							})}
						</div>
					</InputGroupAddon>
					<InputGroupAddon align="block-end" className="gap-1">
						<Tooltip>
							<TooltipTrigger
								render={
									<InputGroupButton
										size="icon-sm"
										variant="tertiary"
										aria-label="Attach file"
									>
										<Paperclip />
									</InputGroupButton>
								}
							/>
							<TooltipContent>Attach file</TooltipContent>
						</Tooltip>
						<DropdownMenu
							open={modelPopoverOpen}
							onOpenChange={setModelPopoverOpen}
						>
							<Tooltip>
								<TooltipTrigger
									render={
										<DropdownMenuTrigger
											render={
												<InputGroupButton variant="tertiary" size="sm">
													{selectedModel.name}
												</InputGroupButton>
											}
										/>
									}
								/>
								<TooltipContent>Select AI model</TooltipContent>
							</Tooltip>
							<DropdownMenuContent
								side="top"
								align="start"
								className="min-w-48"
							>
								<DropdownMenuGroup>
									<DropdownMenuLabel className="text-muted-foreground text-xs">
										Select Agent Mode
									</DropdownMenuLabel>
									{SAMPLE_DATA.models.map((model) => (
										<DropdownMenuCheckboxItem
											key={model.name}
											checked={model.name === selectedModel.name}
											onCheckedChange={(checked) => {
												if (checked) {
													setSelectedModel(model);
												}
											}}
											className="pl-2 *:[span:first-child]:right-2 *:[span:first-child]:left-auto"
										>
											{model.name}
											{model.badge && (
												<Badge variant="primary">{model.badge}</Badge>
											)}
										</DropdownMenuCheckboxItem>
									))}
								</DropdownMenuGroup>
							</DropdownMenuContent>
						</DropdownMenu>
						<DropdownMenu open={scopeMenuOpen} onOpenChange={setScopeMenuOpen}>
							<DropdownMenuTrigger
								render={
									<InputGroupButton variant="tertiary" size="sm">
										<Globe /> All Sources
									</InputGroupButton>
								}
							/>
							<DropdownMenuContent side="top" align="end" className="w-72">
								<DropdownMenuGroup>
									<DropdownMenuItem
										closeOnClick={false}
										onClick={() => {
											setWebSearchSwitch((prev) => !prev);
										}}
										render={
											<label htmlFor="web-search">
												<Globe /> Web Search{" "}
												<Switch
													id="web-search"
													className="ml-auto"
													checked={webSearchSwitch}
												/>
											</label>
										}
									/>
								</DropdownMenuGroup>
								<DropdownMenuSeparator />
								<DropdownMenuGroup>
									<DropdownMenuItem
										closeOnClick={false}
										onClick={() => {
											setAppsSwitch((prev) => !prev);
										}}
										render={
											<label htmlFor="apps">
												<AppWindow /> Apps and Integrations
												<Switch
													id="apps"
													className="ml-auto"
													checked={appsSwitch}
												/>
											</label>
										}
									/>
									<DropdownMenuItem>
										<CirclePlus /> All Sources I can access
									</DropdownMenuItem>
									<DropdownMenuSub>
										<DropdownMenuSubTrigger>
											<Avatar className="size-4">
												<AvatarImage src="https://github.com/shadcn.png" />
												<AvatarFallback>CN</AvatarFallback>
											</Avatar>
											shadcn
										</DropdownMenuSubTrigger>
										<DropdownMenuSubContent className="w-72 p-0 [--radius:1rem]">
											<Command>
												<CommandInput
													placeholder="Find or use knowledge in..."
													autoFocus
												/>
												<CommandList>
													<CommandEmpty>No knowledge found</CommandEmpty>
													<CommandGroup>
														{SAMPLE_DATA.mentionable
															.filter((item) => item.type === "user")
															.map((user) => (
																<CommandItem
																	key={user.title}
																	value={user.title}
																	onSelect={() => {
																		// Handle user selection here
																		console.log("Selected user:", user.title);
																	}}
																>
																	<Avatar className="size-4">
																		<AvatarImage src={user.image} />
																		<AvatarFallback>
																			{user.title[0]}
																		</AvatarFallback>
																	</Avatar>
																	{user.title}{" "}
																	<span className="text-muted-foreground">
																		- {user.workspace}
																	</span>
																</CommandItem>
															))}
													</CommandGroup>
												</CommandList>
											</Command>
										</DropdownMenuSubContent>
									</DropdownMenuSub>
									<DropdownMenuItem>
										<Book /> Help Center
									</DropdownMenuItem>
								</DropdownMenuGroup>
								<DropdownMenuSeparator />
								<DropdownMenuGroup>
									<DropdownMenuItem>
										<Plus /> Connect Apps
									</DropdownMenuItem>
									<DropdownMenuLabel className="text-muted-foreground text-xs">
										We&apos;ll only search in the sources selected here.
									</DropdownMenuLabel>
								</DropdownMenuGroup>
							</DropdownMenuContent>
						</DropdownMenu>
						<InputGroupButton
							aria-label="Send"
							className="ml-auto rounded-full"
							variant="default"
							size="icon-sm"
						>
							<ArrowUp />
						</InputGroupButton>
					</InputGroupAddon>
				</InputGroup>
			</Field>
		</form>
	);
}
