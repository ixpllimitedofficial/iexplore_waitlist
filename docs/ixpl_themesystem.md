### Color System

* **Brand Colors:**
  * Gold: `#FFC000`, `#FFD700`, `#E1B141`, `#D7B500`
  * Brand Dark: `hsl(0 0% 5%)`
  * Brand Dark Neutral: `hsl(0 0% 5%)`
* **Tailwind Custom Colors:**
  * [gold-500](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html): `#FFC000`
  * [gold-800](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html): `#FFD7004D`
  * [brandGold](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html): `hsl(var(--brand-gold))`
  * [brandDark](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html): `hsl(var(--brand-dark))`
  * [brandDarkNeutral](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html): `hsl(var(--brand-dark-neutral))`
* **Other Colors:**
  * Background: `hsl(var(--background))`
  * Foreground: `hsl(var(--foreground))`
  * Card: `hsl(var(--card))`
  * Popover: `hsl(var(--popover))`
  * Primary: `hsl(var(--primary))`
  * Secondary: `hsl(var(--secondary))`
  * Muted: `hsl(var(--muted))`
  * Destructive: `hsl(var(--destructive))`
  * Border: `hsl(var(--border))`
  * Input: `hsl(var(--input))`
* **Direct Hex Usage:**
  * Gray: `#4D4D4D`, `#B0B0B0`, `#D1D1D1`, `#23232325`
  * Success: `#28A745`
  * Chart: `#FFD700`, `#C4C400`, `#5C5C00`

### Theme

* **Light/Dark Mode:** Uses Tailwind's [darkMode: [&#34;class&#34;]](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html) and CSS variables for theme switching.
* **CSS Variables:** Defined in [globals.css](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html) for easy theme management.
* **Component Classes:** Many components use Tailwind classes and custom variables for colors and backgrounds.

### Font Types

* **Google Fonts Used:**
  * Manrope (primary, set in `<html>` via [manrope.className](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html))
  * Inter
  * Anton (for headings or emphasis)
* **Tailwind Custom Font:**
  * [neueMontreal](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html) (defined in [tailwind.config.ts](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html))

### Other Design Constants

* **Border Radius:** Controlled by CSS variable `--radius` (default: `0.5rem`)
* **Box Shadows, Gradients:** Custom backgrounds and gradients in Tailwind config.
* **Input Styling:** Custom class for inputs, e.g. `.inputStylings` uses gold border and gray placeholder.
* **Component Styles:** Many components use custom classes for rounded corners, padding, and color.

### Example Usage

* Buttons, badges, navbars, and cards use combinations of the above colors and fonts.
* Gold is used for highlights, CTAs, and important UI elements.
* Manrope is the main font for body and headings, with Inter and Anton for accent or special cases.
