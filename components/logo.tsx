import { Palette } from 'lucide-react';

const Logo = () => {
    return (
        <div className=" flex items-center  gap-1.5">
            <div className=" size-10 bg-linear-to-r from-primary to-chart-2 text-white flex-none rounded-full flex items-center justify-center">
                <Palette className=" size-6" />
            </div>
            <span className=' text-muted-foreground/30'>|</span>
            <p className=" text-xl font-extrabold tracking-wide leading-none ">
                OrbColors
            </p>

        </div>
    )
}

export default Logo