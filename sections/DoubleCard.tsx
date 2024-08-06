import { UrlData } from '../loaders/urlData.ts'

interface Card {
    englishTitle?: string;
    portugueseTitle?: string;
    englishParagraph?: string;
    portugueseParagraph?: string;
    englishTextButton?: string;
    portugueseTextButton?: string;
    englishTextlink?: string;
    portugueseTextlink?: string;
    textLink: string;
    backgroundColor?: boolean;
}

export interface props {
    cards?: Card[];
    dataUrl: UrlData;
}

export default function(props: props) {
    const eng = props.dataUrl.lang == 'EN' ? true : false;
    return(
        <div class="flex flex-wrap lg:flex-row">
            {props.cards?.map((card, index) =>
            <div class={`${card.backgroundColor && 'bg-primary-content'} ${ index % 2 == 0 ? ' rounded-r-3xl' : 'rounded-l-3xl'} w-full md:w-1/2 flex flex-col justify-center text-left px-10 lg:px-[60px] py-[88px]`}>
                    <h1 class="text-primary min-h-36 w-300 text-[48px]">{eng ? card.englishTitle : card.portugueseTitle}</h1>
                    <p class="py-[33px] grow text-2xl">{eng ? card.englishParagraph : card.portugueseParagraph}</p>
                    <div>
                    <a href={card.textLink} class="px-12 py-3 text-lg md:text-2xl border rounded-full border-base-200">{eng ? card.englishTextlink : card.portugueseTextlink}</a>
                    </div>
            </div>
            )}
        </div>
    )
}