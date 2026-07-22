# SnipCode - Complete Feature List

## 🎨 Core Features

### Theme System
- **16 Beautiful Themes** - Candy, Midnight, Sunset, Ocean, Aurora, Forest, Rose, Peach, Lavender, Citrus, Neon, Crimson, Arctic, Sand, Blossom, Charcoal
- **Scattered Theme Picker** - Beautiful animated theme selection with scattered pills
- **Dynamic Preview** - Real-time theme preview in the UI

### Editor Customization
- **Dark/Light Mode** - Toggle between dark and light editor modes
- **Background Toggle** - Show/hide gradient background
- **Line Numbers** - Toggle line number visibility
- **Padding Options** - 16px, 32px, 64px, 128px padding presets
- **Font Selection** - JetBrains Mono, Fira Code, Source Code Pro, System Mono
- **Language Support** - 33+ programming languages with auto-detection

## 🆕 NEW Advanced Features

### Window Frame Styles
- **macOS Frame** - Classic macOS traffic light buttons (red, yellow, green)
- **Windows Frame** - Windows-style minimize, maximize, close buttons
- **No Frame** - Frameless window for minimal look
- **Customizable** - Switch between styles instantly

### Shadow Intensity Control
- **None** - No shadow for flat design
- **Low** - Subtle shadow (15px blur)
- **Medium** - Standard shadow (30px blur) - Default
- **High** - Dramatic shadow (50px blur)
- **Smart Application** - Only applies when background is visible

### Aspect Ratio Presets
- **Free** - No constraints, resize freely
- **Square (1:1)** - Perfect squares for avatars
- **Twitter (16:9)** - Optimized for Twitter posts
- **Instagram (4:5)** - Instagram-friendly dimensions
- **LinkedIn (1.91:1)** - Professional LinkedIn posts

### Line Highlighting
- **Interactive Highlighting** - Alt/Ctrl + Click on line numbers to highlight
- **Multiple Lines** - Highlight multiple lines simultaneously
- **Visual Emphasis** - Purple highlight with increased contrast
- **State Persistence** - Highlights saved in URL state

### Watermark System
- **Custom Text** - Add your own watermark text (up to 50 chars)
- **Toggle On/Off** - Enable/disable watermark for exports
- **Auto-positioning** - Watermark appears bottom-right on exports
- **Non-intrusive** - Subtle opacity for professional look

### URL State Management
- **Shareable Links** - Complete configuration saved in URL
- **Copy URL Button** - One-click URL copying
- **Auto-sync** - All changes automatically update URL
- **Parameters Saved**:
  - Theme, dark mode, background, line numbers
  - Padding, font, language
  - Window frame, shadow intensity, aspect ratio
  - Highlighted lines

### Markdown Export
- **Copy as Markdown** - Export code in markdown code block format
- **Language Tags** - Automatically adds correct language identifier
- **Quick Access** - Available in export menu
- **Clipboard Ready** - Paste directly into GitHub, docs, etc.

### Preset System
- **Save Presets** - Save your favorite configurations
- **Load Presets** - Quickly switch between saved presets
- **Local Storage** - Presets stored in browser
- **Named Presets** - Give each preset a memorable name
- **Settings Saved**:
  - Theme, mode, background, lines, padding, font
  - Window frame, shadow, aspect ratio

## 📤 Export Options

### PNG Export
- **High Quality** - 2×, 4×, 6× scale options
- **Smart Rendering** - Optimized for dark themes
- **Image Smoothing** - High-quality anti-aliasing
- **Keyboard Shortcut** - ⌘S / Ctrl+S

### SVG Export
- **Vector Format** - Perfect for any size
- **Clean Code** - Properly formatted SVG
- **Keyboard Shortcut** - ⌘⇧S / Ctrl+Shift+S

### Copy to Clipboard
- **One-Click Copy** - Copy image directly to clipboard
- **Paste Anywhere** - Works in Slack, Discord, etc.
- **Keyboard Shortcut** - ⌘C / Ctrl+C (when not in editor)

## 🎯 Quality & Error Handling

