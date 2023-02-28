import React from 'react'
import image1 from './images/image-web-3-mobile.jpg'
import image2 from './images/image-retro-pcs.jpg'
import image3 from './images/image-top-laptops.jpg'
import image4 from './images/image-gaming-growth.jpg'

export default function Main() {
  return (
    <div className="the-grid w-3/4 mt-16 grid tablet:grid-cols-1 laptop:grid-cols-3
     desktop:grid-cols-3 gap-8">
        <div className="grid-1&2of9 laptop:col-span-2 desktop:col-span-2 
        laptop:bg-web3desk bg-no-repeat bg-cover laptop:h-[300px]">
            <img className="laptop:hidden w-full" src={image1} />
        </div>
        <div className="grid-4of9 w-full">
            <h1 className="text-6xl font-bold w-full">The Bright Future of Web 3.0?</h1>
        </div>
        <div className="grid-5of9 flex flex-col justify-between gap-10 items-start">
            <p className="text-slate-500 text-base font-medium">
                We dive into the next evolution of the web that claims 
                to put the power of the platforms back into the hands 
                of the people. But is it really fulfilling its promise? 
            </p>
            <button className="bg-Softred text-white uppercase tracking-[0.25rem] w-1/2 p-3 font-medium">
               Read more 
            </button>  
        </div>
        <div className="grid-3&6of9 tablet:mt-10 laptop:mt-0 desktop:mt-0 
        bg-Verydark-blue desktop:col-start-3 desktop:row-start-1 laptop:col-start-3 laptop:row-start-1 row-span-2 p-6">
            <h2 className="text-4xl text-Softorange font-bold">
                New
            </h2>
            <h3 className="text-white mt-7 text-xl font-bold">
                Hydrogen VS Electric Cars
            </h3>
            <p className="text-slate-300 mt-2 text-base">
                Will hydrogen-fueled cars ever catch up to EVs?
            </p>
            <hr className="border-slate-500 mt-8 mb-8"></hr>
            <h3 className="text-white mt-6 font-bold text-xl">
            The Downsides of AI Artistry
            </h3>
            <p className="text-slate-300 mt-2 text-base">
                What are the possible adverse effects of on-demand AI image generation?
            </p>
            <hr className="border-slate-500 mt-8 mb-8"></hr>
            <h3 className="text-white mt-6 font-bold text-xl">
                Is VC Funding Drying Up?
            </h3>
            <p className="text-slate-300 mt-2 text-base">
                Private funding by VC firms is down 50% YOY. We take a look at what that means.
            </p>
        </div>
        <div className="grid-7of9 grid grid-cols-[1fr,2fr] gap-8 mt-10 h-min">
            <div className="img-div">
                <img src={image2} />
            </div>
            <div className="text-div flex flex-col justify-between">
            <p className="font-bold text-4xl text-Grayish-blue">01</p>
            <h3 className="font-bold text-Verydark-blue text-lg">Reviving Retro PCs</h3>
            <p className="text-Dark-grayishblue">What happens when old PCs are given modern upgrades?</p>
            </div>
        </div>
        <div className="grid-8of9 grid grid-cols-[1fr,2fr] gap-8 mt-10 h-min">
            <div className="img-div">
                <img src={image3} />
            </div>
            <div className="text-div flex flex-col justify-between">
                <p className="font-bold text-4xl text-Grayish-blue">02</p>
                <h3 className="font-bold text-Verydark-blue text-lg">  
                    Top 10 Laptops of 2022
                </h3>
                <p className="text-Dark-grayishblue">
                    Our best picks for various needs and budgets.
                </p>
            </div>
        </div>
        <div className="grid-9of9 grid grid-cols-[1fr,2fr] gap-8 mt-10 h-min">
            <div className="img-div">
                <img className="w-full" src={image4} />
            </div>
            <div className="text-div flex flex-col justify-between">
                <p className="font-bold text-4xl text-Grayish-blue">03</p>
                <h3 className="font-bold text-Verydark-blue text-lg">
                    The Growth of Gaming
                </h3>
                <p className="text-Dark-grayishblue">
                    How the pandemic has sparked fresh opportunities.
                </p>
            </div>
        </div>
    </div>
  )
}
