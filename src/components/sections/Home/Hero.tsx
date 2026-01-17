import React from 'react'
import Button from '../../ui/Button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='min-h-screen max-w-7xl mx-auto bg-zinc-100'>
        <div className='grid grid-cols-2 justify-between h-screen '>
            <div className='w-full flex flex-col items-start justify-center space-y-4'>
                <h1 className='text-6xl font-bold'>Gentle Care for <br /> Your Baby’s <br /> Delicate Skin</h1>
                <p className='text-xl'>Ultra-soft, leak-proof diapers made with love and care.</p>
                <Button>
                    Find your Baby's size
                </Button>
            </div>

            <div className='relative w-full h-full  bg-amber-100'>
                <Image 
                    src="/zuvara-assets/hero_image2.png"
                    alt='hero image'
                    fill
                    className='object-cover -scale-x-100'
                />
            </div>
        </div>
    </div>
  )
}

export default Hero