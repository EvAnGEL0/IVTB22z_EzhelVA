export const AsteroidCardAction =({isDangerous})=>{
    return(
        <div>
            <div className="">{`Оценка: ${isDangerous ? 'опасен': 'не опасен'}`}</div>
            <button className="">
            <div className="">На уничтожение</div>
            </button>
        </div>
    )
}