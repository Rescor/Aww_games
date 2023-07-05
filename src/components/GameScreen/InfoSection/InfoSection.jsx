import styles from "./InfoSection.module.css";
import NavLink from "./NavLink/NavLink";

export default function InfoSection(props) {
    if (true) return <>
        <div className={styles.content}>
            <div className={styles.description}>
                <div className={styles.wrapper}>
                    <p className={styles.subtitle}>Добро пожаловать в игровой хаб!<br />
                        Это место содержит список всех наших игровых серверов.</p>
                    <p className={styles.about}>Здесь мы собираемся вместе и играем во что-нибудь весёлое и приятное :3</p>

                    <NavLink href={"https://steamcommunity.com/groups/tlpe/"} text={"Наша Steam-группа"} />
                    <NavLink href={"https://discord.com/invite/kDygPTm"} text={"Discord-сервер"} />
                    <NavLink href={"https://tlpe.ru/"} text={"tlpe.ru"} />
                    <NavLink href={"https://netstalking.ru/"} text={"netstalking.ru"} />
                    <NavLink href={"https://aww.xyz/"} text={"aww.xyz"} />
                    <p className={styles.about}>Присоединяйтесь к нам! Мы рады новым людям =)</p>
                </div>
            </div>
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