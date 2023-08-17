import styles from "./InfoSection.module.css";
import NavLink from "./NavLink/NavLink";
import { t } from "i18next";

export default function InfoSection(props) {
    let links = [];
    let isWrapped = props.game.id === "main";

    for (let link of props.game.links) {
        links.push(<NavLink href={link.url} text={link.name} key={link.name} />)
    }

    return <div className={styles.content}>
            <div className={styles.about}>
                <div className={isWrapped ? styles.wrapper : styles.secondaryWrapper}>
                    <p className={styles.subtitle}>{props.game.subtitle}<br />{props.game.secondSubtitle}</p>
                    <p className={styles.description}>{props.game.description}</p>
                    {props.game.address && <p className={styles.description}>{t("server_address") + props.game.address}</p>}
                    {[...links]}
                    <p className={styles.description}>{props.game.secondDescription}</p>
                </div>
            </div>
            <div className={styles.discord}>
                <iframe src="https://discordapp.com/widget?id=281902877239279617&theme=dark" width="350" height="500"
                        frameBorder="0" className="discord"></iframe>
            </div>
        </div>
}