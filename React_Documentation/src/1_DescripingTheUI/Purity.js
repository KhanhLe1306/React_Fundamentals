


export default function CLock({ time }) {
    let hours = time.getHours();
    let className = hours >= 0 && hours <= 6
        ?  'night' 
        :  'day'
    return (
        <h1 className={className}>
            {time.toLocaleTimeString()}
        </h1>
    )
}
