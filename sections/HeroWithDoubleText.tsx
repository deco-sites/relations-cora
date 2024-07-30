
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface props {
  mainTitle?: string;
  mainParagraph?: string;
  secondaryParagraph?: string;
  buttonText?: string;
  pureBackground?: ImageWidget;
//   imageWidth?: number = 1920;
}

export default function HeroWithDoubleText(props:props) {
  return (
    <div class="relative h-[900px] bg-cover w-full" style={`background-image: url(${props.pureBackground})`}>
      {/* {props.pureBackground && (
        <Image
          src={props.pureBackground}
          width={1920}
          height={900}
          class="object-cover"
        />
      )} */}
      <div class="absolute inset-0 bg-black border border-primary bg-opacity-50 flex justify-around">
        <div class="max-w-4xl text-center text-secondary max-w-[300px]">
          <h1 class="text-4xl font-bold mb-4">{props.mainTitle}</h1>
          <p class="text-lg mb-8">{props.mainParagraph}</p>
        </div>
        <div class="flex h-full items-end justify-end">
          <p class="text-xl max-w-[200px] max-h-[200px] text-secondary mb-8">{props.secondaryParagraph}</p>
          <button
            class="bg-primary text-secondary px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors duration-300"
          >
            {props.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
