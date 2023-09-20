import AcordeonTailwind from './AcordeonTailwind'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
<div className='flex flex-col sm:grid sm:grid-cols-2 sm:pl-10 bg-gradient-to-t from-[#0F2027] from-5% via-[#2C5364] via-70% to-[#0F2027] to-95%'>
  <div className='flex w-full place-items-start  sm:text-center sm:items-center lg:pl-20'>
    <div className='flex flex-col sm:items-center sm:text-center'>
      <p className='text-white'>
        <span className='sm:text-center'>© Copyright 2023</span>
      </p>
      <p className='text-white'>
        <span className='sm:text-center'>Xavier Stefano Zevallos Reyes</span>
      </p>
    </div>
  </div>
  <div className='flex flex-col items-center justify-center mt-4 mb-20 bg-red-200'>
  </div>
</div>
    )
}

export default Footer