export default function FatmDeposite({onChange, isDeposite}) {
    const choice = ['Deposite', 'CashBack']
    console.log(`ATM isDeposite: ${isDeposite}`)
    return(
        <label htmlFor="">
            <h3>{choice[Number(!isDeposite)]}</h3>
            <input type="number" width='200' onChange={onChange} />
            <input type="submit" width='200' value='Submit' />
        </label>
    )
}