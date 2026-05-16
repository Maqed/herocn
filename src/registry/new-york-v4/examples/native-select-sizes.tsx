import {
	NativeSelect,
	NativeSelectOption,
} from "@/registry/new-york-v4/ui/native-select";

export default function NativeSelectSizes() {
	return (
		<div className="flex w-full max-w-sm flex-col items-center justify-center gap-4">
			<NativeSelect size="default">
				<NativeSelectOption value="">Default</NativeSelectOption>
				<NativeSelectOption value="apple">Apple</NativeSelectOption>
				<NativeSelectOption value="banana">Banana</NativeSelectOption>
				<NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
			</NativeSelect>
			<NativeSelect size="sm">
				<NativeSelectOption value="">Small</NativeSelectOption>
				<NativeSelectOption value="apple">Apple</NativeSelectOption>
				<NativeSelectOption value="banana">Banana</NativeSelectOption>
				<NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
			</NativeSelect>
		</div>
	);
}
