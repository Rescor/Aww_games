import styles from "./InfoSection.module.css";

export default function InfoSection(props) {
    return <div className={styles.about}>
        <p className={styles.title}>Информация о сервере</p>
        <p>Адрес: URL</p>
        <p>Чат в Telegram: URL</p>
        <p>Форум: URL</p>
    </div>
}