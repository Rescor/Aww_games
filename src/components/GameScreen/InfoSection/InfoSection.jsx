import styles from "./InfoSection.module.css";
import NavLink from "./NavLink/NavLink";

export default function InfoSection(props) {
    console.log(props, 123)
    let links = [];
    for (let link of props.game.links) {
        links.push(<NavLink href={link.url} text={link.name} key={link.name} />)
    }

    if (props.game.name == "Игровой хаб TLPE / 49406") return <>
        <div className={styles.content}>
            <div className={styles.about}>
                <div className={styles.wrapper}>
                    <p className={styles.subtitle}>{props.game.subtitle}<br />{props.game.secondSubtitle}</p>
                    <p className={styles.description}>{props.game.description}</p>
                    {props.game.address && <p className={styles.description}>Адрес сервера: {props.game.address}</p>}
                    {[...links]}
                    <p className={styles.description}>{props.game.secondDescription}</p>
                </div>
            </div>
            <div className={styles.discord}>
                <iframe src="https://discordapp.com/widget?id=281902877239279617&theme=dark" width="350" height="500"
                        allowTransparency="true" frameBorder="0" className="discord"></iframe>
            </div>
        </div>
    </>
    return <div className={styles.content}>
        <div className={styles.about}>
                <p className={styles.subtitle}>{props.game.subtitle}<br />{props.game.secondSubtitle}</p>
                <p className={styles.description}>{props.game.description}</p>
                {props.game.address && <p className={styles.description}>Адрес сервера: {props.game.address}</p>}
                {[...links]}
                <p className={styles.description}>{props.game.secondDescription}</p>
            </div>
        <div className={styles.discord}>
            <iframe src="https://discordapp.com/widget?id=281902877239279617&theme=dark" width="350" height="500"
                    allowTransparency="true" frameBorder="0" className="discord"></iframe>
        </div>
    </div>
}