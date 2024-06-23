import CustomFooter from "@/components/CustomFooter";
import CustomMenuBar from "@/components/CustomMenuBar";

import "./globals.css";

import importedStyles from "./layout.module.css";

export const metadata = {
  title: "@macroing/simple-react-components example",
  description: "",
};

export default function RootLayout({ children }) {
  const styles = importedStyles;

  return (
    <html lang="en">
      <body>
        <CustomMenuBar />
        <div className={styles.content}>{children}</div>
        <CustomFooter />
        <script async crossOrigin="anonymous" samesite="None Secure" src="https://kit.fontawesome.com/f3f524ba52.js"></script>
      </body>
    </html>
  );
}
