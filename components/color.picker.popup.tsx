"use client"
import { useState } from "react"
import { HexColorPicker } from "react-colorful"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { normalizeHex } from "@/app/_data/color-methods/orb.colors"
import { toast } from "sonner"

const defaultColor = "#3b82f6"

const ColorPickerPopup = (props: {
    children: React.ReactNode
    onAddColor?: (hex: string) => void
}) => {
    const [open, setOpen] = useState(false)
    const [color, setColor] = useState(defaultColor)

    const onAddColor = () => {
        const normalizedColor = normalizeHex(color)
        if (normalizedColor) {
            props.onAddColor?.(`#${normalizedColor}`)
            setOpen(false);
            setColor(defaultColor)

        } else {
            toast.error("Invalid color", {
                action: {
                    label: "Close",
                    onClick: () => toast.dismiss(),

                }
            })
        }

    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                {props.children}
            </PopoverTrigger>
            <PopoverContent >
                <HexColorPicker color={color} onChange={setColor} style={{ width: "100%" }} />
                <div className="flex items-center gap-2">
                    <div
                        className="size-8 rounded border border-border shrink-0"
                        style={{ backgroundColor: color }}
                    />
                    <Input
                        type="text"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        maxLength={7}
                        className="flex-1"
                    />
                    {props.onAddColor && (
                        <Button
                            type="button"
                            onClick={onAddColor}
                        >
                            <Plus /> Add
                        </Button>
                    )}
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default ColorPickerPopup
