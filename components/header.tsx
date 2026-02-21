import Logo from "./logo"
import { ThemeSwitch } from "./theme.switch"
import { Button } from "./ui/button"
import { ChevronDown, Menu } from "lucide-react"
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
    DrawerClose,
} from "@/components/ui/drawer"
import { primaryTools } from "@/app/_data/primary.tools"
import Link from "next/link";
import { secondaryTools } from "@/app/_data/secondary.tools"
import { otherTools } from "@/app/_data/other.tools"



export const Header = () => {
    return (
        <header className=" bg-background border-b">
            <div className=" flex justify-between items-center gap-4 px-4 py-2.5">
                <Logo />
                <div className=" flex items-center gap-2">
                    <ThemeSwitch />

                    <Drawer direction="bottom">
                        <DrawerTrigger asChild >
                            <div>
                                <Button className=" sm:flex hidden" variant="outline" >
                                    Tools
                                    <ChevronDown className=" size-4" />
                                </Button>
                                <Button className=" sm:hidden" variant="outline" size='icon' >
                                    <Menu className=" size-4" />
                                </Button>
                            </div>

                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader className=" sr-only" >
                                <DrawerTitle>Tools</DrawerTitle>
                                <DrawerDescription>Choose a tool to get started.</DrawerDescription>
                            </DrawerHeader>
                            <div className=" grid lg:grid-cols-12 grid-cols-1    overflow-y-auto">
                                <div className=" lg:col-span-7">
                                    <div className=" grid sm:grid-cols-2 grid-cols-1 md:gap-0 gap-4  p-4">
                                        {primaryTools.map((tool) => (
                                            <DrawerClose key={tool.path} asChild>
                                                <Link
                                                    className={`${tool.class} md:p-4 rounded-xl transition-all duration-300`}

                                                    href={tool.path}>
                                                    <p className=" md:text-3xl sm:text-xl text-lg font-bold md:mb-2 mb-1">{tool.label}</p>
                                                    <p className=" sm:text-base text-sm  text-foreground ">{tool.description}</p>
                                                </Link>
                                            </DrawerClose>

                                        ))}
                                    </div>

                                </div>

                                <div className="lg:col-span-5 ">
                                    <div className="flex lg:justify-center justify-between sm:gap-0 gap-4    items-start h-full w-full p-4">
                                        <div>
                                            <p className=" sm:text-xl text-base text-muted-foreground uppercase   md:px-4 mb-3">Design Tools</p>
                                            <div className=" flex flex-col sm:text-lg text-sm md:gap-0 gap-4 ">
                                                {secondaryTools.map((tool) => (
                                                    <DrawerClose key={tool.path} asChild>
                                                        <Link
                                                            className=' hover:bg-accent md:px-4 md:py-2 rounded-md w-fit transition-all duration-300 '
                                                            href={tool.path}>
                                                            {tool.label}
                                                        </Link>
                                                    </DrawerClose>
                                                ))}
                                            </div>

                                        </div>
                                        <div>
                                            <p className=" sm:text-xl text-base text-muted-foreground uppercase   md:px-4 mb-3">Other Tools</p>
                                            <div className=" flex flex-col sm:text-lg text-sm md:gap-0 gap-4 ">
                                                {otherTools.map((tool) => (
                                                    <DrawerClose key={tool.path} asChild>
                                                        <Link
                                                            className=' hover:bg-accent md:px-4 md:py-2 rounded-md w-fit transition-all duration-300 '
                                                            href={tool.path}>
                                                            {tool.label}
                                                        </Link>
                                                    </DrawerClose>
                                                ))}
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </DrawerContent>
                    </Drawer>
                    <Button className=" sm:block hidden">Generate Palette</Button>
                </div>
            </div>
        </header>
    )
}