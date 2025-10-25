import Image from "next/image";

const AppStoreBadge = ({ store }:{store:string}) => {
  const isApple = store === "apple";

  return (
    <div className="bg-black text-white px-5 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors cursor-pointer">
      {isApple ? (
        <Image
          src={"/aapple.png"}
          className="text-white"
          width={35}
          height={35}
          alt="logo"
        />
      ) : (
        <Image src={"/playStore.png"} width={35} height={35} alt="logo" />
      )}
      <div className="flex flex-col items-start">
        <span className="text-[10px] uppercase tracking-wide">
          {isApple ? "Download on the" : "Get it on"}
        </span>
        <span className="text-base font-semibold -mt-0.5">
          {isApple ? "App Store" : "Google Play"}
        </span>
      </div>
    </div>
  );
};
export default AppStoreBadge;