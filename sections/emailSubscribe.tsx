import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
    subscribeText?: string;
    buttonText?: string;
    logoAlt?: string;
    logo?: ImageWidget;
    bgcolor?: 'dark' | 'lightGray';
}

const BGCOLOR = {
    dark: 'bg-neutral text-secondary',
    lightGray: 'bg-primary-content text-neutral mx-auto rounded-lg w-[80%]',
};

export default function({subscribeText, buttonText, logoAlt, logo, bgcolor = 'dark'}: Props) {
    return(
        <div class={`${BGCOLOR[bgcolor]} flex flex-col justify-center items-center`}>
            <div class="flex flex-col items-center justify-center pt-[56px] gap-2">
                {logo && <Image 
                src={logo}
                width={100}
                height={26}
                alt={logoAlt}
                />}
                <div class="py-[32px] flex grow">
                    <h1 class={`${BGCOLOR[bgcolor]} text-[24px]`}>{subscribeText}</h1>
                </div>
            </div>
            <div class="flex flex-column flex-wrap justify-center gap-3 align-center pb-[56px] lg:flex-row">
                <input type="text" placeholder="E-mail" class="lg:px-12 px-4 py-2 text-[24px] rounded-xl" />
                <button class="bg-primary py-2 px-4 text-[24px] text-secondary lg:px-[55px] lg:py-[10px] rounded-xl">{buttonText}</button>
            </div>
        </div>
    )
}
