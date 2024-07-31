import styles from "./Card.module.css"
export const Card = ()=>{
    return <div className={styles.cuntainer}>
     

        <div>
            <p>Имя </p>
            <p>tecst</p>
        </div>
        <div>
            <p>Оценка:</p>
            <p>неопасен</p>
            <button>На уничтожение</button>
        </div>
    </div>

}