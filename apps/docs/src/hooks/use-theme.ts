"use client";

import { useTheme } from "next-themes";
import * as React from "react";

export function useThemeToggle() {
	const { setTheme, resolvedTheme } = useTheme();

	const toggleTheme = React.useCallback(() => {
		setTheme(resolvedTheme === "dark" ? "light" : "dark");
	}, [resolvedTheme, setTheme]);

	// Listen for the D key to toggle theme.
	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (
				(e.key === "d" || e.key === "D") &&
				!e.metaKey &&
				!e.ctrlKey &&
				!e.altKey
			) {
				if (
					(e.target instanceof HTMLElement && e.target.isContentEditable) ||
					e.target instanceof HTMLInputElement ||
					e.target instanceof HTMLTextAreaElement ||
					e.target instanceof HTMLSelectElement
				) {
					return;
				}

				e.preventDefault();
				toggleTheme();
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, [toggleTheme]);

	return { toggleTheme };
}
