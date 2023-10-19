import Link from "next/link"
import { usePathname } from "next/navigation"
import MenuItem from "./MenuItem"
import MenuItemFollow from "./MenuItemFollow"
import { useEffect } from "react"
import { useUser } from "@/app/context/user"
import ClientOnly from "@/app/components/ClientOnly"
import { useGeneralStore } from "@/app/stores/general"
import styles from './SideNav.module.css'

export default function SideNavMain() {

    let { setRandomUsers, randomUsers} = useGeneralStore()

    const contextUser = useUser()
    const pathname = usePathname()

    useEffect(() => { setRandomUsers() }, [])
    return (
        <>
            <div 
                id="SideNavMain" 
                className={`fixed left-0 z-20 bg-[#0f0d2c] pt-[70px] h-full lg:border-l-0 border-l w-[75px] overflow-auto ${pathname === '/' ? 'lg:w-[310px]' : 'lg:w-[220px]'} `}   
                >
       
                
                <div id="a" className="lg:w-full w-[55px] mx-auto">
                    <Link href="/">
                        <MenuItem 
                            iconString="For You" 
                            colorString={pathname == '/' ? 'white' : ''} 
                            sizeString="25"
                        />
                    </Link>
                    <MenuItem iconString="Following" colorString="#fff" sizeString="25"/>
                    <MenuItem iconString="LIVE" colorString="white" sizeString="25"/>

                    <div className="border-b lg:ml-2 mt-2" />
                    <h3 className="lg:block hidden text-xs text-white font-semibold pt-4 pb-2 px-2">Suggested accounts</h3>

                    <div className="lg:hidden block pt-3" />
                    <ClientOnly>
                        <div className="cursor-pointer">
                            {randomUsers?.map((user, index) => ( 
                                <MenuItemFollow key={index} user={user} /> 
                            ))}
                        </div>
                    </ClientOnly>

                    <button className="lg:block hidden text-white pt-1.5 pl-2 text-[13px]">See all</button>

                    {contextUser?.user?.id ? (
                        <div >
                            <div className="border-b lg:ml-2 mt-2" />
                            <h3 className="lg:block hidden text-xs text-white font-semibold pt-4 pb-2 px-2">Following accounts</h3>

                            <div className="lg:hidden block pt-3" />
                            <ClientOnly>
                                <div className="cursor-pointer">
                                    {randomUsers?.map((user, index) => ( 
                                        <MenuItemFollow key={index} user={user} /> 
                                    ))}
                                </div>
                            </ClientOnly>

                            <button className="lg:block hidden text-white pt-1.5 pl-2 text-[13px]">See more</button>
                        </div>
                    ) : null}
                    <div className="lg:block hidden border-b lg:ml-2 mt-2" />

                    <div className="lg:block hidden text-[11px] text-white">
                        <p className="pt-4 px-2 text-white">About Newsroom TikTok Shop Contact Careers ByteDance</p>
                        <p className="pt-4 px-2 text-white">TikTok for Good Advertise Developers Transparency TikTok Rewards TikTok Browse TikTok Embeds</p>
                        <p className="pt-4 px-2 text-white">Help Safety Terms Privacy Creator Portal Community Guidelines</p>
                        <p className="pt-4 px-2 text-white">© 2023 TikTok</p>
                    </div>

                    <div className="pb-14"></div>
                </div>

            </div>
        </>
    )
}
