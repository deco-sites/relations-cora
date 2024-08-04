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
            <div class={`${card.backgroundColor && 'bg-primary-content'} ${ index % 2 == 0 ? ' rounded-r-3xl' : 'rounded-l-3xl'} w-full lg:w-1/2 flex flex-col py-[116px] pl-[120px]`}>
                    <h1 class="text-primary w-[90%] w-300 text-[48px]">{eng ? card.englishTitle : card.portugueseTitle}</h1>
                    <p class="py-[33px] grow h-[30%] w-[90%] text-2xl">{eng ? card.englishParagraph : card.portugueseParagraph}</p>
                    <div>
                    <a href={card.textLink} class="px-12 py-3 font-lg text-2xl border rounded-full border-base-200">{eng ? card.englishTextlink : card.portugueseTextlink}</a>
                    </div>
            </div>
            )}
        </div>
    )
}