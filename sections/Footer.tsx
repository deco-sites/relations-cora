import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "site/components/ui/Icon.tsx";

/** @title {{title}} */
export interface Column {
  title: string;
  items: Items[];
  titleBold?: boolean;
}

export interface Items {
  label: string;
  href: string;
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

export interface Os {
  osName?: string;
  osIcon?: ImageWidget;
  osDownloadLink?: string;
  osAlt?: string;
}

export interface PJ {
  cnpj: string;
  endereço: string;
}

export interface IconsFooter {
  imageIcon?: ImageWidget;
  socialLink?: string;
}

export interface Props {
  upperTitle: string;
  downloadTitle?: string;
  osSystem?: Os[];
  links?: Column[];
  linksBellow?: Column[];
  osTitleBold?: boolean;
  pj?: PJ[];
  iconFooter?: IconsFooter[];
}

export default function Footer({
  links = [
    {
      title: "Column One",
      items: [
        { label: "Link One", href: "/" },
        { label: "Link Two", href: "/" },
        { label: "Link Three", href: "/" },
        { label: "Link Four", href: "/" },
        { label: "Link Five", href: "/" },
      ],
    },
    {
      title: "Column One",
      items: [
        { label: "Link One", href: "/" },
        { label: "Link Two", href: "/" },
        { label: "Link Three", href: "/" },
        { label: "Link Four", href: "/" },
        { label: "Link Five", href: "/" },
      ],
    },
    {
      title: "Column Two",
      items: [
        { label: "Link Six", href: "/" },
        { label: "Link Seven", href: "/" },
        { label: "Link Eight", href: "/" },
        { label: "Link Nine", href: "/" },
        { label: "Link Ten", href: "/" },
      ],
    },
    {
      title: "Column Three",
      items: [
        { label: "Link Eleven", href: "/" },
        { label: "Link Twelve", href: "/" },
        { label: "Link FourThirteenteen", href: "/" },
        { label: "Link Fourteen", href: "/" },
        { label: "Link Fifteen", href: "/" },
      ],
    },
  ],
  linksBellow = [],
  downloadTitle,
  osSystem,
  osTitleBold,
  pj,
  upperTitle,
  iconFooter,

}: Props) {
  return (
    <div>
    <div class="bg-neutral">
      <div class="flex w-full w-1/3 items-center lg:mx-auto max-w-[1060px]">
        <h1 class="text-secondary px-10 text-[32px]">{upperTitle}</h1>
        <div class="flex justify-between">
          {iconFooter?.map((icon)=>
            <div class="px-10 border-x border-secondary w-[174px] py-[72px] flex itens-center">
              <a href={icon.socialLink} class="">
                <Image
                src={icon.imageIcon}
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
      <div>
        <div class="bg-secondary-content">
          <div class="lg:container lg:mx-auto md:max-w-[1060px] mx-4 pt-16 bg-secondary-content text-secondary">
            <div class="flex flex-col gap-20">
              <div class="flex flex-col gap-6 justify-between lg:flex-row">
                <div class="flex gap-[150px]">
                  {links?.map((link) => (
                    <div>
                      <h4 class={`${link.titleBold && 'font-bold'} text-[22px] mb-4`}>{link.title}</h4>
                      {link.items?.map((item) => (
                        <a
                          class={`${item.bold && 'font-bold'} block hover:underline link no-underline py-1`}
                          href={item.href}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div class="flex gap-[165px] py-24 flex-wrap">
              <div>
                <h1 class={`${osTitleBold && 'font-bold'} text-[22px]`}>{downloadTitle}</h1>
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
              <div class="flex gap-9">
                    {linksBellow?.map((link) => (
                      <div>
                        <h4 class={`${link?.titleBold && 'font-bold'} text-[22px] mb-4`}>{link.title}</h4>
                        {link.items?.map((item) => (
                          <a
                            class={`${item.bold && 'font-bold'} block hover:underline link no-underline py-1`}
                            href={item.href}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
            </div>
            <div class="flex justify-center flex-col bg-secondary">
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
