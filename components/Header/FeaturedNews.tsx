import { NewsSummary } from "../News/NewsSummary"

export const FeaturedNews = ({ articles }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 font-semibold tracking-wider uppercase rounded-full bg-amber-100 text-m text-rose-600">
            တၢ်ကစီၣ်အသီ
          </p>
        </div>
        <h3 className="max-w-lg mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-2xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="27df4f81-c854-45de-942a-fe90f7a300f9"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                width="52"
                height="24"
              />
            </svg>
          </span>
          <span className="relative">တၢ်ဒုးကဲထီၣ်လၢသူမွဲထၣ် ပယီၤသံ ၂ ဂၤ ဒီးဘၣ်ဒိ ၆ ဂၤ</span>
        </h3>
        <p className="text-base text-gray-700 md:text-lg">
          ဖဲလါယူၤလံထီၣ် ၁ သီ, ၂၀၂၂ ပယီၤသုးဟဲထီၣ်ဆှၢတၢ်အီၣ် ဒီးသုက့ယဲၢ် သုးရ့ၣ် ၂၂ သုးဒ့ ၅ အိၣ်ခိးခးအီၤလၢကျဲ ဒီးဘၣ်ဒိဝဲအါမးလီၤ.
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
      <NewsSummary imageUrl="https://openoregon.pressbooks.pub/app/uploads/sites/93/2020/03/DSC_8788-1024x681.jpg" title="ကညီဖိလၢထံဂုာ်ကီၢ်ဂၤ" summary="တၢ်ကလုၢ်န့ၣ်ကဲထီၣ်ပှၤကညီ, ဒီးလၢပှဲၤဝဲဒီးတၢ်ဘျုးတၢ်ဖှိၣ် ဒီးတၢ်မ့ၢ်တၢ်တီဒီးအိၣ်ဝဲဆိးဝဲလၢပကျါန့ၣ်လီၤ. ဒီးပထံၣ်ဘၣ်အလၤကပီၤလၢအဒိးန့ၢ်ဝဲဒ်ပၢ်အဖိခွါတဂၤဃီ အသိးန့ၣ်လီၤ." />
      <NewsSummary imageUrl="https://openoregon.pressbooks.pub/app/uploads/sites/93/2020/03/DSC_8788-1024x681.jpg" title="ကညီဖိလၢထံဂုာ်ကီၢ်ဂၤ" summary="တၢ်ကလုၢ်န့ၣ်ကဲထီၣ်ပှၤကညီ, ဒီးလၢပှဲၤဝဲဒီးတၢ်ဘျုးတၢ်ဖှိၣ် ဒီးတၢ်မ့ၢ်တၢ်တီဒီးအိၣ်ဝဲဆိးဝဲလၢပကျါန့ၣ်လီၤ. ဒီးပထံၣ်ဘၣ်အလၤကပီၤလၢအဒိးန့ၢ်ဝဲဒ်ပၢ်အဖိခွါတဂၤဃီ အသိးန့ၣ်လီၤ." />
      <NewsSummary imageUrl="https://openoregon.pressbooks.pub/app/uploads/sites/93/2020/03/DSC_8788-1024x681.jpg" title="ကညီဖိလၢထံဂုာ်ကီၢ်ဂၤ" summary="တၢ်ကလုၢ်န့ၣ်ကဲထီၣ်ပှၤကညီ, ဒီးလၢပှဲၤဝဲဒီးတၢ်ဘျုးတၢ်ဖှိၣ် ဒီးတၢ်မ့ၢ်တၢ်တီဒီးအိၣ်ဝဲဆိးဝဲလၢပကျါန့ၣ်လီၤ. ဒီးပထံၣ်ဘၣ်အလၤကပီၤလၢအဒိးန့ၢ်ဝဲဒ်ပၢ်အဖိခွါတဂၤဃီ အသိးန့ၣ်လီၤ." />
      <NewsSummary imageUrl="https://openoregon.pressbooks.pub/app/uploads/sites/93/2020/03/DSC_8788-1024x681.jpg" title="ကညီဖိလၢထံဂုာ်ကီၢ်ဂၤ" summary="တၢ်ကလုၢ်န့ၣ်ကဲထီၣ်ပှၤကညီ, ဒီးလၢပှဲၤဝဲဒီးတၢ်ဘျုးတၢ်ဖှိၣ် ဒီးတၢ်မ့ၢ်တၢ်တီဒီးအိၣ်ဝဲဆိးဝဲလၢပကျါန့ၣ်လီၤ. ဒီးပထံၣ်ဘၣ်အလၤကပီၤလၢအဒိးန့ၢ်ဝဲဒ်ပၢ်အဖိခွါတဂၤဃီ အသိးန့ၣ်လီၤ." />
      </div>
    </div>
  );
};
