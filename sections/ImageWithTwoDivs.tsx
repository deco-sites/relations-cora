import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  image?: ImageWidget; // @format image
  div1Content?: string; // @format textarea
  div2Content?: string; // @format textarea
}

export default function ImageWithDivs({ image, div1Content, div2Content }: Props) {
  return (
    <div class="flex flex-col items-center gap-4">
      {image && (
        <Image 
          src={image}
          alt="Section image"
          width={500}
          height={300}
          class="rounded-lg shadow-md"
        />
      )}
      <div class="bg-base-200 rounded-lg p-4 w-full">
        {div1Content || <p class="text-center text-gray-500">Empty div 1</p>}
      </div>
      <div class="bg-base-200 rounded-lg p-4 w-full">
        {div2Content || <p class="text-center text-gray-500">Empty div 2</p>}
      </div>
    </div>
  );
}