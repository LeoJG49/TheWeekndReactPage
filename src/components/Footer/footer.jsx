import React from 'react'
import FooterContent from './footerContent'

export default function Footer() {
  return (
    <footer 
      className='relative h-[800px]'
      style={{clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)'}}
    >
      <div className='fixed h-[800px] w-full bottom-0'>
        <FooterContent />
      </div>
    </footer>
  )
}
