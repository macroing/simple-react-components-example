import { Carousel } from "@macroing/simple-react-components";

import importedStyles from "./page.module.css";

export default function CarouselPage(props) {
  const styles = props.styles || importedStyles;

  return (
    <div className={styles.page}>
      <Carousel items={[<img alt="" src="/Image.jpg" />, <img alt="" src="/Image-2.jpg" />, <img alt="" src="/Image-3.jpg" />]} style={{ height: "300px", width: "100%" }} />
    </div>
  );
}
