import {NavBar} from './components/NavBar'
import hero_bg_movile from './assets/images/image-web-3-mobile.jpg'
import hero_bg_destok from './assets/images/image-web-3-desktop.jpg'
import article_img_1 from './assets/images/image-retro-pcs.jpg'
import article_img_2 from './assets/images/image-top-laptops.jpg'
import article_img_3 from './assets/images/image-gaming-growth.jpg'


function App() {

  
  return (
    <div className='bg-[#fffdfa]]'>

      <NavBar/>

      <div className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-[repeat(3, minmax(0, auto))] gap-x-6 gap-y-10 px-4 lg:px-1 pb-10 '>
        <main className='lg:col-span-4 lg:row-span-2 grid grid-cols-1 lg:grid-cols-2 lg:gap-6 lg:grid-rows-[repeat(2, minmax(0, auto))]'>
          <picture className='lg:col-span-2 lg:row-span-1'>
            <source media="(max-width:685px)" srcSet={hero_bg_movile}/>
         
            <img src={hero_bg_destok} className='h-full w-full' alt='hero mg'/>
          </picture>
          
          <h1 className='text-4xl font-bold pt-4 pl-0 pr-10 lg:pr-10 lg:text-5xl'>The Bright Future of Web 3.0?</h1>
          
          <section className='pb-6 lg:pb-0'>
            <p className='py-2 leading-7 lg:pr-3'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
              But is it really fulfilling its promise?</p>
            <a href='/' className='px-6 font-normal text-sm bg-red hover:bg-black text-white py-3 border mt-2 inline-block tracking-[0.3em] uppercase'>  Read more</a>
          </section>
        </main>
        <aside className='lg:col-span-2 lg:row-span-2 flex flex-col bg-lightWhite text-white px-5 py-9'>
          
          <h2 className='text-4xl font-bold pb-5 text-orange'>New</h2>

          <div className='border-b pb-8 mb-5'>
            <h3 className='text-xl font-bold  text-left py-2 hover:text-orange hover:cursor-pointer'>Hydrogen VS Electric Cars</h3>
            <p className='  leading-6 text-lightWhite'> Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>

          <div className='border-b pb-8 mb-5'>
            <h3 className='text-xl font-bold  py-2 hover:text-orange hover:cursor-pointer'>The Downsides of AI Artistry</h3>
            <p className='  leading-6 text-lightWhite'>What are the possible adverse effects of on-demand AI image generation?</p>
          </div>

          <div>
            <h3 className='text-xl font-bold  text-left py-2 hover:text-orange hover:cursor-pointer'>Is VC Funding Drying Up?</h3>
            <p className='leading-6 text-lightWhite'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>

        </aside>

        
        <article className='flex lg:col-span-2'> 
          <img src={article_img_1} alt='' className='w-20 h-full bg-black inline-block'/> 
          <div className='flex justify-between flex-col h-full pl-5'>
            <span className='text-2xl font-bold text-gray-300'>01</span>
            <h4 className='font-bold hover:cursor-pointer hover:text-orange py-1'> Reviving Retro PCs</h4>
            <p className='text-sm lg:pr-6 text-left text-lightWhite'>What happens when old PCs are given modern upgrades?</p>
          </div>
        </article>

        <article className='flex lg:col-span-2 '> 
          <img src={article_img_2} alt='' className='w-20 h-full bg-black inline-block'/> 
          <div className='flex justify-between flex-col h-full pl-5'>
            <span className='text-2xl font-bold text-gray-300'>02</span>
            <h4 className='font-bold hover:cursor-pointer hover:text-orange py-1'>Top 10 Laptops of 2022</h4>
            <p className='text-sm lg:pr-6 text-lightWhite'>Our best picks for various needs and budgets.</p>
          </div>
        </article>

        <article className='flex lg:col-span-2 text-justify '> 
          <img src={article_img_3} alt='' className='w-20 h-full bg-black inline-block'/> 
          <div className='flex justify-between flex-col h-full pl-5 '>
            <span className='text-2xl font-bold text-gray-300'>03</span>
            <h4 className='font-bold hover:cursor-pointer hover:text-orange py-1'>The Growth of Gaming</h4>
            <p className='text-sm  text-lightWhite'>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </article>
        
      </div>
    </div>
  );
}

export default App;
