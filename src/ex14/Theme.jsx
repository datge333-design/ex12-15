import { useTheme } from "./ThemeContext";

export default function Theme() {
  const { theme, themeName, toggleTheme } = useTheme();

  return (
    <div style={{ background: theme.background, padding: 20 }}>
      <button
        onClick={toggleTheme}
        style={{
          background: theme.background,
          color: theme.foreground,
          border: `1px solid ${theme.foreground}`,
          padding: "8px 16px",
          cursor: "pointer",
        }}
      >
        I am styled by theme context! ({themeName})
      </button>
    </div>
  );
}
