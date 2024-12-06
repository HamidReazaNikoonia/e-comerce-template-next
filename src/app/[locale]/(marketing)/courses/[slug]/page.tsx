import { getTranslations, setRequestLocale } from 'next-intl/server';

import ProductListHeader from '@/sections/courses/ProductListHeader';
import ProductList from '@/sections/courses/ProductList';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Star } from 'lucide-react';
import AddToCartButton from '@/components/AddToCartButton';
import CommentLayout from '@/components/Comment';

type IAboutProps = {
  params: Promise<{ slug: string; locale: string }>;
};
export async function generateMetadata(props: IAboutProps) {
  // const { locale } = await props.params;
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'courses',
  // });

  // return {
  //   title: t('meta_title'),
  //   description: t('meta_description'),
  // };
}


const fetchRepo = async () => {
  const res = await fetch('http://localhost:9000/v1/product', {
    next: { revalidate: 60 }, // Enables ISR (Incremental Static Regeneration)
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};


export default async function SpecificCourse(props: IAboutProps) {
  // const { locale } = await props.params;
  // setRequestLocale(locale);
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'About',
  // });

  const productsData = await fetchRepo();
  console.log(productsData.data.products)

  const params = await props.params;
  console.log({pp: params})



  return (
    <div className='overflow-hidden pt-16 bg-black text-white min-h-screen'>
        <div className="container mx-auto pt-20">
          {/* Header */}
          <div className='mb-8 flex mr-8 md:mr-0 flex-col-reverse md:flex-row justify-end items-end'>
          <Breadcrumbs />
          </div>
         
        </div>

        <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row -mx-4">

        {/* Left Side */}

      <div className="md:flex-1 px-4">
        <div >
          <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
            <div  className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
              <span className="text-5xl">1</span>
            </div>
          </div>

          <div className="flex -mx-2 mb-4">
            
              <div className="flex-1 px-2">
                <button  className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ring-2 ring-indigo-300 ring-inset">
                  <span className="text-2xl"></span>
                </button>
              </div>

              <div className="flex-1 px-2">
                <button  className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ring-2 ring-indigo-300 ring-inset">
                  <span className="text-2xl"></span>
                </button>
              </div>

              <div className="flex-1 px-2">
                <button  className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ring-2 ring-indigo-300 ring-inset">
                  <span className="text-2xl"></span>
                </button>
              </div>


              <div className="flex-1 px-2">
                <button  className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ring-2 ring-indigo-300 ring-inset">
                  <span className="text-2xl"></span>
                </button>
              </div>

        
          </div>
        </div>

        


      </div>


      {/* Rigth SIde */}

      <div className="md:flex-1 px-4">
        <h2 className="mb-2 leading-tight tracking-tight font-bold text-white text-right text-2xl md:text-3xl">
          آموزش بازیگری
        </h2>
        <p className="text-gray-300 text-right text-sm mt-6">
          آموزش بازیگری برای ما
        </p>

        <div className="flex items-center space-x-4 my-4">
          <div>
            <div className="rounded-lg bg-gray-100 flex py-2 px-3">
              <span className="text-indigo-400 mr-1 mt-1">تومان</span>
              <span className="font-bold text-indigo-600 text-3xl">{(2500000).toLocaleString('ar-EG')}</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-green-500 text-xl font-semibold">
              {(10).toLocaleString('ar-EG')}٪ تخفیف
            </p>
            <p className="text-gray-400 text-sm">شامل هزینه مالیات</p>
          </div>

          <div className="mt-2.5 mb-5 flex items-center">
      <span className="mr-2 pt-1 rounded bg-yellow-300 text-black px-2.5 py-0.5 text-xs font-semibold">5</span>
      {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            strokeWidth={1}
            size={18}
            fill={index < 5 ? "#facc15" : "gray"}
            stroke="none"
          />
        ))}
     {/* <Star  stroke='gray' fill='none' size={18} />       */}
    </div>
        </div>

        <p className="text-gray-300 text-sm pl-2 text-right leading-8 mt-8 border-t-2 pt-8 border-gray-700">
        
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد

        </p>

        <div className="flex justify-end mt-8 py-4 space-x-4">
          {/* <div className="relative">
            <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Qty</div>
            <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            
          </div> */}

          {/* <button type="button" className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
            Add to Cart
          </button> */}
          <AddToCartButton productIsAvailable={true} product={productsData.data.products[0]} />
        </div>
      </div>
    </div>
  </div>

  {/* Comment Section */}
          <CommentLayout />


    </div>
  );
};
