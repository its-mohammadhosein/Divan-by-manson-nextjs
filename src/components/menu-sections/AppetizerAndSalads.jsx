import React from "react";
import Image from "next/image";
import gil1 from "@/public/images/gil-1.png";
import gil2 from "@/public/images/gil-2.png";
import hdr from "@/public/images/Header-01.png";
import ftr from "@/public/images/IMG_20240515_230056_410.png";

function AppetizerAndSalads(props) {
  return (
      <>
        <div className={'bg-[#E0D1B9] z-30'}>
          <Image src={hdr} alt={'header'}/>
        </div>
        <div
            className={"bg-[url('/images/background-2.png')] mt-[-4rem] relative z-20"}
            id={"appetizerandsalad"}
        >
          <div
              className={
                "w-full  h-[2rem] px-4 flex justify-center items-center py-6 text-3xl gap-2"
              }
          >
            <div className={"flex items-center"}>
              <Image src={gil2} height={32} alt={"gil"}/>
            </div>
            <div className={"text-[19px]"}>Appertize and Salad</div>
            <div className={"flex items-center"}>
              <Image src={gil1} height={32} alt={"gil"}/>
            </div>
          </div>

          <div className={"items-container px-4 mt-2"}>
            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>125</div>
                <div className={"flex justify-end"}>سوپ</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Soup or Ash of the Day
                </div>
                <div className={"flex justify-end text-end"}>سوپ یا آش روز</div>
              </div>
            </div>

            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>120</div>
                <div className={"flex justify-end"}>زیتون پرورده</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Marinated olives , walnuts , pomegranate molasses , herbs
                </div>
                <div className={"flex justify-end text-end"}>
                  زيتون بدون هسته ، رب انار، گردو ، سبزی معطر
                </div>
              </div>
            </div>

            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>195</div>
                <div className={"flex justify-end"}>کشک بادمجان</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Fried eggplant , onion , mint , walnut whey
                </div>
                <div className={"flex justify-end text-end"}>
                  بادمجان سرخ شده کشک ، نعنا داغ ، پياز داغ
                </div>
              </div>
            </div>

            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>75</div>
                <div className={"flex justify-end"}>ماست دلار</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Yogurt and Dallar
                </div>
                <div className={"flex justify-end text-end"}>
                  ماست چکیده، سبزی دلار
                </div>
              </div>
            </div>

            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>85</div>
                <div className={"flex justify-end"}>ماست شیرازی</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Yogurt with cucumber, tomato and onion
                </div>
                <div className={"flex justify-end text-end"}>
                  ماست چکیده، خیار، گوجه، پياز نگینی، نعنا خشک
                </div>
              </div>
            </div>

            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>175</div>
                <div className={"flex justify-end"}>فسنجان بادمجان</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Chargrilled Eggplant with Fesenjan
                </div>
                <div className={"flex justify-end text-end"}>
                  بادمجان کبابی ، رب انار،گردو
                </div>
              </div>
            </div>
          </div>

          <div
              className={
                "w-full  h-[2rem] px-4 flex justify-center items-center py-6 text-3xl gap-2"
              }
          >
            <div className={"flex items-center"}>
              <Image src={gil2} height={32} alt={"gil"}/>
            </div>
            <div className={"text-[19px]"}>Salads</div>
            <div className={"flex items-center"}>
              <Image src={gil1} height={32} alt={"gil"}/>
            </div>
          </div>

          <div className={"items-container px-4 mt-2"}>
            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>190</div>
                <div className={"flex justify-end"}>سالاد شیرازی</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Cucumber, Cherry tomatoes, Onion, Fete Cheese, Avocado,
                  Vinagrette
                </div>
                <div className={"flex justify-end text-end"}>
                  گوجه گیلاسی، خیار، پیاز، سس آووکادو
                </div>
              </div>
            </div>

            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>265</div>
                <div className={"flex justify-end"}>سالاد اسفناج</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Spinach, Lettuce, Grilled, Halloumi Cheese, Cactuse Fruit
                </div>
                <div className={"flex justify-end text-end"}>
                  کاهو, بیبی اسفناج، میوه کاکتوس، پنیر، گریل شده هالومی
                </div>
              </div>
            </div>
          </div>

          <div
              className={
                "w-full  h-[2rem] px-4 flex justify-center items-center py-6 text-3xl gap-2"
              }
          >
            <div className={"flex items-center"}>
              <Image src={gil2} height={32} alt={"gil"}/>
            </div>
            <div className={"text-[19px]"}>Stew's</div>
            <div className={"flex items-center"}>
              <Image src={gil1} height={32} alt={"gil"}/>
            </div>
          </div>

          <div className={"items-container px-4 mt-2"}>
            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>270</div>
                <div className={"flex justify-end"}>ناردون</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Pomegranate stew with half baby chicken
                </div>
                <div className={"flex justify-end text-end"}>
                  نصف جوجه ارگانیک، انار، رب آلوچه
                </div>
              </div>
            </div>

            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>335</div>
                <div className={"flex justify-end"}>فسنجان</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Fesenjan stew with half baby chicken
                </div>
                <div className={"flex justify-end text-end"}>
                  نصف جوجه ارگانیک خورشت فسنجان
                </div>
              </div>
            </div>

            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>365</div>
                <div className={"flex justify-end"}>فیمه کرمانشاهی</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Gheyme kermanshahi, Stew with lambs and silvered almonds and
                  black barbarry
                </div>
                <div className={"flex justify-end text-end"}>
                  گوشت بره، خلال بادام، زرشک سیاه
                </div>
              </div>
            </div>

            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>385</div>
                <div className={"flex justify-end"}>قورمه مسما بادنجان</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Half baby chicken with fried eggplant and sour grape
                </div>
                <div className={"flex justify-end text-end"}>
                  نصف جوجه ارگانیک، بادنجان و گوجه سرخ شده، قوره و پیاز داغ
                </div>
              </div>
            </div>

            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>970</div>
                <div className={"flex justify-end"}>ماست زعفران</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Saffron yogurt stew with lamb shank
                </div>
                <div className={"flex justify-end text-end"}>
                  خورشت ماست و زعفران با ماهیچه سبز
                </div>
              </div>
            </div>

            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>360</div>
                <div className={"flex justify-end"}>ترش واش</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Northen Iranian herb stew with half baby chicken fried eggplant
                  and tomato
                </div>
                <div className={"flex justify-end text-end"}>
                  سبزی های معطر شمالی، سبزی ترش واش، نصف جوجه ارگانیک، بادنجان و
                  گوجه سرخ شده
                </div>
              </div>
            </div>

            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>380</div>
                <div className={"flex justify-end"}>گل نسترن</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Wild rose stew with half baby chicken
                </div>
                <div className={"flex justify-end text-end"}>
                  رز وحشی و نصف جوجه ارگانیک
                </div>
              </div>
            </div>
          </div>

          <div
              className={
                "w-full  h-[2rem] px-4 flex justify-center items-center py-6 text-3xl gap-2"
              }
          >
            <div className={"flex items-center"}>
              <Image src={gil2} height={32} alt={"gil"}/>
            </div>
            <div className={"text-[19px]"}>Rice</div>
            <div className={"flex items-center"}>
              <Image src={gil1} height={32} alt={"gil"}/>
            </div>
          </div>

          <div className={"items-container px-4 mt-2"}>
            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>150</div>
                <div className={"flex justify-end"}>برنج زعفرانی</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  350gr steamed saffron rice
                </div>
                <div className={"flex justify-end text-end"}>
                  ۳۵۰گرم برنج بخار پز
                </div>
              </div>
            </div>

            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>180</div>
                <div className={"flex justify-end"}>کته</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>kateh</div>
                <div className={"flex justify-end text-end"}>
                  کته ۳۵۰ گرم برنج
                </div>
              </div>
            </div>

            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>190</div>
                <div className={"flex justify-end"}>باقالی پلو</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Rice with fresh dill and broth peans
                </div>
                <div className={"flex justify-end text-end"}>
                  ۳۵۰ گرم برنج بخارپز همراه باقالی و سبزی های معطر
                </div>
              </div>
            </div>
            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>220</div>
                <div className={"flex justify-end"}>ادویه پلو</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Tabrizi rice
                </div>
                <div className={"flex justify-end text-end"}>
                  ۳۵۰گرم برنج بخارپز با ادویه‌های تبریزی
                </div>
              </div>
            </div>
            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>190</div>
                <div className={"flex justify-end"}>زرشک پلو</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Steamed saffron rice with barbarries and silvered pistachio
                </div>
                <div className={"flex justify-end text-end"}>
                  ۳۵۰ گرم برنج بخار پز و زرشک و خلال پسته
                </div>
              </div>
            </div>
          </div>

          <div
              className={
                "w-full  h-[2rem] px-4 flex justify-center items-center py-6 text-3xl gap-2"
              }
          >
            <div className={"flex items-center"}>
              <Image src={gil2} height={32} alt={"gil"}/>
            </div>
            <div className={"text-[19px]"}>Kabab's</div>
            <div className={"flex items-center"}>
              <Image src={gil1} height={32} alt={"gil"}/>
            </div>
          </div>

          <div className={"items-container px-4 mt-2"}>
            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>375</div>
                <div className={"flex justify-end"}>جوجه زعفرانی</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Grilled chunks of chicken breast marinated in saffron (٣٠٠ g)
                </div>
                <div className={"flex justify-end text-end"}>
                  ۳۰۰ گرم سینه مرغ بخار پز مزه دار شده زعفرانی
                </div>
              </div>
            </div>

            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>375</div>
                <div className={"flex justify-end"}>جوجه ماستی</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Marinated chicken thigh with saffron cream sauce
                </div>
                <div className={"flex justify-end text-end"}>
                  ۳۰۰ گرم ران جوجه ماستی با سس خامه زعفران
                </div>
              </div>
            </div>

            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>390</div>
                <div className={"flex justify-end"}>کوبيده</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Mixed lamb and beef koobideh kabab (2 skewers)
                </div>
                <div className={"flex justify-end text-end"}>
                  مخلوط گوشت گوساله ۲ سیخ ۲۴۰ گرم
                </div>
              </div>
            </div>

            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>420</div>
                <div className={"flex justify-end"}>لقمـــه</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Mixed lamb and beef Loghme kabab (٣٠٠g)
                </div>
                <div className={"flex justify-end text-end"}>
                  مخلوط گوشت بره و گوساله لقمه ۳۰۰ گرم
                </div>
              </div>
            </div>

            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>660</div>
                <div className={"flex justify-end"}>کباب ترش</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  cubes mignon filet Sour marinated in walnuts and herbs
                </div>
                <div className={"flex justify-end text-end"}>
                  فیله گوساله و گردو رب انار
                </div>
              </div>
            </div>

            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>790</div>
                <div className={"flex justify-end"}>کباب برگ</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  kabab Barg tenderloin L
                </div>
                <div className={"flex justify-end text-end"}>
                  ۳۰۰ گرم راسته مزه دار شده بره
                </div>
              </div>
            </div>

            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>590</div>
                <div className={"flex justify-end"}>چنجـــه</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  filet beef Cubed (300 g)
                </div>
                <div className={"flex justify-end text-end"}>
                  گوشت تکه ای فیله گوساله
                </div>
              </div>
            </div>

            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>590</div>
                <div className={"flex justify-end"}>لاری کباب</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Filet mignon cubes marinated in Divan special yogurt sauce (300
                  g)
                </div>
                <div className={"flex justify-end text-end"}>
                  گوشت تکه ای فیله گوساله ماستی
                </div>
              </div>
            </div>
          </div>

          <div
              className={
                "w-full  h-[2rem] px-4 flex justify-center items-center py-6 text-3xl gap-2"
              }
          >
            <div className={"flex items-center"}>
              <Image src={gil2} height={32} alt={"gil"}/>
            </div>
            <div className={"text-[19px]"}>Chelow Kabab's</div>
            <div className={"flex items-center"}>
              <Image src={gil1} height={32} alt={"gil"}/>
            </div>
          </div>

          <div className={"items-container px-4 mt-2"}>
            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>560</div>
                <div className={"flex justify-end"}>چلو کباب لقمه</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Mixed lamb and beef loghme kebab with steamed saffron rice
                </div>
                <div className={"flex justify-end text-end"}>
                  مخلوط لغمه گوسفند و گاو کباب با زعفران دم کرده برنج
                </div>
              </div>
            </div>

            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>495</div>
                <div className={"flex justify-end"}>چلوكباب کوبيده</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Mixed lamb and beef kubideh kabab with steamed saffron rice
                </div>
                <div className={"flex justify-end text-end"}>
                  مخلوط گوسفند و گوساله کوبیده کباب با برنج زعفرانی دم کرده
                </div>
              </div>
            </div>

            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>890</div>
                <div className={"flex justify-end"}>چلو کباب برگ</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Lamb tenderloin barg kabab with steamed saffron rice
                </div>
                <div className={"flex justify-end text-end"}>
                  بره برگ کباب با برنج زعفرانی دم کرده
                </div>
              </div>
            </div>

            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>720</div>
                <div className={"flex justify-end"}>چلوكباب چنجه</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Cubed beef filet kabab with steamed saffron rice
                </div>
                <div className={"flex justify-end text-end"}>
                  کباب فیله گاو مکعبی با برنج زعفرانی دم کرده
                </div>
              </div>
            </div>
          </div>

          <div
              className={
                "w-full  h-[2rem] px-4 flex justify-center items-center py-6 text-3xl gap-2"
              }
          >
            <div className={"flex items-center"}>
              <Image src={gil2} height={32} alt={"gil"}/>
            </div>
            <div className={"text-[19px]"}>Mains</div>
            <div className={"flex items-center"}>
              <Image src={gil1} height={32} alt={"gil"}/>
            </div>
          </div>

          <div className={"items-container px-4 mt-2"}>

            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>395</div>
                <div className={"flex justify-end"}>زرشک پلو با مرغ پرتقالی</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Saffron orange chicken with
                  steamed saffron rice , barberries
                  and silvered pistachio
                </div>
                <div className={"flex justify-end text-end"}>
                  برنج بخار پز با زرشک و خلال پسته به
                  همراه جوجه بدون استخوان پرتقالی
                </div>
              </div>
            </div>


            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>310</div>
                <div className={"flex justify-end"}>اکبر جوجه</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Crispy half confit baby chicken
                  served with steamed saffron rice
                </div>
                <div className={"flex justify-end text-end"}>
                  ۱/۲ جوجه سبز با سس انار با آلو قیصی و
                  پياز
                </div>
              </div>
            </div>


            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>390</div>
                <div className={"flex justify-end"}>مرغ شکم پر</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Whole confit baby chicken
                  stuffed with Persian herbs ,
                  walnut and barberries
                </div>
                <div className={"flex justify-end text-end"}>
                  جوجه کامل سبز با سبزی معطر، زرشک ،
                  گردو ، رب ازگیل
                </div>
              </div>
            </div>


            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>790</div>
                <div className={"flex justify-end"}>ماهی شکم پر</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>
                  Oven baked whole trout fish with
                  northern Iranian herbs and
                  pomegranate sauce
                </div>
                <div className={"flex justify-end text-end"}>
                  قزل آلا ۵۰۰ گرمی ، سبزی معطر ، زرشک ،
                  گردو ، رب نارنج
                </div>
              </div>
            </div>


            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>
                  990
                </div>
                <div className={"flex justify-end"}>
                  باقالی پلو با ماهیچه
                </div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>Baghali polo with confit lamb
                  shank
                </div>
                <div className={"flex justify-end text-end"}>برنج بخار پز با شوید تازه به همراه باقالی
                  سبز و ماهیچه بره
                </div>
              </div>
            </div>


            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>460</div>
                <div className={"flex justify-end"}>باقالی پلو با مرغ</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>Baghali polo with half baby
                  chicken
                </div>
                <div className={"flex justify-end text-end"}>برنج بخار پز با شوید تازه با ۱/۲ جوجه
                  ارگانیک
                </div>
              </div>
            </div>


            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>990</div>
                <div className={"flex justify-end"}>ادویه پلو با ماهیچه</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>Tabrizi rice with buttery carrots
                  ,raisins , silvered pistachio confit
                  lamb shank
                </div>
                <div className={"flex justify-end text-end"}>برنج بخار پز با ادویه تبريزی با کشمش و
                  خلال پسته و هویج با ماهیچه بره
                </div>
              </div>
            </div>


            <div className={"product mb-12 flex flex-col"}>
              <div className={"grid grid-cols-2 text-[20px]"}>
                <div className={"flex justify-start"}>760</div>
                <div className={"flex justify-end"}>ماهی سرخ شده</div>
              </div>
              <div
                  className={
                    "grid grid-cols-2 [&>*]:text-black/45 text-[12px] py-2"
                  }
              >
                <div className={"flex justify-start text-start"}>Fried whole trout fish</div>
                <div className={"flex justify-end text-end"}>قزل آلا ۵۰۰ گرمی سرخ شده به همراه
                  لیمو و ترشی پياز
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className={'bg-[#E0D1B9] mt-[-7rem] relative z-10'}>
          <Image className={'z-10 relative'} src={ftr} alt={'header'}/>
        </div>
      </>
  );
}

export default AppetizerAndSalads;
