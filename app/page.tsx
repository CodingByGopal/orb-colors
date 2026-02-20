"use client"
import { getRandomHexColor } from "@/app/_data/color-methods/orb.colors";
export default function Page() {
    console.log(getRandomHexColor())
    return <div>Hello World
    </div>;
}