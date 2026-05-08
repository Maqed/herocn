# herocn Design System

Design tokens are defined in `theme.css`.

---

## Field Components

Applies to: `Input`, `Textarea`, `Select`, and similar.

### Variants

| Variant     | Background   | Shadow        |
| ----------- | ------------ | ------------- |
| `default`   | `bg-input`   | `shadow-xs`   |
| `secondary` | `bg-default` | `shadow-none` |

Communicate variant via `data-variant` attribute.

### States

**Hover** — brightness-based, suppressed during focus:

```
dark:brightness-100
hover:not-focus-visible:brightness-97
not-dark:data-[variant=secondary]:brightness-100
not-dark:hover:not-focus-visible:data-[variant=secondary]:brightness-96
dark:hover:not-focus-visible:brightness-110
```

**Focus** (valid):

```
not-aria-invalid:focus-visible:focus-field-ring
not-aria-invalid:focus-visible:ring-ring
```

**Invalid** — driven by `aria-invalid="true"`, never a class:

```
aria-invalid:not-focus-visible:invalid-field-ring
aria-invalid:focus-visible:invalid-field-ring-focus
```

**Disabled:**

```
disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50
```

### Base Shape

```
w-full min-w-0 rounded-xl px-2.5 py-1.5 md:px-3 md:py-2 text-sm
placeholder:text-muted-foreground transition-all outline-none
```

---

## Utilities (defined in `theme.css`)

| Utility                    | Usage                                        |
| -------------------------- | -------------------------------------------- |
| `focus-ring`               | Buttons, triggers — includes `ring-offset-2` |
| `focus-field-ring`         | Fields — no offset, hugs the boundary        |
| `invalid-field-ring`       | Outline-only error ring (unfocused)          |
| `invalid-field-ring-focus` | Ring error state (focused)                   |
| `pressible`                | `active:scale-[0.97]` press feedback         |

---

## Dark Mode

Applied via `.dark` class on an ancestor element. All components reference tokens only — never hardcoded colors.