### Robust Error Handling
- **Try-Catch Blocks** - All major functions wrapped
- **Console Logging** - Detailed error messages for debugging
- **User Feedback** - Toast notifications for all errors
- **Graceful Degradation** - Falls back to defaults on error
- **Safe Initialization** - Handles missing elements

### Error Messages
- `⚠️ Export failed - please try again` - Export errors
- `⚠️ Copy failed – try saving instead` - Clipboard errors
- `⚠️ Failed to copy URL` - URL copy errors
- `⚠️ Failed to save preset` - Preset save errors
- `⚠️ No saved presets` - When loading with no presets
- `⚠️ SVG export failed` - SVG generation errors

### Success Confirmations
- `✓ Saved as PNG` - PNG export success
- `✓ Saved as SVG` - SVG export success
- `✓ Copied to clipboard` - Image copy success
- `✓ URL copied to clipboard` - URL copy success
- `✓ Copied as Markdown` - Markdown export success
- `✓ Preset saved` - Preset save success
- `✓ Loaded preset: [name]` - Preset load success

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `⌘S` / `Ctrl+S` | Export as PNG |
| `⌘⇧S` / `Ctrl+Shift+S` | Export as SVG |
| `⌘C` / `Ctrl+C` | Copy image to clipboard |
| `Alt + Click` | Highlight/unhighlight line |
| `Esc` | Close all menus and modals |
| `Tab` | Insert 2 spaces in editor |

## 🎨 UI/UX Enhancements

### Responsive Design
- **Mobile Optimized** - Two-row toolbar layout on mobile
- **Touch Friendly** - Large touch targets (32px minimum)
- **Bottom Sheets** - Dropdowns become bottom sheets on mobile
- **Adaptive Spacing** - Responsive padding and margins

### Visual Feedback
- **Hover States** - All interactive elements have hover effects
- **Active States** - Clear visual indication of selected options
- **Smooth Transitions** - Fluid animations throughout
- **Toast Notifications** - Non-intrusive feedback system

### Accessibility
- **Keyboard Navigation** - Full keyboard support
- **Focus Indicators** - Clear focus states
- **ARIA Labels** - Proper button labels
- **High Contrast** - Readable text on all backgrounds

## 🔧 Technical Implementation

### Performance
- **RequestAnimationFrame** - Smooth syntax highlighting
- **Debounced Updates** - Efficient state management
- **CSS Transitions** - GPU-accelerated animations
- **Lazy Loading** - On-demand dropdown rendering

### Code Quality
- **Modular Functions** - Single responsibility principle
- **Error Boundaries** - Isolated error handling
- **Type Safety** - Careful null/undefined checks
- **Clean Code** - Readable, maintainable structure

### Browser Compatibility
- **Modern Browsers** - Chrome, Firefox, Safari, Edge
- **Clipboard API** - ClipboardItem support
- **Canvas API** - html2canvas integration
- **LocalStorage** - For preset persistence

## 📱 Mobile Features

- **Touch Gestures** - Smooth touch interactions
- **Compact UI** - Space-efficient mobile layout
- **Bottom Sheets** - Native mobile dropdown experience
- **Responsive Text** - Smaller font sizes on mobile
- **Optimized Toolbar** - Two-row wrap layout

## 🚀 Future-Ready

The codebase is structured to easily add:
- Custom theme creation
- More export formats (JPEG, WebP)
- Cloud preset sync
- Collaborative editing
- Plugin system
- Advanced syntax highlighting options

## 💡 Usage Tips

1. **Quick Theme Switch** - Click theme button for instant theme selection
2. **Line Highlighting** - Hold Alt/Ctrl and click line numbers
3. **Share Configs** - Use "Copy Shareable URL" to share your setup
4. **Save Favorites** - Create presets for different use cases
5. **Social Media** - Use aspect ratio presets for perfect posts
6. **Branding** - Add watermark for consistent branding
7. **Professional Look** - Use Windows frame with high shadow for docs

## 🐛 Known Limitations

- Watermark only appears in exports (not in live preview)
- Presets stored locally (not synced across devices)
- Some older browsers may not support clipboard API
- Very long code may require manual width adjustment

## 📄 License

Free to use, modify, and share. Inspired by ray.so.
