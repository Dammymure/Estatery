import React from 'react'

function Contact() {
  return (
    <section>
      <div className='flex-col content-center text-center py-20 px-5 bg-purple-50'>
        <h3 className='text-purple-500 font-semibold tex-2xl'>No Spam Promise</h3>
        <h1 className='text-4xl font-semibold '>Are you a Landlord?</h1>
        <p className='text-slate-600 py-5'>Discover ways to increase your home's value and  get listed. No Spam.</p>

        <div className='flex  justify-center gap-20  py-5'>
          <div className='flex  justify-center gap-20  py-2 rounded-md px-3 bg-white'>
            <input className='focus:outline-none w-auto' type="text" placeholder='Enter your email address' />
            <button className='bg-purple-500 px-8 py-2 rounded-md text-white'>Submit</button>

          </div>
        </div>

        <p>Join <span className='text-purple-500 text-sm'>10,000+</span> other landlords in our estatery community.</p>

      </div>
    </section>
  )
}

export default Contact