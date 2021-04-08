import Link from "next/link";
import styles from "./button.module.css";

const Buttun = (props) => {
  return (
    <>
      <Link href={props.link}>
        <a className={styles.btn}>{props.children}</a>
      </Link>
    </>
  );
};

export default Buttun;
