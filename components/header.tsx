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
                    <Button variant="ghost" >
                        Tools
                        <ChevronDown className=" size-4" />
                    </Button>
                    <ThemeSwitch />
                </div>
            </div>
        </header>
    )
}