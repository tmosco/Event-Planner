import Link from "next/link";
import styles from "./button.module.css";

const Buttun = (props) => {
  let button;
  if (props.link) {
    button = (
      <Link href={props.link}>
        <a className={styles.btn}>{props.children}</a>
      </Link>
    );
  } else {
    button = (
      <button className={styles.btn} onClick={props.onClick}>
        {props.children}
      </button>
    );
  }

  return <>{button}</>;
};

export default Buttun;
