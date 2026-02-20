import Link from "next/link"
import { Orbit } from "lucide-react"
const Logo = () => {
    return (
        <Link href="/" className=" flex items-center justify-center  gap-1">

            <Orbit className=" size-8 text-primary" />
            <p className=" text-2xl font-extrabold tracking-wide leading-none">OrbColors</p>
        </Link>

    )
}

export default Logo