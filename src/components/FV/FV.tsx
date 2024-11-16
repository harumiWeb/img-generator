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
        <div className="absolute bottom-2 right-[105px] flex items-end w-[120px] h-auto gap-2">
          <span className="text-gray-700 text-sm shrink-0 leading-none">
            Powered by
          </span>
          <a href="https://deepmind.google/technologies/gemini/flash/" target="_blank" rel="noopener noreferrer" className="text-gray-700 text-lg shrink-0 font-bold leading-none gradient-text block">
            Gemini 1.5 Flash
          </a>
        </div>
      </h1>
      <div className="text-center pt-12 pb-8">
        <h2 className="text-gray-700 text-xl font-bold gradient-text">
          画像を選んでimgタグに必要なコードを一瞬で生成
        </h2>
        <p className="text-gray-700 text-sm mt-8">⚠️ このサービスはベータ版です。<br />
          Gemini 1.5 Flashの無料版APIを使用しているため、1日のリクエスト上限があります。<br />
          リクエスト上限に達した場合は、翌日にお試しください。詳しくは
          <a href="/terms" className="underline text-blue-500">利用規約</a>をご覧ください。
          </p>
      </div>
    </div>
  );
}
