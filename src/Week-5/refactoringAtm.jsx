export default function ReDep({action,submit}) {
    return(
        <form onSubmit={submit} style={{width:'50%',margin:'2% auto'}}>
            <input type="number" name="" id="" onChange={action} />
                <button type="submit">Add</button>
        </form>
    )
}