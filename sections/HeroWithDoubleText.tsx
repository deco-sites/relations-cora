
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  /**
   * @format rich-text
   */
  mainTitle?: string;
  /**
   * @format textarea
   */
  mainParagraph?: string;
  /**
   * @format textarea
   */
  secondaryParagraph?: string;
  /**
   * @format color-input
   */
//   buttonColor?: string = "#FFFFFF";
  /**
   * @format textarea
   */
  buttonText?: string;
  /**
   * @widget ImageWidget
   */
  pureBackground?: ImageWidget;
//   imageWidth?: number = 1920;
}

export default function HeroWithDoubleText({
  mainTitle = "Corporate Information",
  mainParagraph = "Cora is the first and leading digital bank exclusively focused on SMBs in Brazil. The company provides a one-stop solution by bringing together a multi-product credit offering, banking service and a full suite of business analytics tools.",
  secondaryParagraph = "Our mission is to increase the likelihood of SMB entrepreneurs achieving their dreams.",
  buttonText = "Sign Up",
  pureBackground,
}: Props) {
  return (
    <div class="relative h-screen w-full">
      {pureBackground && (
        <Image
          src={pureBackground}
          width={1920}
          height={900}
          class="object-cover"
        />
      )}
      <div class="absolute inset-0 bg-black border border-primary bg-opacity-50 flex items-center justify-center">
        <div class="max-w-4xl text-center text-white ">
          <h1 class="text-4xl font-bold mb-4">{mainTitle}</h1>
          <p class="text-lg mb-8">{mainParagraph}</p>
          <p class="text-xl mb-8">{secondaryParagraph}</p>
          <button
            class="bg-[color:buttonColor] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors duration-300"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
