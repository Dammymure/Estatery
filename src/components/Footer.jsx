import React from 'react'
import Face from '../images/icons/facebook-f 1.png'
import Twi from '../images/icons/twitter 1.png'
import Insta from '../images/icons/instagram 1.png'
import Link from '../images/icons/linkedin 1.png'

function Footer() {
  return (
    <section>
        <div className='border-b-[1px]'>
        <div className='flex md:flex-row flex-col gap-y-5 mx-auto content-center px-3 py-10 md:px-auto md:w-[75%] justify-between'>
            <div>
                <div className='flex items-center'>
                    <img  src={require('../images/icons/Frame.png')} alt="" />
                    <h2 className='font-semibold'>Estatery</h2>
                </div>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-2 gap-x-32 gap-y-10'>
                <div>
                    <h3 className='pb-2 text-sm font-semibold'>SELL A HOME</h3>
                    <p className='text-xs text-slate-600 py-2'>Request an offer</p>
                    <p className='text-xs text-slate-600 py-2'>Pricing</p>
                    <p className='text-xs text-slate-600 py-2'>Review</p>
                    <p className='text-xs text-slate-600 py-2'>Stories</p>
                </div>
                <div>
                    <h3 className='pb-2 text-sm font-semibold'>SELL A HOME</h3>
                    <p className='text-xs text-slate-600 py-2'>Request an offer</p>
                    <p className='text-xs text-slate-600 py-2'>Pricing</p>
                    <p className='text-xs text-slate-600 py-2'>Review</p>
                    <p className='text-xs text-slate-600 py-2'>Stories</p>
                </div>
                <div>
                    <h3 className='pb-2 text-sm font-semibold'>SELL A HOME</h3>
                    <p className='text-xs text-slate-600 py-2'>Request an offer</p>
                    <p className='text-xs text-slate-600 py-2'>Pricing</p>
                    <p className='text-xs text-slate-600 py-2'>Review</p>
                    <p className='text-xs text-slate-600 py-2'>Stories</p>
                </div>
                <div>
                    <h3 className='pb-2 text-sm font-semibold'>SELL A HOME</h3>
                    <p className='text-xs text-slate-600 py-2'>Request an offer</p>
                    <p className='text-xs text-slate-600 py-2'>Pricing</p>
                    <p className='text-xs text-slate-600 py-2'>Review</p>
                    <p className='text-xs text-slate-600 py-2'>Stories</p>
                </div>
                <div>
                    <h3 className='pb-2 text-sm font-semibold'>SELL A HOME</h3>
                    <p className='text-xs text-slate-600 py-2'>Request an offer</p>
                    <p className='text-xs text-slate-600 py-2'>Pricing</p>
                    <p className='text-xs text-slate-600 py-2'>Review</p>
                    <p className='text-xs text-slate-600 py-2'>Stories</p>
                </div>
                <div>
                    <h3 className='pb-2 text-sm font-semibold'>SELL A HOME</h3>
                    <p className='text-xs text-slate-600 py-2'>Request an offer</p>
                    <p className='text-xs text-slate-600 py-2'>Pricing</p>
                    <p className='text-xs text-slate-600 py-2'>Review</p>
                    <p className='text-xs text-slate-600 py-2'>Stories</p>
                </div>

            </div>
        </div>

        </div>

        <div className='flex flex-col items-center gap-y-5 md:flex-row md:justify-between px-3 py-5 md:px-auto w-screen md:w-[75%] mx-auto content-center '>
            <p className='text-slate-500'>©2021 Estatery. All rights reserved</p>
            <div className='flex gap-x-5 '>
                <img src={Face} alt="" />
                <img src={Twi} alt="" />
                <img src={Insta} alt="" />
                <img src={Link} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Footer