import { Button, Form, Input } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function FormPage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.page}>
      <Form>
        <h2>Form</h2>
        <div>
          <label>Input 1</label>
          <Input />
        </div>
        <div>
          <div>
            <div>
              <label>Input 2</label>
              <Input />
            </div>
            <div>
              <label>Input 3</label>
              <Input />
            </div>
          </div>
        </div>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}
