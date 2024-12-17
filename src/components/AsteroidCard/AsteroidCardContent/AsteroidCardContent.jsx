

export const AsteroidCardContent = (props) => {
    const {name, date, distance, size, distanseMode} = props;

    return ( <div>
        <div className="">{name}</div>
        <div className="">{`Дата: ${date}`}</div>
        <div className="">
            {distanseMode ? `Растояние: ${distance.kilometers} км`: `Растояние: ${distance.lunar} лун`}
        </div>
        <div className="">{`Размер: ${size} м`}</div>
    </div>
    )
}