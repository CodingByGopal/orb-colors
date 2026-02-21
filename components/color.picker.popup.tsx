import {
    Popover,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
} from "@/components/ui/popover"
const ColorPickerPopup = (props: {
    children: React.ReactNode
}) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                {props.children}
            </PopoverTrigger>
            <PopoverContent>
                <PopoverHeader>
                    <PopoverTitle>Title</PopoverTitle>
                    <PopoverDescription>Description text here.</PopoverDescription>
                </PopoverHeader>
            </PopoverContent>
        </Popover>
    )
}

export default ColorPickerPopup