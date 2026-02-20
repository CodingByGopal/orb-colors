import Logo from "./logo"
import { ThemeSwitch } from "./theme.switch"

export const Header = () => {
    return (
        <header className=" bg-background border-b">
            <div className=" flex justify-between items-center gap-4 px-4 py-2">
                <Logo />
                <ThemeSwitch />
            </div>
        </header>
    )
}