export default function FV() {
  return (
    <div>
      <h1 className="block py-4 relative">
        <img
          src="/logo.png"
          alt="ImageX "
          width={400}
          height={174}
          className="mx-auto"
        />
        <div className="absolute bottom-2 right-4 flex items-end w-[120px] h-auto gap-2">
          <span className="text-gray-700 text-sm shrink-0 leading-none">
            Powered by
          </span>
          <span className="text-gray-700 text-lg shrink-0 font-bold leading-none gradient-text">
            Gemini 1.5 Flash
          </span>
        </div>
      </h1>
      <div className="text-center pt-12 pb-8">
        <h2 className="text-gray-700 text-xl font-bold gradient-text">
          画像を選んでimgタグに必要な情報を一瞬で生成
        </h2>
      </div>
    </div>
  );
}
