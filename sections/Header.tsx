import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { UrlData } from "site/loaders/urlData.ts";
import  LangSelector from '../islands/LangSelector.tsx'

type Type = "dark" | "light";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}


export interface Nav {
  urlData: UrlData;
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      portugueseLabel?: string;
      englishLabel?: string;
      url?: string;
    }[];
    buttons: CTA[];
  };
}

export const ColorType: Record<Type, string> = {
  "dark": "base-content",
  "light": "base-100",
};

export const StyleType: Record<"background" | "color", string> = {
  "background": "bg-",
  "color": "text-",
};

const generateLineStyles = (position: string) => `
  absolute ${position} z-50 block h-0.5 w-7 bg-black transition-all duration-200 ease-out 
`;

const lineStyles = [
  generateLineStyles("top-[-0.7rem]") +
  "peer-checked:translate-y-[0.7rem] peer-checked:rotate-[45deg]",
  generateLineStyles("top-[-0.35rem]") + "peer-checked:opacity-0",
  generateLineStyles("top-[0]") +
  "peer-checked:-translate-y-[0.2rem] peer-checked:-rotate-[45deg]",
];

export default function Haader({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  urlData,
  navigation = {
    links: [],
    buttons: [
      { id: "change-me-1", href: "/", text: "Change me", outline: false },
      { id: "change-me-2", href: "/", text: "Change me", outline: true },
    ],
  },
}: Nav) {
  const eng = urlData.lang == 'EN' ? true : false;
  return (
    <nav class="container mx-auto lg:px-0 px-4">
      <div class="flex gap-8 max-w-[1060px] mx-auto items-center justify-between py-4">
          <a href="/">
            <Image class="object-contain" src={logo.src || ""} width={103} height={26} alt={logo.alt} />
          </a>
        <label
          class="cursor-pointer lg:hidden pt-6 relative z-40"
          for="menu-mobile"
        >
          <input class="hidden peer" type="checkbox" id="menu-mobile" />
          {lineStyles.map((style, index) => (
            <div key={index} class={`relative ${style}`}></div>
          ))}
          <div class="backdrop-blur-sm bg-black/50 fixed h-full hidden inset-0 peer-checked:block w-full z-40">
            &nbsp;
          </div>
          <div class="duration-500 fixed h-full overflow-y-auto overscroll-y-none peer-checked:translate-x-0 right-0 top-0 transition translate-x-full w-full z-40">
            <div class="bg-base-100 flex flex-col float-right gap-8 min-h-full pt-12 px-6 shadow-2xl w-1/2">
              <ul class="flex flex-col gap-8">
                {navigation?.links.map((link) => (
                  <li>
                    <a href={link.url} aria-label={eng ? link.englishLabel : link.portugueseLabel}>
                      {eng ? link.englishLabel : link.portugueseLabel}
                    </a>
                  </li>
                ))}
              </ul>
              <ul class="flex items-center gap-3">
                {navigation.buttons?.map((item) => (
                  <a
                    key={item?.id}
                    id={item?.id}
                    href={item?.href}
                    target={item?.href.includes("http") ? "_blank" : "_self"}
                    class={`font-normal btn btn-primary ${
                      item.outline && "btn-outline"
                    }`}
                  >
                    {item?.text}
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </label>

        <ul class="hidden items-center justify-end lg:flex w-full">
          <ul class="flex">
            {navigation.links.map((link) => (
              <li>
                <a
                  href={link.url}
                  aria-label={eng ? link.englishLabel : link.portugueseLabel}
                  class="link no-underline hover:underline p-4"
                >
                  {eng ? link.englishLabel : link.portugueseLabel}
                </a>
              </li>
            ))}
            <LangSelector />
          </ul>
          <ul class="flex gap-3">
            {navigation.buttons?.map((item) => (
              <a
                key={item?.id}
                id={item?.id}
                href={item?.href}
                target={item?.href.includes("http") ? "_blank" : "_self"}
                class={`font-normal rounded-full text-secondary text-base bg-primary px-[25px]  py-[6px] ${
                  item.outline && "btn-outline"
                }`}
              >
                {item?.text}
              </a>
            ))}
          </ul>
        </ul>
      </div>
    </nav>
  );
}

