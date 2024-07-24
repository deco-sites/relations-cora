import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

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

export interface Props {
  downloadTitle?: string;
  osSystem?: Os[];
  links?: Column[];
  linksBellow?: Column[];
  osTitleBold?: boolean;
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
}: Props) {
  return (
    <div class="bg-secondary-content">
      <div class="lg:container lg:mx-auto md:max-w-[1060px] mx-4 pt-16 text-sm bg-secondary-content text-secondary">
        <div class="flex flex-col gap-20">
          <div class="flex flex-col gap-6 justify-between lg:flex-row">
            <div class="flex gap-24">
              {links?.map((link) => (
                <div>
                  <h4 class={`${link.titleBold && 'font-extrabold'} mb-4`}>{link.title}</h4>
                  {link.items?.map((item) => (
                    <a
                      class={`${item.bold && 'font-extrabold'} block hover:underline link no-underline py-1`}
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
        <div class="flex gap-28 py-24 flex-wrap">
          <div>
            <h1 class={`${osTitleBold && 'font-extrabold'}`}>{downloadTitle}</h1>
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
                    <h4 class={`${link?.titleBold && 'font-bold'} mb-4`}>{link.title}</h4>
                    {link.items?.map((item) => (
                      <a
                        class={`${item.bold && 'font-extrabold'} block hover:underline link no-underline py-1`}
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
    </div>
  );
}
