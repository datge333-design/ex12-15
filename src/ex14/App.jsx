import { ThemeProvider } from "./ThemeContext";
import Theme from "./Theme";

export default function App() {
  return (
    <ThemeProvider>
      <Theme />
    </ThemeProvider>
  );
}
