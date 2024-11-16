import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
};

export default function Privacy() {
  return (
    <div className="min-h-[calc(100vh-56px)] px-4 py-8">
      <div className="max-w-3xl mx-auto p-6 border-gradient">
        <h1 className="text-2xl font-bold text-center py-4">プライバシーポリシー</h1>
        <ol className="space-y-8">
          <li>
            <h2 className="text-lg font-bold pb-2">第1条 概要</h2>
            <p>
            ImgaeX（以下，「当社」といいます。）は，本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
            </p>
          </li>
          <li>
            <h2 className="text-lg font-bold pb-2">第2条 個人情報</h2>
            <p>
            「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
            </p>
          </li>
          <li>
            <h2 className="text-lg font-bold pb-2">第3条 個人情報を収集・利用する目的</h2>
            <p>
            当社が個人情報を収集・利用する目的は，以下のとおりです。
            </p>
            <ol className="space-y-4 list-decimal list-inside pl-6 py-6">
              <li>
                本サービスの提供・運営のため
              </li>
              <li>
                ユーザーからのお問い合わせに回答するため（本人確認を含む）
              </li>
              <li>
                メンテナンス，重要なお知らせなど必要に応じたご連絡のため
              </li>
              <li>
              利用規約に違反したユーザーや，不正・不当な目的でサービスを利用しようとするユーザーの特定をし，ご利用をお断りするため
              </li>
              <li>
                その他，当社が定める目的
              </li>
            </ol>
          </li>
          <li>
            <h2 className="text-lg font-bold pb-2">第4条 利用目的の変更</h2>
            <ol className="space-y-4 list-decimal list-inside pl-6 py-6">
              <li>
              当社は，利用目的が変更前と関連性を有すると合理的に認められる場合に限り，個人情報の利用目的を変更するものとします。
              </li>
              <li>
                利用目的の変更を行った場合には，変更後の目的について，当社所定の方法により，ユーザーに通知し，または本ウェブサイト上に公表するものとします。
              </li>
            </ol>
          </li>
          <li>
            <h2 className="text-lg font-bold pb-2">
              第5条 個人情報の第三者提供
            </h2>
            <ol className="space-y-4 list-decimal list-inside">
              <li>
              当社は，次に掲げる場合を除いて，あらかじめユーザーの同意を得ることなく，第三者に個人情報を提供することはありません。ただし，個人情報保護法その他の法令で認められる場合を除きます。
              <ol className="space-y-4 list-decimal list-inside pl-6 py-6">
                <li>
                人の生命，身体または財産の保護のために必要がある場合であって，本人の同意を得ることが困難であるとき
                </li>
                <li>
                公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって，本人の同意を得ることが困難であるとき
                </li>
                <li>
                国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって，本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
                </li>
                <li>
                予め次の事項を告知あるいは公表し，かつ当社が個人情報保護委員会に届出をしたとき
                <ol className="space-y-4 list-decimal list-inside pl-6 py-6">
                  <li>
                    利用目的に第三者への提供を含むこと
                  </li>
                  <li>
                    第三者に提供されるデータの項目
                  </li>
                  <li>
                    第三者への提供の手段または方法
                  </li>
                  <li>
                    本人の求めに応じて個人情報の第三者への提供を停止すること
                  </li>
                  <li>
                    その他，個人情報保護法その他の法令で認められる場合
                  </li>
                </ol>
                </li>
              </ol>
              </li>
              <li>
              前項の定めにかかわらず，次に掲げる場合には，当該情報の提供先は第三者に該当しないものとします。
              <ol className="space-y-4 list-decimal list-inside pl-6 py-6">
                <li>
                  当社が利用目的の達成に必要な範囲内において個人情報の取り扱いの全部または一部を委託する場合
                </li>
                <li>
                  合併その他の事由による事業の承継に伴って個人情報が提供される場合
                </li>
                <li>
                  個人情報を特定の者との間で共同して利用する場合であって，その旨並びに共同して利用される個人情報の項目，共同して利用する者の範囲，利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について，あらかじめ本人に通知し，または本ウェブサイト上に公表する場合
                </li>
              </ol>
              </li>
            </ol>
          </li>
          <li>
            <h2 className="text-lg font-bold pb-2">第6条 個人情報の利用停止等</h2>
            <ol className="space-y-4 list-decimal list-inside">
              <li>
                当社は，本人から，個人情報が，利用目的の範囲を超えて取り扱われているという理由，または不正の手段により取得されたものであるという理由により，その利用の停止または消去（以下，「利用停止等」といいます。）を求められた場合には，遅滞なく必要な調査を行います。
              </li>
              <li>
                前項の調査結果に基づき，その請求に応じる必要があると判断した場合には，遅滞なく，当該個人情報の利用停止等を行います。
              </li>
              <li>
                当社は，前項の規定に基づき利用停止等を行った場合，または利用停止等を行わない旨の決定をしたときは，遅滞なく，これをユーザーに通知します。
              </li>
              <li>
                前2項の規定にかかわらず，利用停止等に多額の費用を有する場合その他利用停止等を行うことが困難な場合であって，ユーザーの権利利益を保護するために必要なこれに代わるべき措置をとれる場合は，この代替策を講じるものとします。
              </li>
            </ol>
          </li>
          <li>
            <h2 className="text-lg font-bold pb-2">第7条 プライバシーポリシーの変更</h2>
            <ol className="space-y-4 list-decimal list-inside">
              <li>
              本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項を除いて，ユーザーに通知することなく，変更することができるものとします。
              </li>
              <li>
                当社が別途定める場合を除いて，変更後のプライバシーポリシーは，本ウェブサイトに掲載したときから効力を生じるものとします。
              </li>
            </ol>
          </li>
          <li>
            <h2 className="text-lg font-bold pb-2">第8条 お問い合わせ</h2>
            <p>
              本ポリシーに関するお問い合わせは，下記ブログのお問い合わせフォームまたは管理人のXのDMまでお願いいたします。
            </p>
            <p className="py-2">
              ブログお問い合わせページ：<a href="https://www.halpost.tech/contact" className="underline text-blue-500">https://www.halpost.tech/contact</a>
            </p>
            <p className="py-2">
              管理人X：<a href="https://x.com/HarumiWebDesign" className="underline text-blue-500">https://x.com/HarumiWebDesign</a>
            </p>
          </li>
        </ol>
        <span className="text-gray-900 ml-auto block w-fit py-4">以上</span>
      </div>
    </div>
  );
}
