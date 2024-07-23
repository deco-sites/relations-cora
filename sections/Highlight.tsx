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
        <div class="flex flex-col bg-neutral text-white items-center h-[300px] pt-[32px]">
            <div>
                <h1 class="text-4xl font-bold">{props.mainTitle}</h1>
                <p class="text-lg">{props.mainParagraph}</p>
            </div>
            <div class="flex justify-center pt-[32px] gap-[47px] text-center">
                {props.highlights?.map((highlights) =>
                    <div class="flex flex-col">
                        <div class="h-[52px] w-[246px]">
                            <ul class="text-5xl font-bold">{highlights.secondaryTitles}</ul>
                            <ul class="text-2xl">{highlights.secondaryParagraphs}</ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}