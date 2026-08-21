export function text(content: string) {
  return { content: [{ type: "text" as const, text: content }] };
}

export function notFoundComponent(name: string) {
  return text(
    `Component "${name}" not found. Try "list_components" for valid names.`,
  );
}
