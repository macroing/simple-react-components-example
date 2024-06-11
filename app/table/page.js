import { Table } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function TablePage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.page}>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>Jane</td>
            <td>Doe</td>
          </tr>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jörgen</td>
            <td>Lundgren</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
