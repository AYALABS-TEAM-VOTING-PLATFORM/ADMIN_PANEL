import Image from "next/image";
import AvatarImage from "@/public/profile.svg"
const Avatar = ({width, height, onClick}) => {
    return(
        <>
            <div>
                <Image
                   src={AvatarImage}
                   width={width}
                    height={height}
                    onClick={onClick}
                    alt="UploadAvatar"
                    className="rounded-[8px] cursor-pointer"
                    
                />
            </div>
        </>
    )
}

export default Avatar;