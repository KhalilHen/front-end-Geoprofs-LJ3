function CalanderRow() {
    return (
        <div className="w-full h-[100px] flex">
            <div className="w-1/4 h-full justify-center flex">
                <div className="w-4/5 h-full border-b-[1px] border-[#A7A7A7]">
                    <button>
                        <div className="w-[50px] h-[50px] bg-[#ff0000]"></div>
                        <p>John Doe</p>
                    </button>
                </div>
            </div>
            <div className="w-3/4 h-full">
            <table className="h-full w-full">
                <tr className="h-full w-full">
                    <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] border-t-0"></td>
                    <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] border-t-0"></td>
                    <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] border-t-0"></td>
                    <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] border-t-0"></td>
                    <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] border-t-0"></td>
                    <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] border-t-0"></td>
                    <td className="h-full w-[calc(100%/7)] border-solid border-[#A7A7A7] border-[1px] border-t-0"></td>
                </tr>
            </table>
            </div>
        </div>
    )
  }

  export default CalanderRow