import {
	NativeSelect,
	NativeSelectOption,
} from "@/registry/new-york-v4/ui/native-select";
import { Surface } from "@/registry/new-york-v4/ui/surface";

export default function NativeSelectInSurface() {
	return (
		<Surface className="flex w-full max-w-sm flex-col gap-4 rounded-3xl p-6">
			<h4 className="font-medium text-sm">Settings</h4>
			<p className="text-muted-foreground text-sm">
				Configure your application preferences.
			</p>
			<NativeSelect className="w-full" variant="secondary">
				<NativeSelectOption value="">Select theme</NativeSelectOption>
				<NativeSelectOption value="light">Light</NativeSelectOption>
				<NativeSelectOption value="dark">Dark</NativeSelectOption>
				<NativeSelectOption value="system">System</NativeSelectOption>
			</NativeSelect>
		</Surface>
	);
}
