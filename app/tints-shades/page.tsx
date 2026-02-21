"use client"
import SectionIntro from "@/components/section.intro"
import TintsShadesForm from "@/components/forms/tints.shades.form"
import { useSearchParams } from "next/navigation";


const allowedSteps = [5, 10, 20];
const allowedHashtag = [0, 1];
const defaultSteps = 20;
const defaultHashtag = 0;

const TintsShadesPage = () => {
    const searchParams = useSearchParams();
    const colors = searchParams.get("colors");

    let steps = searchParams.get("steps") ? Number(searchParams.get("steps")) : 20;
    if (!allowedSteps.includes(steps)) {
        steps = defaultSteps;
    }

    let hashtag = searchParams.get("hashtag") ? Number(searchParams.get("hashtag")) : 0;
    if (!allowedHashtag.includes(hashtag)) {
        hashtag = defaultHashtag;
    }

    console.log(colors, steps, hashtag);

    return (
        <section className="container-sm">
            <div className=" py-10">
                <SectionIntro title="Tints and Shades"
                    description="Generate lighter and darker variants (tints/shades) of a given color." />
                <TintsShadesForm colors={colors} hashtag={hashtag.toString()} steps={steps.toString()} />
            </div>


        </section>
    )
}

export default TintsShadesPage