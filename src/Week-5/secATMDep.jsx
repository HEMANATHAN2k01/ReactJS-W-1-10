export default function ATMDeposite({onChange}) {
    return( 
            <div className="">
                <input type="number" onChange={onChange} />
                <input type="submit" />
            </div>
    )
}