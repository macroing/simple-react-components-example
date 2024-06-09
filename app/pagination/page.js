import { Pagination } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function PaginationPage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.page}>
      <Pagination items={500} itemsPerPage={20} maximumPagesPerSide={10} page={1} />
    </div>
  );
}
