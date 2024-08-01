
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface props {
  mainTitle?: string;
  mainParagraph?: string;
  secondaryParagraph?: string;
  buttonText?: string;
  pureBackground?: ImageWidget;
  coraLogo?: ImageWidget;
  peopleImageCenter?: ImageWidget;
}

export default function HeroWithDoubleText(props:props) {
  return (

      <div class="relative min-h-[920px]">
        <Image
        class="w-full h-full absolute -z-50 object-cover"
        src={props.pureBackground}
        width={1280}
        height={920}
        />
        <div class="pt-[58px] pb-[84px]">
          <div class="max-w-[1200px] relative mx-auto rounded-[48px] bg-accent-content text-secondary bg-opacity-80 border border-secondary">
            <div class="flex px-12 flex-wrap rounded-[48px] border border-secondary">
              <div class="pt-[130px] pb-[88px] lg:w-[25%]">
                <h1 class="text-[48px]">{props.mainTitle}</h1>
                <p class="text-[24px]">{props.mainParagraph}</p>
              </div>
              <div class="lg:w-[50%]">
                <div class="absolute bottom-0 lg:h-[105%]">
                  <Image
                            src={props.peopleImageCenter}
                            class="w-full h-full object-contain"
                            />
                </div>
              </div>
              <div class="flex flex-col justify-end pt-[130px] pb-[34px] lg:w-[25%]">
                <p class="text-[22px]">{props.secondaryParagraph}</p>
              </div>
            </div>
            <div class="flex justify-between px-12 py-6">
            <Image
              src={props.coraLogo}
              />
            <button class="bg-primary ">{props.buttonText}</button>
            </div>
          </div>
        </div>
      </div>
  );
}
