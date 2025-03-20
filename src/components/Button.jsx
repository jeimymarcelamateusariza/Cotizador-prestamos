
function Button({operador, fn}) {
  return (
    <button 
        className='h-10 w-10 flex items-center font-bold bg-lime-500 rounded-full justify-center text-white hover:bg-lime-600 hover:outline-none hover:ring-1 hover:ring-offset-2 hover:ring-lime-500' 
        type='button' 
        onClick={fn}
    
    >{operador}</button>
  )
}

export default Button