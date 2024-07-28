import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <Image
        className="!w-8 !h-auto"
        src="/images/logo.png"
        alt={"drop box"}
        width={50}
        height={30}
      />

      <span className="text-xl">Minibox</span>
    </div>
  );
};

export default Logo;
