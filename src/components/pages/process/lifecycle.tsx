import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";

const LifeCycle = () => {
  return (
    <FadeIn>
      <Image
        src="/img/halfnine-project-lifecycle.png"
        alt="Halfnine Project Lifecycle"
        width="1024"
        height="357"
        className="mx-auto"
      />
    </FadeIn>
  );
};

export default LifeCycle;
