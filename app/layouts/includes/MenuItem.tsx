"use client"

import { BiHomeHeart } from 'react-icons/bi'
import { RiGroupLine } from "react-icons/ri"
import { BsCameraVideo } from "react-icons/bs"
import { MenuItemTypes } from "@/app/types"

export default function MenuItem({ iconString, colorString, sizeString }: MenuItemTypes) {

    const icons = () => {
        if (iconString == 'For You') return <BiHomeHeart size={sizeString} color='white' />
        if (iconString == 'Following') return <RiGroupLine size={sizeString} color={colorString} />
        if (iconString == 'LIVE') return <BsCameraVideo size={sizeString} color={colorString} />
    }

    return (
        <>
            <div className="w-full flex items-center hover:opacity-50 p-2.5 rounded-md">
                <div className="flex items-center lg:mx-0 mx-auto">

                    {icons()}

                    <p className={`lg:block hidden pl-[9px] mt-0.5  text-[17px] text-white text-[${colorString}]`}>
                        {iconString}
                    </p>
                </div>
            </div>
        </>
    )
}
