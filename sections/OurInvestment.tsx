import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Investors {
    name?: string;
    image?: ImageWidget;
    link?: string;
}

export interface props {
    title?: string;
    investors?: Investors[];
}


export default function(props:props) {
    return(
        <div class="pt-5 pt-2">
            <div class="flex justify-center items-center pb-5 pt-20">
                <h1 class="text-[32px] font-bold">{props.title}</h1>
            </div>
            <div class="flex flex-row flex-wrap gap-x-10 justify-around items-center pb-[100px] py-5">
                {props.investors?.map((investor) =>
                <div class="">
                        {investor.image &&
                        <a class="flex items-center w-[225px] mt-6 h-[24px]"
                         href={investor.link}>
                                        <Image
                                        src={investor.image}
                                        width={225}
                                        class="h-full"
                                        height={24}
                                        />
                        </a>
                        }
                </div>
                )}
            </div>
        </div>
    )
}