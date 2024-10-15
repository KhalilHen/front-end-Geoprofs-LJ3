function FrontPage() {
    return (
    <div className="w-full h-[calc(100vh-140px)] flex">
        <div className="w-4/5 h-full bg-[#FF0000]">
            <div className="w-full h-[200px] bg-[#FF00FF]">
                <div className="w-full h-1/2 bg-[#FFFF00] flex">
                    <div className="w-1/4 h-full bg-[#00FFFF]"></div>
                    <div className="w-3/4 h-full bg-[#FFFF00]"></div>
                </div>
                <div className="w-full h-1/2 bg-[#FF00FF] flex">
                    <div className="w-1/4 h-full bg-[#FFFF00]"></div>
                    <div className="w-3/4 h-full bg-[#00FFFF]"></div>
                </div>
            </div>
            <div className="w-full h-[calc(100vh-340px)] bg-[#FFFFFF] overflow-y-scroll">
                <div className="w-full h-[100px] bg-[#FF0000]"></div>
                <div className="w-full h-[100px] bg-[#0000FF]"></div>
                <div className="w-full h-[100px] bg-[#FF0000]"></div>
                <div className="w-full h-[100px] bg-[#0000FF]"></div>
                <div className="w-full h-[100px] bg-[#FF0000]"></div>
                <div className="w-full h-[100px] bg-[#0000FF]"></div>
                <div className="w-full h-[100px] bg-[#FF0000]"></div>
                <div className="w-full h-[100px] bg-[#0000FF]"></div>
                <div className="w-full h-[100px] bg-[#FF0000]"></div>
                <div className="w-full h-[100px] bg-[#0000FF]"></div>
                <div className="w-full h-[100px] bg-[#FF0000]"></div>
            </div>
        </div>
        <div className="w-1/5 h-full bg-[#00FF00]">
        <div className="w-full h-[100px] bg-[#FF00FF]"></div>
        </div>
    </div>
    )
  }
  
  export default FrontPage
  