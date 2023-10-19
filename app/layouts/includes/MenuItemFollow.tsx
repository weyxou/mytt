import useCreateBucketUrl from "@/app/hooks/useCreateBucketUrl"
import { MenuItemFollowCompTypes } from "@/app/types"
import Link from "next/link"
import { AiOutlineCheck } from "react-icons/ai"

export default function MenuItemFollow({ user }: MenuItemFollowCompTypes) {
    
    return (
        <>
            <Link 
                href={`/profile/${user?.id}`}
                className="flex items-center hover:opacity-75 rounded-md w-full py-1.5 px-2"
            >
                <img 
                    className="rounded-full lg:mx-0 mx-auto" 
                    width="35" 
                    src={useCreateBucketUrl(user?.image)}
                />
                <div className="lg:pl-2.5 lg:block hidden">
                    <div className="flex items-center">
                        <p className="font-bold text-[14px] truncate text-white">
                            {user?.name}
                        </p>
                        <p className="ml-1 rounded-full bg-[#58D5EC] h-[14px] relative">
                        </p>
                    </div>

                    <p className="font-light text-[12px] text-white">
                        {user?.name}
                    </p>
                </div>
            </Link>
        </>
    )
}
