import { TwoColumnLayout } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function TwoColumnLayoutPage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.page}>
      <TwoColumnLayout
        column1={
          <>
            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae libero vulputate ipsum consectetur elementum eu sit amet odio. Mauris quis varius augue. Morbi ante urna, tempor eget mi nec, volutpat pretium dolor. Aenean luctus libero nec lacus semper, a pretium elit efficitur. Aliquam eu neque ac ex rhoncus rhoncus ut iaculis libero. Nulla sodales erat ac dictum viverra. In ut purus consequat, mattis sapien vel, condimentum tortor. Aenean vitae risus vel ante tincidunt ultrices. Aenean tincidunt sem ac cursus aliquam. Suspendisse commodo leo ex, scelerisque mollis lectus gravida quis. Integer id dapibus sapien. Morbi sed lectus sed dolor commodo tempus. Nam fermentum consectetur turpis nec ullamcorper. Donec maximus sed tortor et luctus. Curabitur sed ex gravida, auctor neque sit amet, malesuada urna.</p>
          </>
        }
        column2={
          <>
            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae libero vulputate ipsum consectetur elementum eu sit amet odio. Mauris quis varius augue. Morbi ante urna, tempor eget mi nec, volutpat pretium dolor. Aenean luctus libero nec lacus semper, a pretium elit efficitur. Aliquam eu neque ac ex rhoncus rhoncus ut iaculis libero. Nulla sodales erat ac dictum viverra. In ut purus consequat, mattis sapien vel, condimentum tortor. Aenean vitae risus vel ante tincidunt ultrices. Aenean tincidunt sem ac cursus aliquam. Suspendisse commodo leo ex, scelerisque mollis lectus gravida quis. Integer id dapibus sapien. Morbi sed lectus sed dolor commodo tempus. Nam fermentum consectetur turpis nec ullamcorper. Donec maximus sed tortor et luctus. Curabitur sed ex gravida, auctor neque sit amet, malesuada urna.</p>
          </>
        }
      />
    </div>
  );
}
