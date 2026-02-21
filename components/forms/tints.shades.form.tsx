"use client"
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"
import { hexColorRegex } from "@/app/_data/regex"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { prepareColorSlug } from "@/app/_data/color-methods/orb.colors"
import { useRouter } from "next/navigation"
import { Palette, Sparkles, Trash } from "lucide-react"
import ColorPickerPopup from "../color.picker.popup"

const formSchema = z.object({
    hexColors: z
        .string()
        .refine(
            (val) =>
                val
                    .trim()
                    .split(/\s+/)
                    .every((hex) =>
                        hexColorRegex.test(hex)
                    ),
            {
                message: "Please enter space-separated valid hex colors (e.g. #fff #112233).",
            }
        )
})


const TintsShadesForm = (props: { colors: string | null, hashtag: string | null, steps: string | null }) => {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            hexColors: (props.colors && props.colors?.trim()?.length > 0) ? props.colors?.split('-')?.join(' ') : "",
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        const result = prepareColorSlug(data?.hexColors);
        const searchParams = new URLSearchParams();
        searchParams.set("colors", result || "");
        searchParams.set("hashtag", props.hashtag || "0");
        searchParams.set("steps", props.steps || "20");

        router.push(`/tints-shades?${searchParams?.toString()}`);
    }

    function onClear() {
        form.reset({ hexColors: "" });
        const searchParams = new URLSearchParams();
        router.push(`/tints-shades?${searchParams?.toString()}`);
    }

    return (
        <form id="tints-shades-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
                <Controller
                    name="hexColors"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="hexColors">
                                Enter hex colors (separated by spaces)
                            </FieldLabel>
                            <Textarea
                                {...field}
                                id="hexColors"
                                aria-invalid={fieldState.invalid}
                            />

                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
            </FieldGroup>
            <div className="flex gap-2 items-center mt-4">
                <ColorPickerPopup>
                    <Button type="button" size="xl" variant="outline" ><Palette />Choose Colors</Button>
                </ColorPickerPopup>
                <Button type="button" size="xl" variant="outline" onClick={onClear} ><Trash />Clear</Button>
                <Button className=" flex-1" type="submit" size="xl" ><Sparkles />Generate Tints and Shades</Button>
            </div>

        </form>
    )
}

export default TintsShadesForm