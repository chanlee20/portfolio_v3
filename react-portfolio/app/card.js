import Image from "next/image";
import SectionTitle from "./components/section-title";

export default function Card({
  imageFirst,
  isProject = false,
  src,
  titleHeader,
  content,
  description,
}) {
  return (
    <>
        <div className={`flex justify-center gap-x-6 items-start mt-20 ${imageFirst ? 'flex-row' : 'flex-row-reverse'}`}>
          <div className="rounded-full w-auto h-80 relative overflow-hidden basis-2/5">
            <Image src={src} layout="fill" objectFit="cover" />
          </div>
          <div className="mt-2 basis-3/5">
            <SectionTitle title={titleHeader} content={content} />
            <p className="text-white">{description}</p>
            {isProject ? 
                <>
                </>
                :
                <></>
            }
          </div>
        </div>
      
    </>
  );
}
