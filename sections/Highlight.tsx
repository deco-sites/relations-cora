import { UrlData } from '../loaders/urlData.ts'

/* @title {{secondaryParagraphs}} */
interface Highlights {
    englishSecondaryTitles: string;
    portugueseSecondaryTitles: string;
    englishSecondaryParagraphs: string;
    portugueseSecondaryParagraphs: string;
    englishTertiaryparagraph?: string;
    portugueseTertiaryparagraph?: string;
}

export interface props {
    urlData: UrlData;
    portugueseTitle: string;
    englishTitle: string;
    englishParagraph: string;
    portugueseParagraph: string;
    highlights: Highlights[];
}


export default function(props:props) {
    const eng = props.urlData.lang == 'EN' ? true : false;
    return(
        <div class="flex flex-col text-center bg-neutral text-white items-center min-h-[300px] pt-[32px]">
            <div>
                <h1 class="text-4xl font-bold">{eng ? props.englishTitle : props.portugueseTitle}</h1>
                <p class="text-lg">{eng ? props.englishParagraph : props.portugueseParagraph}</p>
            </div>
            <div class="flex justify-center items-center pt-[32px] gap-3 md:gap-[47px] text-center flex-wrap">
                {props.highlights?.map((highlights) =>
                        <div class="min-h-[120px] lg:h-[52px] w-[246px]">
                            <p class="text-2xl lg:text-3xl lg:text-5xl font-bold">{eng ? highlights.englishSecondaryTitles : highlights.portugueseSecondaryTitles}</p>
                            <p class="text-[19px] lg:text-xl lg:text-2xl">{eng ? highlights.englishSecondaryParagraphs : highlights.portugueseSecondaryParagraphs}</p>
                            <p class="text-[19px] lg:text-xl lg:text-2xl">{eng ? highlights.englishTertiaryparagraph : highlights.portugueseTertiaryparagraph}</p>
                        </div>
                )}
            </div>
        </div>
    )
}