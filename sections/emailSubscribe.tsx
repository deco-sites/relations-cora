import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface props {
    subscribleTitle?: string;
    subscribeText?: string;
    buttonText?: string;
    logoAlt?: string;
    logo?: ImageWidget;
}

export default function(props: props) {
    return(
        <div class="bg-neutral flex flex-col items-center">
            <div class="pt-[56px] gap-2">
                <Image 
                src={props.logo}
                width={100}
                height={26}
                alt={props.logoAlt}
                />
                <div class="py-[32px]">
                    <h1 class="text-secondary text-[24px]">{props.subscribeText}</h1>
                </div>
            </div>
            <div class="flex gap-3 pb-[56px]">
                <input type="text" placeholder="E-mail" class="px-12 py-[20px] text-[24px] rounded-xl" />
                <button class="bg-primary px-[55px] text-[24px] text-secondary py-[10px] rounded-xl">{props.buttonText}</button>
            </div>
        </div>
    )
}