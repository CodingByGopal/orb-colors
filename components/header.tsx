import Logo from "./logo"
import { ThemeSwitch } from "./theme.switch"
import { Button } from "./ui/button"
import { ChevronDown } from "lucide-react"

export const Header = () => {
    return (
        <header className=" bg-background border-b">
            <div className=" flex justify-between items-center gap-4 px-4 py-2.5">
                <Logo />
                <div className=" flex items-center gap-2">
                    <ThemeSwitch />
                    <Button variant="outline" >
                        Tools
                        <ChevronDown className=" size-4" />
                    </Button>

                    <Button>Generate Palette</Button>
                </div>
            </div>
        </header>
    )
}