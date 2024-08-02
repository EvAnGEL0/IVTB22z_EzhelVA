import { useParams } from "react-router-dom"
import { Header } from "../components/header/Header";

export const Asteroid = ()=>{
    const { id } = useParams(); //получаем обект из ссылки
    
    return <div>
        <Header/>
        {`Asteroid page: ${id}` }</div>
}