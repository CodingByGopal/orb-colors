import Logo from "./logo"
import { ThemeSwitch } from "./theme.switch"
import { Button } from "./ui/button"
import { ChevronDown } from "lucide-react"
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { tools } from "@/app/_data/tools"
import Link from "next/link";
import Image from "next/image"



export const Header = () => {
    return (
        <header className=" bg-background border-b">
            <div className=" flex justify-between items-center gap-4 px-4 py-2.5">
                <Logo />
                <div className=" flex items-center gap-2">
                    <ThemeSwitch />

                    <Drawer direction="bottom">
                        <DrawerTrigger asChild >
                            <Button variant="outline" >
                                Tools
                                <ChevronDown className=" size-4" />
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader className=" sr-only" >
                                <DrawerTitle>Tools</DrawerTitle>
                                <DrawerDescription>Choose a tool to get started.</DrawerDescription>
                            </DrawerHeader>
                            <div className=" grid md:grid-cols-12 grid-cols-1 gap-6 overflow-y-auto">
                                <div className=" md:col-span-7">
                                    <div className=" grid md:grid-cols-2 grid-cols-1  p-4">
                                        {tools.map((tool) => (
                                            <Link
                                                className={`${tool.class} p-4 rounded-xl transition-all duration-300`}
                                                key={tool.path}
                                                href={tool.path}>
                                                <p className=" text-3xl font-bold mb-2">{tool.label}</p>
                                                <p className=" text-base text-foreground ">{tool.description}</p>
                                            </Link>
                                        ))}
                                    </div>

                                </div>
                                <div className=" md:col-span-5">
                                    sdasad
                                </div>
                            </div>

                        </DrawerContent>
                    </Drawer>
                    <Button>Generate Palette</Button>
                </div>
            </div>
        </header>
    )
}