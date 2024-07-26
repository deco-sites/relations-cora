interface Card {
    title?: string;
    paragraph?: string;
    textButton?: string;
    textlink?: string;
    backgroundColor?: boolean;
}

export interface props {
    cards?: Card[];
    
}

export default function(props: props) {
    return(
        <div class="flex">
            {props.cards?.map((card, index) =>
            <div class={`${card.backgroundColor && 'bg-primary-content'} ${ index % 2 == 0 ? ' rounded-r-3xl' : 'rounded-l-3xl'} w-1/2 flex flex-col py-[116px] pl-[120px]`}>
                    <h1 class="text-primary w-[90%] w-300 text-[48px]">{card.title}</h1>
                    <p class="py-[33px] grow h-[30%] w-[90%] text-2xl">{card.paragraph}</p>
                    <div>
                    <button href={card.textlink} class="px-12 py-3 font-lg text-2xl border rounded-full border-base-200">{card.textButton}</button>
                    </div>
            </div>
            )}
        </div>
    )
}