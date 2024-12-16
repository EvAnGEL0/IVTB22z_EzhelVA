
import { Header } from "../components/header/Header"
import { AsteroidCard } from "../components/AsteroidCard/AsteroidCard";

import styles from "../static/css/style.css"
import { useEffect, useState } from "react";

export const Asteroids =()=>{

   
    const [asteroids] = useState(generateAsteroids())
    const [onlyDangerous, setOnlyDangerous] = useState(false)
    const [distanseMode, setDistanseMode] = useState(false)
    
    //хук эффект
    useEffect(()=>{
        const result = fetch("https://api.nasa.gov/neo/rest/v1/feed?api_key=DEMO_KEY").then((res)=>{
            return res.json()
        }).then((asteroids)=>{console.log(asteroids)})
        
    },[])

   




    return <div className={styles.container}>
        <Header />
        <div onClick={() =>  setOnlyDangerous(!onlyDangerous)}>
            <input type="checkbox" value={onlyDangerous} onChange={()=>setOnlyDangerous(!onlyDangerous)}></input> Показать только опасные
        </div>
        <div>Растояние <button onClick={()=>setDistanseMode(true)}>в километрах</button>,
         <button onClick={()=>setDistanseMode(false)}>в дистанциях от луны</button></div>

      

         { onlyDangerous ?
         asteroids.filter((item)=>item.isDangerous).map((item)=><AsteroidCard {...item}/>) : 
         asteroids.map((item)=><AsteroidCard {...item}/>)
         }      
        </div>
}
//автоматическая генерация 
const generateAsteroids =()=>{
    const months =[
        'январь',
        'февраль',
        'март',
        'апрель',
        'май',
        'июнь',
        'июль',
        'август',
        'сентябрь',
        'октябрь',
        'ноябрь',
        'декабрь',
    ];
    const characters  = "qwerasdfzxcvtyuighjkbnmopl";
    const result = [];
    
    for (let i=0; i < 10; i++ ){
        const name = characters[(Math.random()*25).toFixed(0)]+characters[(Math.random()*25).toFixed(0)]+characters[(Math.random()*25).toFixed(0)]+characters[(Math.random()*25).toFixed(0)];
        const date = `${(Math.random()*27+1).toFixed(0)} ${months[(Math.random()*11).toFixed(0)]} 2023 ` ;
        const size = (Math.random()*100+10).toFixed(0);
        const distance = (Math.random()*9000000000).toFixed(0);
        const isDangerous = Math.random() < 0.5 ? false : true;
        result.push ({name, date, size, distance, isDangerous});    
    }
    return result;
}
