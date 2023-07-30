
export const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="w-[41px] h-[45px] pb-[7px] bg-lime-600 rounded-lg shadow border-white border-[3px] justify-center items-center gap-2.5 hover:brightness-110" >
      <div div className="w-[35px] h-[35px] bg-lime-500 rounded-[5px] shadow justify-center items-center flex" >
        {children}
      </div>
    </button>
  )
}
