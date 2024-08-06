import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { UrlData } from "site/loaders/urlData.ts";

export interface CTA {
  id?: string;
  href: string;
  englishText: string;
  portugueseText: string;
  style?: "Outline" | "Ghost";
}

export interface Props {
  urlData: UrlData;
  englishTitle?: string;
  portugueseTitle?: string;
  /** @format textarea */
  englishDescription?: string;
  /** @format textarea */
  portugueseDescription?: string;
  englishSmallDescription?: string;
  portugueseSmallDescription?: string;
  tagline?: string;
  image?: ImageWidget;
  imageBackground?: boolean;
  placement?: "left" | "right";
  cta?: CTA[];
  disableSpacing?: {
    top?: boolean;
    bottom?: boolean;
  };
}

const PLACEMENT = {
  left: "flex-col lg:flex-row-reverse",
  right: "flex-col lg:flex-row",
};

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

export default function ImageWithParagraph({
  portugueseTitle,
  englishTitle,
  portugueseDescription,
  englishDescription,
  tagline,
  image = DEFAULT_IMAGE,
  placement = "left",
  disableSpacing,
  urlData,
  englishSmallDescription,
  portugueseSmallDescription,
  imageBackground,
  cta,
}: Props) {
  const eng = urlData.lang == 'EN' ? true : false;
  return (
    <div class="relative px-4 lg:px-20 my-4">
      {imageBackground && <div class="hidden lg:block absolute bg-primary-content w-5/12 h-full top-0 right-0 rounded-l-3xl -z-50"/>}
      <div class="container mx-auto max-w-[1060px] mx-4 text-sm">
        <div
          class={`flex ${
            PLACEMENT[placement]
          } gap-12 lg:gap-20 text-left items-center z-10 ${
            disableSpacing?.top ? "" : "pt-12 lg:pt-28"
          } ${disableSpacing?.bottom ? "" : "pb-12 lg:pb-28"}`}
        >
          <div class="w-full lg:w-1/2 border border-secondary rounded-lg overflow-hidden">
            <Image
              width={640}
              class="object-fit z-10"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={image}
              alt={image}
              decoding="async"
              loading="lazy"
            />
          </div>
          <div class="w-full lg:w-1/2 space-y-2 lg:space-y-4 lg:max-w-xl gap-4 z-10">
          {tagline && <p class="text-sm font-semibold">
              {tagline}
            </p>}
            <p class="text-3xl lg:text-5xl text-primary font-bold leading-snug">
              {eng ? englishTitle : portugueseTitle}
            </p>
            <p class="leading-normal text-xl lg:text-2xl">
              {eng ? englishDescription : portugueseDescription}
            </p>
            <p class="leading-normal text-[22px] pt-4">{eng ? englishSmallDescription : portugueseSmallDescription}</p>
            <div class="flex gap-3 pt-4">
              {cta?.map((item) => (
                <a
                  key={item?.id}
                  id={item?.id}
                  href={item?.href}
                  target={item?.href.includes("http") ? "_blank" : "_self"}
                  class={`text-2xl px-12 py-2 lg:py-4 border rounded-full
                    ${!item.style || item.style == "Outline" && "btn-outline"}
                    ${item.style == "Ghost" && "btn-ghost"}
                  `}
                >
                  {eng ? item.englishText : item.portugueseText}
                  {item.style == "Ghost" && (
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.70697 16.9767L15.414 11.2697L9.70697 5.56274L8.29297 6.97674L12.586 11.2697L8.29297 15.5627L9.70697 16.9767Z"
                        fill="#18181B"
                      />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
