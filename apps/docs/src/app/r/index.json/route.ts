import { type NextRequest, NextResponse } from "next/server";
import { HEROCN_REGISTRY_STYLE } from "@/registry";

export const dynamic = "force-static";

export const GET = async (_: NextRequest) => {
	return NextResponse.json({
		name: "index",
		...HEROCN_REGISTRY_STYLE,
	});
};
