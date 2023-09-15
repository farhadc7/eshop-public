import Link from "next/link";

const NavigateMobile = () => {
  
    const items=[
    {
        id:1,
        title:"Home",
        icon:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
        pathname:"/"
    },
    {
        id:2,
        title:"Links",
        icon:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
        pathname:"/Links"
    },
    {
        id:3,
        title:"Searh",
        icon:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
        pathname:"/Searh"
    },
    {
        id:4,
        title:"Profile",
        icon:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
        pathname:"/Profile"
    }
  ]
    return (
        <div className="w-full nav_mobile  flex justify-center items-center fixed md:hidden bottom-0 h-[60px] bg-white z-30 py-3 px-2">
{items.map((item)=>(
    <div key={item.id} className={`w-1/4 navigate_mobile ${item.pathname == "/" ? "bg-bgHeader rounded-3xl " : "" }`} id={item.id} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                <span className={`px-2 ${item.pathname == "/" ? "" : "hidden" }`}>{item.title}</span>
            </div>

))}
    
        </div>
    )
}
export default NavigateMobile;