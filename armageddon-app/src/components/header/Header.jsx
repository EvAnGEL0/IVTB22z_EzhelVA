import { Link } from "react-router-dom"
import styles from "./Header.module.css"
export const Header = ()=>{
 return <div className={styles.container}>
            <div>
                <h1>ARMAGGEDON V</h1>
                <div>Сервис мониторнинга и уничтоженитя астеройдов, онасно подлетающих кNBSPЗемле</div>
            </div>
            <div>
                <Link to={"/asteroids"}>Астероиды</Link>
                <Link to={"/destroymant"}>Уничтожение</Link>
            </div>
        </div>
}