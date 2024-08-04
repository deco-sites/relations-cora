
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { UrlData } from "site/loaders/urlData.ts";

interface props {
  urlData: UrlData
  englishMainTitle?: string;
  portugueseMainTitle?: string;
  portugueseMainParagraph?: string;
  englishMainParagraph?: string;
  portugueseSecondaryParagraph?: string;
  englishSecondaryParagraph?: string;
  buttonText?: string;
  pureBackground?: ImageWidget;
  coraLogo?: ImageWidget;
  peopleImageCenter?: ImageWidget;
}

export default function HeroWithDoubleText(props : props) {
  const eng = props.urlData.lang == 'EN' ? true : false;
  return (

      <div class="relative min-h-[920px]">
        <Image
        class="w-full h-full absolute -z-50 object-cover"
        src={props.pureBackground}
        width={1280}
        height={920}
        />
        <div class="pt-[58px] pb-[84px]">
          <div class="max-w-[1200px]  mx-auto rounded-[48px] relative bg-accent-content text-secondary bg-opacity-80 border border-secondary">
            <div class="flex px-12 flex-wrap justify-center rounded-[48px] border border-secondary">
              <div class="pt-[130px] lg:pb-[88px] pb-8 lg:pb-0 lg:w-[25%]">
                <h1 class="text-[48px]">{eng ? props.englishMainTitle : props.portugueseMainTitle}</h1>
                <p class="text-[24px]">{eng ? props.englishMainParagraph : props.portugueseMainParagraph}</p>
              </div>
              <div class="lg:w-[50%]">
                <div class="xl:absolute mb-0 bottom-0 sm:mt-[130px] h-auto lg:h-[105%]">
                  <Image
                            src={props.peopleImageCenter}
                            width={600}
                            class="w-full h-full max-h-[600px] lg:max-h-[1000px] object-contain"
                            />
                </div>
              </div>
              <div class="flex flex-col justify-end pt-8 lg:pt-0 pb-[34px] lg:w-[25%]">
                <p class="text-[22px]">{eng ? props.englishSecondaryParagraph : props.portugueseSecondaryParagraph}</p>
              </div>
            </div>
            <div class="flex justify-between gap-4 px-12 py-6">
            <Image
              src={props.coraLogo}
              />
            <button class="bg-primary py-2 rounded-xl px-4 sm:px-[78px]">{props.buttonText}</button>
            </div>
          </div>
        </div>
      </div>
  );
}
