
import styles from "./AsteroidCard.module.css"
import { AsteroidCardContent } from "./AsteroidCardContent/AsteroidCardContent"
import { AsteroidCardAction } from "./AsteroidCardAction/AsteroidCardAction"
import { AsteroidCardImage } from "./AsteroidCardImage/AsteroidCardImage"
import { AsteroidCardContentContaier } from "./AsteroidCardContent/AsteroidCardContentContaier";

type AsteroidCardProps = {
    name: string;
    date: string;
    distance: {
      kilometers: number;
      lunar: number;
    };
    size: number;
    isDangerous: boolean;
  };



export const AsteroidCard =(props:AsteroidCardProps)=>{
    const {name, date, distance, size, isDangerous} = props;
 //   const caontextValue = useContext()
    return <div className={styles.container}>
    <div className={isDangerous ? styles.cardRed : styles.regvlarCard}>
        <AsteroidCardImage />
       <AsteroidCardContentContaier name={name} date={date} distance={distance} size={size}/> 
       <AsteroidCardAction isDangerous={isDangerous}/>
    </div>
   
 </div>
}
