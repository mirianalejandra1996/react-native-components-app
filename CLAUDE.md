# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Expo (SDK 54) + React Native 0.81 learning project that showcases reusable UI components, animations and navigation patterns. New Architecture and React Compiler are enabled (`app.json` → `newArchEnabled`, `experiments.reactCompiler`). Routing is file-based via `expo-router` with typed routes (`experiments.typedRoutes`).

## Commands

Always start the dev server with cache reset (user preference):

```bash
npm start -- --reset-cache
```

Other scripts (from `package.json`):

- `npm run android` / `npm run ios` / `npm run web` — launch on a specific platform
- `npm run lint` — `expo lint` (flat ESLint config extending `eslint-config-expo/flat`)
- `npm run reset-project` — moves current `app/` to `app-example/` and creates a blank starter app

There is no test runner configured.

## Architecture

### Routing (`app/`)

`expo-router` file-based routing. `app/_layout.tsx` is the root `Stack` and dynamically registers every screen declared in `constants/Routes.ts` via `allRoutes`. To add a new screen:

1. Create `app/<feature>/index.tsx`.
2. Add an entry (`title`, `icon`, `name`) to one of the route arrays in `constants/Routes.ts` (`menuRoutes`, `uiMenuRoutes`, `animationMenuRoutes`) — the home screen (`app/index.tsx`) and the root `Stack` both consume these arrays, so the screen is wired automatically.
3. `name` must match the route path. For nested stacks (e.g. `modal`), point `name` at the directory (`"modal"`) and provide a nested `_layout.tsx` (see `app/modal/_layout.tsx`, which configures `presentation: "modal" | "fullScreenModal"` per child screen).
4. Title containing `"Slides"` hides the header — see the condition in `app/_layout.tsx`.

### Theming

Two coordinated layers:

- **`@react-navigation/native` ThemeProvider** in `app/_layout.tsx` selects `DarkTheme` / `DefaultTheme` from `useColorScheme()` (re-exported from `react-native` via `hooks/use-color-scheme.ts`, with a `.web.ts` variant).
- **`useThemeColor(props, colorName)`** (`hooks/use-theme-color.ts`) reads `constants/Colors.ts` for the active scheme, with per-call overrides via `{ light, dark }`. Use this inside themed primitives.
- **NativeWind / Tailwind** is configured in `tailwind.config.js` and exposes the same palette as `light-*` / `dark-*` classes (e.g. `bg-light-background dark:bg-dark-background`). `tailwind.config.js` imports from `constants/Colors.ts` so the palette stays in sync. `global.css` (imported from `app/_layout.tsx`) provides the Tailwind directives; `babel.config.js` enables NativeWind's JSX import source.

When building new screens, prefer the `Themed*` primitives in `presentation/shared/` (`ThemedView`, `ThemedText`, `ThemedButton`, `ThemedCard`, `ThemedInput`, `ThemedSwitch`) rather than wiring colors manually — they already consume `useThemeColor` and accept a `className` for NativeWind styling.

### Module aliases

`tsconfig.json` maps `@/*` to the repo root, so import as `@/hooks/...`, `@/constants/...`, `@/presentation/...`.

### Gestures & animations

`GestureHandlerRootView` wraps the whole app in `app/_layout.tsx`. `react-native-reanimated` is imported at the top of the root layout (required side-effect import). The legacy `Animated` API helper lives in `hooks/use-animation.ts` (`fadeIn`, `fadeOut`, `startMovingTopPosition`).

## Conventions

- Path alias `@/` instead of relative `../../` chains.
- `presentation/` holds UI; `app/` is routing-only — keep screens thin and delegate to `presentation/*`.
- Editor auto-runs `source.fixAll`, `source.organizeImports`, `source.sortMembers` on save (`.vscode/settings.json`); generated import order will reflect this.
