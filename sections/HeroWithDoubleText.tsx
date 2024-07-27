import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface props {
    mainTitle?: string;
    mainParagraph?: string;
    secondaryParagraph?:string;
    buttonText?: string;
    pureBackground?: ImageWidget;
    imageWidth?: number;
}

export default function(props: props) {
    return(
        <div class="bg-neutral bg-opacity-50">
            <div>
                <h1 class="text-[48px]">{props.mainTitle}</h1>
                <p class="text-[24px]">{props.mainParagraph}</p>
            </div>
            <div class="absolute inset-0 w-full h-full object-cover z-0">
                {props.pureBackground &&
                <Image
                src={props.pureBackground}
                width={props.imageWidth}
                />}
            </div>
            <div class="flex flex-end">
                <p class="text-[22px]">{props.secondaryParagraph}</p>
                <button class="bg-primary rounded-lg p-3">{props.buttonText}</button>
            </div>
        </div>
    )
}

