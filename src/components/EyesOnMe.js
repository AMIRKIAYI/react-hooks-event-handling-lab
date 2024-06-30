// Code EyesOnMe Component Here
function EyesOnMe(){
    function handleFocus(){
        console.log('Good!')
    }
    function handleBlur(){
        console.log('Hey! Eyes on me!')
    }
    return(
        <button text='Eyes on me' onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>

    )
}
export default EyesOnMe;