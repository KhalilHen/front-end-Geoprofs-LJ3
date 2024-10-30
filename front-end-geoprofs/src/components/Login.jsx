function HeaderNormal() {

    return (
      <div className="w-full h-full content-center flex flex-wrap justify-center">
        <div className="bg-[#fff] w-[300px] h-[500px] border-solid border-[#A7A7A7] border-[1px]">
            <div className="w-full h-[150px]"></div>
            <div className="w-full h-[100px] flex flex-col content-center flex-wrap">
                <h1 className="text-xl text-center">E-mail / ID</h1>
                <input className="w-4/5 h-[40px] border-solid border-[#A7A7A7] border-[1px] p-[10px]" type="text" />
            </div>
            <div className="w-full h-[100px]  flex flex-col content-center flex-wrap">
                <h1 className="text-xl text-center">Wachtwoord</h1>
                <input className="w-4/5 h-[40px] border-solid border-[#A7A7A7] border-[1px] p-[10px]" type="text" />
            </div>
            <div className="w-full h-[150px] content-center flex flex-wrap justify-center">
                <button className="w-4/5 h-[40px] border-solid border-[#A7A7A7] border-[1px] p-[10px] rounded-full">Log In</button>
            </div>
        </div>
      </div>
    )
  }
  
  export default HeaderNormal
  