import Table from "../components/table"

function Message(){
    return(
        <div className="px-10! py-10! w-full h-[80vh]">
        <h1 className="text-white font-[Poppins] text-[24px] font-bold">Messages</h1>
        <br />
          <Table />
        </div>
    )
}
export default Message