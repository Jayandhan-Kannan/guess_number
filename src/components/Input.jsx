export function Button({children,Click})
{
    return(
        <button onClick={Click}>{children}</button> 
        
    )
}
export function H2({id,children})
{
    return(
        <h2 id={id}>{children}</h2>
    )
}