import styles from "./InfoSection.module.css";
import NavLink from "./NavLink/NavLink";

export default function InfoSection(props) {
    if (true) return <>


        <div className={styles.content}>
            <p>Добро пожаловать в игровой хаб! Это место содержит список всех наших игровых серверов.</p>
            <NavLink href={"https://steamcommunity.com/groups/tlpe/"} text={"Наша группа Steam"} />
            <NavLink href={"https://steamcommunity.com/groups/tlpe/"} text={"Discord-сервер"} />
            <div className={styles.discord}>
                <iframe src="https://discordapp.com/widget?id=281902877239279617&theme=dark" width="350" height="500"
                        allowTransparency="true" frameBorder="0" className="discord"></iframe>
            </div>
        </div>


    </>
    return <div className={styles.about}>
        <p className={styles.title}>Информация о сервере</p>
        <p>Адрес: URL</p>
        <p>Чат в Telegram: URL</p>
        <p>Форум: URL</p>
    </div>
}