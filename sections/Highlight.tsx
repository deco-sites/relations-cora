interface Highlights {
    secondaryTitles: string;
    secondaryParagraphs: string;
}

export interface props {
    mainTitle: string;
    mainParagraph: string;
    highlights: Highlights[];
}


export default function(props:props) {
    return(
        <div class="flex flex-col bg-neutral text-white items-center min-h-[300px] pt-[32px]">
            <div>
                <h1 class="text-4xl font-bold">{props.mainTitle}</h1>
                <p class="text-lg">{props.mainParagraph}</p>
            </div>
            <div class="flex justify-center items-center pt-[32px] gap-[47px] text-center flex-wrap">
                {props.highlights?.map((highlights) =>
                        <div class="min-h-[120px] lg:h-[52px] w-[246px]">
                            <p class="text-2xl lg:text-3xl lg:text-5xl font-bold">{highlights.secondaryTitles}</p>
                            <p class="text-[19px] lg:text-xl lg:text-2xl">{highlights.secondaryParagraphs}</p>
                        </div>
                )}
            </div>
        </div>
    )
}