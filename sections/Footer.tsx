import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { UrlData } from '../loaders/urlData.ts'

/** @title {{title}} */
export interface Column {
  englishTitle: string;
  portugueseTitle: string;
  items: Items[];
  titleBold?: boolean;
}

export interface Items {
  englishLabel: string;
  englishSmallText?: string;
  portugueseLabel: string;
  portugueseSmallText?: string;
  href?: string;
  bold?: boolean;
}

export interface Subscribe {
  title?: string;
  description?: string;
  /** @format rich-text */
  instructions?: string;
}

export interface Social {
  network: "Facebook" | "Instagram" | "Linkedin" | "X - Twitter" | "Youtube";
  href: string;
}

/**@title {{osName}} */
export interface Os {
  osName?: string;
  osIcon?: ImageWidget;
  osDownloadLink?: string;
  osAlt?: string;
}

/**@title {{cnpj}} */
export interface PJ {
  cnpj: string;
  endereço: string;
}


export interface Props {
  engDownloadTitle?: string;
  portugueseDownloadTitle?: string;
  osSystem?: Os[];
  links?: Column[];
  linksBellow?: Column[];
  osTitleBold?: boolean;
  pj?: PJ[];
  urlData: UrlData;
}

export default function Footer({
  links,
  linksBellow = [],
  engDownloadTitle,
  portugueseDownloadTitle,
  osSystem,
  osTitleBold,
  pj,
  urlData,
}: Props) {
  const eng = urlData.lang == 'EN' ? true : false;
  return (
    <div>
      <div>
        <div class="bg-secondary-content">
          <div class="lg:container lg:mx-auto md:max-w-[1060px] mx-4 pt-16 bg-secondary-content text-secondary">
            <div class="flex flex-col">
              <div class="flex flex-col lg:flex-row">
                <div class="flex justify-evenly flex-wrap w-full gap-[10px]">
                  {links?.map((link) => (
                    <div class="max-w-[250px] w-1/2 md:w-auto py-8 lg:py-[1px]">
                      <h4 class={`${link.titleBold && 'font-bold'} text-[20px] lg:text-[22px] mb-4`}>{eng ? link.englishTitle : link.portugueseTitle}</h4>
                      {link.items?.map((item) => (
                        <a
                          class={`${item.bold && 'font-bold'} flex items-center text-[14px] lg:text-[16px] block hover:underline link no-underline py-1`}
                          href={item.href}
                        >
                          <span class="max-w-[157px] md:w-auto block">{eng ? item.englishLabel : item.portugueseLabel}</span>
                          <span class="text-[10px]">{eng ? item.englishSmallText : item.portugueseSmallText}</span>
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div class="flex py-24 flex-wrap gap-y-4 md:gap-y-0 justify-evenly">
              <div class="lg:min-w-[580px]">
                <h1 class={`${osTitleBold && 'font-bold'} text-[22px]`}>{eng ? engDownloadTitle : portugueseDownloadTitle}</h1>
                <div class="flex gap-10 pt-10">
                  {osSystem?.map((os)=>
                  <a class={`${os.osIcon && 'gap-1'} p-4 flex border border-secondary text-secondary rounded-xl`}
                  href={os.osDownloadLink}>
                    <Image
                    width={15}
                    src={os?.osIcon || ''}
                    alt={os?.osAlt || ''}
                  />
                  {os.osName}
                  </a>
                  )}
                </div>
              </div>
              <div>
                    {linksBellow?.map((link) => (
                      <div>
                        <h4 class={`${link?.titleBold && 'font-bold'} text-[22px] mb-4`}>{eng ? link.englishTitle : link.portugueseTitle}</h4>
                        {link.items?.map((item) => (
                          <a
                            class={`${item.bold && 'font-bold'} block hover:underline link no-underline py-1`}
                            href={item.href}
                          >
                            {eng ? item.englishLabel : item.portugueseLabel}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
            </div>
            <div class="flex justify-center text-[14px] lg:text-[16px] flex-col bg-secondary">
              {pj?.map((end)=>
              <div class="flex mx-auto gap-x-2 py-2">
                <p class="text-primary">{end.cnpj}</p>
                <p>{end.endereço}</p>
              </div>
              )}
            </div>
        </div>
      </div>
    </div>
    
  );
}
