import styles from "./NavLink.module.css";

export default function NavLink(props) {
    return <a href={props.href} className={styles.navLink}>{props.text}</a>
}