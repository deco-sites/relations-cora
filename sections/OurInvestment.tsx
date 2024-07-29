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
        <div class="py-5 pt-2">
            <div class="flex justify-center items-center py-5">
                <h1 class="text-[32px] font-bold">{props.title}</h1>
            </div>
            <div class="flex flex-row gap-x-10 justify-center items-center pb-[100px] py-5">
                {props.investors?.map((investor) =>
                <nav class="">
                        {investor.image &&
                        <a href={investor.link}>
                                        <Image
                                        src={investor.image}
                                        height={42}
                                        />
                        </a>
                        }
                </nav>
                )}
            </div>
        </div>
    )
}
