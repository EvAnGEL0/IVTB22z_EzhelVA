

export const AsteroidCardContent = (props) => {
    const {name, date, distance, size} = props;

    return ( <div>
        <div className="">{name}</div>
        <div className="">{`Дата: ${date}`}</div>
        <div className="">{`Растояние: ${distance} км`}</div>
        <div className="">{`Размер: ${size} м`}</div>
    </div>
    )
}