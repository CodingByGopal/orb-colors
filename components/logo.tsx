import Link from "next/link"
import { Brush } from "lucide-react"
const Logo = () => {
    return (
        <Link href="/" className=" flex items-center justify-center  gap-1.5">
            <div className=" rounded-lg text-primary-foreground bg-linear-to-r from-primary to-chart-2 size-8 flex items-center justify-center">
                <Brush className=" size-5 " />
            </div>
            <p className=" text-lg leading-none font-bold">OrbColors</p>
        </Link>

    )
}

export default Logo