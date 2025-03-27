
import styles from "./AsteroidCard.module.css"
import { AsteroidCardContent } from "./AsteroidCardContent/AsteroidCardContent"
import { AsteroidCardAction } from "./AsteroidCardAction/AsteroidCardAction"
import { AsteroidCardImage } from "./AsteroidCardImage/AsteroidCardImage"

type AsteroidCardProps = {
    name: string;
    date: string;
    distance: {
      kilometers: number;
      lunar: number;
    };
    size: number;
    isDangerous: boolean;
    distanseMode:boolean;
  };

export const AsteroidCard =(props:AsteroidCardProps)=>{
    const {name, date, distance, size, isDangerous,distanseMode} = props;

    return <div className={styles.container}>
    <div className={isDangerous ? styles.cardRed : styles.regvlarCard}>
        <AsteroidCardImage />
       <AsteroidCardContent name={name} date={date} distance={distance} size={size} distanseMode={distanseMode}  /> 
       <AsteroidCardAction isDangerous={isDangerous}/>
    </div>
   
 </div>
}
