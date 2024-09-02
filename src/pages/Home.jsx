import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import House from '../images/pictures/house.jpg'
import Star from '../images/icons/star.png'
import Gstar from '../images/icons/greenstar.png'
import Quote from '../images/icons/quote.png'
import Search1 from '../images/icons/search.png'
import Search2 from '../images/icons/search2.png'
import Srch from '../images/icons/srch.png'
import SrcBtn from '../images/icons/searchbtn.png'
import Profile from '../images/pictures/profile.png'
import List from '../images/pictures/listing.png'
import Illus from '../images/illustration/Illustration.png'
import Bed from '../images/icons/Bed.png'
import Bath from '../images/icons/Bath.png'
import Meter from '../images/icons/Square Meters.png'
import Fav from '../images/icons/Favorited.png'
import Check from '../images/icons/housecheck.png'
import Dollar from '../images/icons/dollar.png'
import Percent from '../images/icons/percent.png'
import Locate from '../images/icons/locate.png'
import Play from '../images/icons/play.png'
import Notes from '../images/icons/notes.png'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='font-Jakarta'>
        <Navbar/>

        <section>
          <div className='flex pb-10 md:pb-0  md:h-screen sm:relative'>
            <div className='bg-gradient-to-b from-purple-300/40 sm:pl-32 sm:pr-10 sm:pt-20 pt-10 w-screen  md:w-[50%] '>

            <div className='z-0'>
              <h1 className='text-5xl sm:text-5xl text-center sm:text-left font-semibold px-2 md:px-0'>
                <span className='before:z-20 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block mx-3'>
                  <span className='relative text-white z-20'>Buy,</span> 
                  </span> 
                <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block'>
                  <span className='relative text-white'>rent,</span> 
                  </span> 
                  <span className='px-1'>or</span>
                  
                <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block'>
                  <span className='relative text-white'> Sell</span> 
                  </span> 
                   your property easily
                   </h1>
              <p className='py-7 px-14 sm:px-0 text-center text-lg sm:text-left '>A great platform to buy, sell, or even rent your properties without any commisions.</p>
            </div>

            <div className='flex justify-center sm:justify-start px-5 sm:px-0'>
              <div className=' flex bg-white text-md rounded-md border-b-[1px] w-screen sm:w-auto justify-around sm:justify-normal ' >
                <p className=' flex py-3 sm:px-8 w-full justify-center  border-b-2 border-y-white hover:border-b-purple-500 hover:text-purple-500 '>Rent</p>
                <p className='flex py-3 sm:px-8 w-full justify-center  border-b-2 border-y-white hover:border-b-purple-500 hover:text-purple-500'>Buy</p>
                <p className='flex py-3 sm:px-8 w-full justify-center  border-b-2 border-y-white hover:border-b-purple-500 hover:text-purple-500'>Sell</p>
              </div>
            </div>

            <div className='flex justify-center px-5 md:hidden '>
              <div className='flex bg-white text-md py-5 px-5 items-center rounded-b-md border-b-[1px] w-screen sm:w-auto justify-between sm:justify-normal'>
                {/* <p className=' text-slate-600'>Search Location</p> */}
                <input className='w-full h-full focus:outline-none active:border-purple-200' type="text" placeholder='Search location' />
                <div>
                  <img className='w-12' src={SrcBtn} alt="" />
                </div>
              </div>

            </div>

              <div className='md:flex hidden items-center bg-white absolute z-50 divide-x-[1px] rounded-b-md rounded-tr-md shadow-lg'>
                <div className='my-4 px-8 '>
                  <p className='text-sm text-slate-500'>Location</p>
                  <p className='font-semibold'>Barcelona, Spain</p>
                </div>
                <div className='my-4 px-8'>
                  <p className='text-sm text-slate-500'>When</p>
                  <p className='font-semibold'>Select Move-in Date</p>
                </div>
                <div >
                  <button className='bg-purple-500 px-8 py-4 mx-8 rounded-lg text-white'>Browse Properties</button>
                </div>

              </div>

              <div className='flex content-center justify-center mx-auto px-5 py-10 sm:pt-32 gap-5 sm:gap-14'>
                <div className='w-[50%]'>
                  <img className='w-14' src={Search1} alt="" />
                  <div className='pt-5'>
                    <p className='text-purple-600 text-xl sm:text-2xl whitespace-nowrap'>50k+ renters</p>
                    <p className='text-sm'>believe in our service</p>

                  </div>
                </div>
                <div className='w-[50%]'>
                  <img className='w-14' src={Search2} alt="" />
                  <div className='pt-5'>
                    <p className='text-purple-600 text-xl sm:text-2xl whitespace-nowrap'>10k+ properties</p>
                    <p className='text-sm '>ready for occupancy</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='md:flex hidden sm:h-[90%] w-[50%] bg-cover bg-left bg-no-repeat z-0 mix-blend-multiply justify-end items-end relative bg-white' style={{ backgroundImage: `url(${House})` }}>

                <div className='bg-[#000929] text-white flex w-fit h-fit self-end justify-end content-end items-end p-5 rounded-tl-md'>
                  <div className=''>

                  <div className='flex gap-5 items-center'>
                  <h3>Excellent</h3>

                  <div className='flex items-center'>
                  <img className='w-5' src={Gstar} alt="" />
                  <p>Trustpilot</p>
                  </div>
                  </div>

                  <div className='flex  py-3'>
                    <img className='w-5' src={Star} alt="" />
                    <img className='w-5' src={Star} alt="" />
                    <img className='w-5' src={Star} alt="" />
                    <img className='w-5' src={Star} alt="" />
                    <img className='w-5' src={Star} alt="" />

                  </div>
                  <p className='text-xs'>From 3,264 reviews</p>
                  </div>
                </div>

                <div className=' absolute left-0 top-12 p-5 rounded-lg white'>
                  <div className='flex items-center gap-3'>
                    <img className='rounded-full' src={Profile} alt="" />
                    <div>
                      <h3 className='font-semibold'>Manuel Villa</h3>
                      <p className='text-xs text-slate-500'>Renter</p>

                      <div className='flex gap-3 pt-3'>
                        <p className='text-xs text-slate-500 flex '>
                        Moved with
                        </p>
                        
                        <div className='font-semibold text-black text-xs flex'>
                          <img className='w-4 gap-3' src={require('../images/icons/Frame.png')} alt="" /> 
                          <p>Estatery</p>
                        </div> 
                      
                      </div>
                    </div>
                  </div>

                  <div className='flex gap-5 py-5 '>
                    <div>
                    <img className='w-9' src={Quote} alt="" />

                    </div>
                    <p className='text-xs w-48'>I loved how smooth the move was, and finally got the house we wanted.</p>
                  </div>

                  <div className='border-t-[1px] flex justify-between py-2'>
                    <div className='items-center flex flex-col'>
                      <p className='text-xl font-semibold py-2'>$1500</p>
                      <p className='text-xs'>Saved up to</p>
                    </div>
                    <div className='items-center flex flex-col'>
                      <p className='text-xl font-semibold py-2'>-24 hrs</p>
                      <p className='text-xs'>Process time</p>
                    </div>
                    

                  </div>

                </div>
            </div>
          </div>
        </section>

        <section>
          <div className='md:flex-row flex flex-col md:w-[75%] px-2 md:px-0 items-center justify-center mx-auto gap-x-10'>
            <div className='md:w-[40%] h-max bg-purple-100 border-purple-200 rounded-md border-[1px] pt-5 pl-5 '>
              <h2 className='text-3xl'>The new way to find your new home</h2>
              <p className='text-base py-5'>Find your dream place to live in with more than 10k+ properties listed.</p>
              <button className='pb-[100% bg-purple-900 rounded-md text-white px-3 py-2'>Browse Properties</button>
              <img src={Illus} alt="" />
            </div>
            <div className='md:w-[60%] md:grid md:grid-cols-2 grid-cols-1 md:gap-x-3 md:gap-y-10 *:rounded-md *:p-2'>
              <div className='hover:bg-purple-100'>
                <img src={Check} alt="" />
                <h1 className='font-semibold py-3'>Property Insurance</h1>
                
                <p className='text-sm'>We offer our customer property protection of liability coverage and insurance for their better life.</p>

                
              </div>
              <div className='hover:bg-purple-100'>
                <img src={Dollar} alt="" />
                <h1 className='font-semibold py-3'>Best Price</h1>
                <p className='text-sm'>Not sure what  you should be charging for your property? No need to worry, let us do the numbers for you.</p>
              </div>
              <div className='hover:bg-purple-100'>
                <img src={Percent} alt="" />
                <h1 className='font-semibold py-3'>Lowest Commission</h1>
                <p className='text-sm'>You no longer have to negotiate commissions and haggle with other agents it only cost 2%!</p>
              </div>
              <div className='hover:bg-purple-100'>
                <img src={Locate} alt="" />
                <h1 className='font-semibold py-3'>Overall Control</h1>
                <p className='text-sm'>We offer our customer property protection of liability coverage and insurance for their better life.</p>
              </div>


            </div>
          </div>
        </section>

        <section className=' md:w-[75%] px-2 pb-10 items-center  mx-auto'>
          <div className='py-10'>
            <h1 className='text-3xl text-center font-semibold'>Based on your location</h1>
            <p className='text-center text-slate-500'>Some of our picked properties near you location.</p>
          </div>

          <div className='flex-col gap-y-5 flex md:flex-row items-center justify-between'>
            <div className='order-2 md:order-1'>
              <ul className='*:px-5 *:py-1 *:text-slate-500 bg-purple-100 border-purple-200 rounded-md border-[1px] py-2 px-2 flex justify-center  mx-auto w-fit md:w-auto justify-aroun'>
                <li className='hover:bg-white rounded-md text-xl hover:text-purple-600'>Rent</li>
                <li className='hover:bg-white rounded-md text-xl hover:text-purple-600'>Buy</li>
                <li className='hover:bg-white rounded-md text-xl hover:text-purple-600'>Sell</li>
              </ul>

            </div>
            
            <div className='order-1 md:order-2 flex items-center bg-purple-100 border-purple-200 rounded-md border-[1px] p-4 gap-2'>
              <img className='w-5' src={Srch} alt="" />
              <div className='bg-purple-100'>
                <input className='focus:outline-none bg-purple-100 active:border-purple-200' type="text" placeholder='Search...'/>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-10'>
            <div className='rounded-md border-[1px] border-slate-200'>
              <div>
                <img className='rounded-t-md w-full' src={List} alt="" />
              </div>
              <div className='px-4 py-5'>
                <div className='flex justify-between'>
                  <h2 className='text-purple-700 text-xl font-bold'>$2,400<span className='text-slate-500 text-base font-normal'> /month</span></h2>
                  <div ><img className='w-10'  src={Fav} alt="" /></div>
                </div>
                <h1 className='py-2 text-xl font-semibold'>St. Crystal</h1>
                <p className='text-slate-500 whitespace-nowrap'>210 US Highway, Highland Lake, FL</p>

                <div className='flex justify-between  text-base md:text-sm border-t-[1px] border-slate-200 my-3 pt-4 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <img className='w-8 md:w-auto' src={Bed} alt="" />
                    <p>3 Beds</p>
                  </div>
                  <div className='flex items-center'>
                  <img className='w-8 md:w-auto' src={Bath} alt="" />
                  <p>2 Bathrooms</p>
                  </div>
                  <div className='flex items-center'>
                  <img className='w-8 md:w-auto' src={Meter} alt="" />
                  <p>5x7m</p>
                  </div>

                </div>
              </div>
            </div>
            <div className='rounded-md border-[1px] border-slate-200'>
              <div>
                <img className='rounded-t-md w-full' src={List} alt="" />
              </div>
              <div className='px-4 py-5'>
                <div className='flex justify-between'>
                  <h2 className='text-purple-700 text-xl font-bold'>$2,400<span className='text-slate-500 text-base font-normal'> /month</span></h2>
                  <div ><img className='w-10'  src={Fav} alt="" /></div>
                </div>
                <h1 className='py-2 text-xl font-semibold'>St. Crystal</h1>
                <p className='text-slate-500 whitespace-nowrap'>210 US Highway, Highland Lake, FL</p>

                <div className='flex justify-between  text-base md:text-sm border-t-[1px] border-slate-200 my-3 pt-4 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <img className='w-8 md:w-auto' src={Bed} alt="" />
                    <p>3 Beds</p>
                  </div>
                  <div className='flex items-center'>
                  <img className='w-8 md:w-auto' src={Bath} alt="" />
                  <p>2 Bathrooms</p>
                  </div>
                  <div className='flex items-center'>
                  <img className='w-8 md:w-auto' src={Meter} alt="" />
                  <p>5x7m</p>
                  </div>

                </div>
              </div>
            </div>
            <div className='rounded-md border-[1px] border-slate-200'>
              <div>
                <img className='rounded-t-md w-full' src={List} alt="" />
              </div>
              <div className='px-4 py-5'>
                <div className='flex justify-between'>
                  <h2 className='text-purple-700 text-xl font-bold'>$2,400<span className='text-slate-500 text-base font-normal'> /month</span></h2>
                  <div ><img className='w-10'  src={Fav} alt="" /></div>
                </div>
                <h1 className='py-2 text-xl font-semibold'>St. Crystal</h1>
                <p className='text-slate-500 whitespace-nowrap'>210 US Highway, Highland Lake, FL</p>

                <div className='flex justify-between  text-base md:text-sm border-t-[1px] border-slate-200 my-3 pt-4 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <img className='w-8 md:w-auto' src={Bed} alt="" />
                    <p>3 Beds</p>
                  </div>
                  <div className='flex items-center'>
                  <img className='w-8 md:w-auto' src={Bath} alt="" />
                  <p>2 Bathrooms</p>
                  </div>
                  <div className='flex items-center'>
                  <img className='w-8 md:w-auto' src={Meter} alt="" />
                  <p>5x7m</p>
                  </div>

                </div>
              </div>
            </div>
            <div className='rounded-md border-[1px] border-slate-200'>
              <div>
                <img className='rounded-t-md w-full' src={List} alt="" />
              </div>
              <div className='px-4 py-5'>
                <div className='flex justify-between'>
                  <h2 className='text-purple-700 text-xl font-bold'>$2,400<span className='text-slate-500 text-base font-normal'> /month</span></h2>
                  <div ><img className='w-10'  src={Fav} alt="" /></div>
                </div>
                <h1 className='py-2 text-xl font-semibold'>St. Crystal</h1>
                <p className='text-slate-500 whitespace-nowrap'>210 US Highway, Highland Lake, FL</p>

                <div className='flex justify-between  text-base md:text-sm border-t-[1px] border-slate-200 my-3 pt-4 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <img className='w-8 md:w-auto' src={Bed} alt="" />
                    <p>3 Beds</p>
                  </div>
                  <div className='flex items-center'>
                  <img className='w-8 md:w-auto' src={Bath} alt="" />
                  <p>2 Bathrooms</p>
                  </div>
                  <div className='flex items-center'>
                  <img className='w-8 md:w-auto' src={Meter} alt="" />
                  <p>5x7m</p>
                  </div>

                </div>
              </div>
            </div>
            <div className='rounded-md border-[1px] border-slate-200'>
              <div>
                <img className='rounded-t-md w-full' src={List} alt="" />
              </div>
              <div className='px-4 py-5'>
                <div className='flex justify-between'>
                  <h2 className='text-purple-700 text-xl font-bold'>$2,400<span className='text-slate-500 text-base font-normal'> /month</span></h2>
                  <div ><img className='w-10'  src={Fav} alt="" /></div>
                </div>
                <h1 className='py-2 text-xl font-semibold'>St. Crystal</h1>
                <p className='text-slate-500 whitespace-nowrap'>210 US Highway, Highland Lake, FL</p>

                <div className='flex justify-between  text-base md:text-sm border-t-[1px] border-slate-200 my-3 pt-4 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <img className='w-8 md:w-auto' src={Bed} alt="" />
                    <p>3 Beds</p>
                  </div>
                  <div className='flex items-center'>
                  <img className='w-8 md:w-auto' src={Bath} alt="" />
                  <p>2 Bathrooms</p>
                  </div>
                  <div className='flex items-center'>
                  <img className='w-8 md:w-auto' src={Meter} alt="" />
                  <p>5x7m</p>
                  </div>

                </div>
              </div>
            </div>
            <div className='rounded-md border-[1px] border-slate-200'>
              <div>
                <img className='rounded-t-md w-full' src={List} alt="" />
              </div>
              <div className='px-4 py-5'>
                <div className='flex justify-between'>
                  <h2 className='text-purple-700 text-xl font-bold'>$2,400<span className='text-slate-500 text-base font-normal'> /month</span></h2>
                  <div ><img className='w-10'  src={Fav} alt="" /></div>
                </div>
                <h1 className='py-2 text-xl font-semibold'>St. Crystal</h1>
                <p className='text-slate-500 whitespace-nowrap'>210 US Highway, Highland Lake, FL</p>

                <div className='flex justify-between  text-base md:text-sm border-t-[1px] border-slate-200 my-3 pt-4 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <img className='w-8 md:w-auto' src={Bed} alt="" />
                    <p>3 Beds</p>
                  </div>
                  <div className='flex items-center'>
                  <img className='w-8 md:w-auto' src={Bath} alt="" />
                  <p>2 Bathrooms</p>
                  </div>
                  <div className='flex items-center'>
                  <img className='w-8 md:w-auto' src={Meter} alt="" />
                  <p>5x7m</p>
                  </div>

                </div>
              </div>
            </div>

            
          </div>

          <div>
            <button className='bg-purple-950 px-5 py-3 rounded-md text-white flex justify-center mx-auto'>Browse more properties</button>

          </div>
        </section>

        <section>
          <div className='bg-purple-950 py-16'>
            <div className='flex flex-col md:flex-row text-center md:text-start md:w-[75%] px-2 items-center justify-between  mx-auto text-white'>
              <h1 className='text-3xl md:w-2/4 font-semibold'>We make it easy for <span className='text-purple-500'>tenants</span>  and <span className='text-purple-500'>landlords.</span></h1>
              <p className='text-sm md:w-2/5'>Whether it’s selling your current home, getting financing, or buying a new home, we make it easy  and efficient. The best part? you’ll save a bunch of money and time with our services.</p>
            </div>
          

            <div className='flex md:justify-center border-b-[1px] border-slate-700 overflow-x-auto md:overflow-x-visible  snap-x snap-mandatory space-x-5 px-2 py-10'>
              <div className='flex  md:flex gap-3 bg-purple-400 p-3 snap-center rounded-md w-80'>
                <div className='w-40'>
                  <img className='w-40' src={Play} alt="" />
                </div>
                <div>
                  <h2 className='text-white font-semibold'>Virtual home tour</h2>
                  <p className='text-sm text-slate-800'>You can communicate directly with landlords and we provide you with virtual tour before you buy or rent the property.</p>
                </div>
              </div>
              <div className='flex md:flex gap-3 bg-white p-3 snap-center rounded-md w-80'>
                <div className='w-40'>
                  <img className='w-40' src={Check} alt="" />
                </div>
                <div>
                  <h2>Virtual home tour</h2>
                  <p className='text-sm text-slate-600'>Browse thousands of properties, save your favorites and set up search alerts so you don’t miss the best home deal!</p>
                </div>
              </div>
              <div className='flex md:flex gap-3 bg-slate-600/65 p-3 snap-center rounded-md w-80'>
                <div className='w-40'>
                  <img className='w-40' src={Notes} alt="" />
                </div>
                <div>
                  <h2 className='text-white'>Virtual home tour</h2>
                  <p className='text-sm text-slate-300'>Find your dream house? You just need to do a little to no effort and you can start move in to your new dream home!</p>
                </div>
              </div>
            </div>

            <div className='flex-col flex md:flex-row pt-10 gap-y-10 justify-center text-white'>
              <div className='flex-col text-center px-16'>
                <h2 className='text-3xl'>7.4%</h2>
                <p className='text-slate-300'>Property Return Rate</p>
              </div>
              <div className='flex-col text-center border-x-[1px] border-slate-300 px-16'>
                <h2 className='text-3xl'>3,856</h2>
                <p className='text-slate-300'>Property in Sell & Rent</p>
              </div>
              <div className='flex-col text-center px-16'>
                <h2 className='text-3xl'>2,540</h2>
                <p className='text-slate-300'>Daily Completed Transactions</p>
              </div>
            </div>


          </div>
        </section>

        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home