
import styles from "./AsteroidCard.module.css"
import { AsteroidCardContent } from "./AsteroidCardContent/AsteroidCardContent"
import { AsteroidCardAction } from "./AsteroidCardAction/AsteroidCardAction"
import { AsteroidCardImage } from "./AsteroidCardImage/AsteroidCardImage"

export const AsteroidCard =(props)=>{
    const {name, date, distance, size, isDangerous} = props;

    return <div className={styles.card}>
    <div className={isDangerous ? styles.cardRed : styles.regvlarCard}>
        <AsteroidCardImage />
       <AsteroidCardContent name={name} date={date} distance={distance} size={size}  /> 
       <AsteroidCardAction isDangerous={isDangerous}/>
    </div>
   
 </div>
}
