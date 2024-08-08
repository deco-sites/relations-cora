import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import { UrlData } from "../loaders/urlData.ts";
import EmailForms from '../islands/EmailForm.tsx'

export interface Props {
    portugueseText?: string;
    englishText?: string;
    englishButtonText?: string;
    portugueseButtonText?: string;
    logoAlt?: string;
    logo?: ImageWidget;
    bgcolor?: 'dark' | 'lightGray';
    urlData: UrlData;
}

const BGCOLOR = {
    dark: 'bg-neutral text-secondary px-4',
    lightGray: 'bg-primary-content text-neutral mx-auto rounded-lg w-[80%]',
};

export default function({portugueseText, englishText, urlData, logoAlt, logo, englishButtonText, portugueseButtonText, bgcolor = 'dark'}: Props) {
    const eng = urlData.lang == 'EN' ? true : false;
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
                    <h1 class={`${BGCOLOR[bgcolor]} text-[24px]`}>{eng ? englishText : portugueseText}</h1>
                </div>
            </div>
            <EmailForms eng={eng} englishButtonText={englishButtonText} portugueseButtonText={portugueseButtonText}/>
        </div>
    )
}
