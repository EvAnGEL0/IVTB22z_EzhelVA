import { Link } from "react-router-dom"
import styles from "./Header.module.css"
export const Header =()=>{
    return <div className={styles.container}>
            <div >
                <h1>ARMAGGEDON V</h1>
                <div><p>Сервис мониторнинга и уничтожения астеройдов, опасно приближающихся к Земле.</p></div>
            </div>
            <div className={styles.Link}>
                <p>
                <Link to={"/asteroids"}>Астероиды</Link> / <Link to={"/desroyment"}>Уничтожение</Link>
                </p>
            </div>
    </div>
}