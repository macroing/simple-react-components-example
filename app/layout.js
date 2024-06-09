import { Button, Jumbotron } from "@macroing/simple-react-components";

import CustomFooter from "@/components/CustomFooter";
import CustomMenuBar from "@/components/CustomMenuBar";

import "./globals.css";

import importedStyles from "./layout.module.css";

export const metadata = {
  title: "Simple React Components Example",
  description: "",
};

export default function RootLayout({ children }) {
  const styles = importedStyles;

  return (
    <html lang="en">
      <body>
        <CustomMenuBar />
        <div className={styles.content}>
          <div className={styles.jumbotron}>
            <Jumbotron description="The official example website for @macroing/simple-react-components" title="Example">
              <Button theme="secondary">
                <span aria-hidden className="fa fa-github"></span> GitHub
              </Button>
            </Jumbotron>
          </div>
          <main className={styles.main}>{children}</main>
        </div>
        <CustomFooter />
        <script async crossOrigin="anonymous" samesite="None Secure" src="https://kit.fontawesome.com/f3f524ba52.js"></script>
      </body>
    </html>
  );
}
