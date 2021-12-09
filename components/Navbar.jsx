/*  ./components/Navbar.jsx     */
import Link from 'next/link';

export const Navbar = () => {
  return (
        <>
      <nav className='flex items-center flex-wrap bg-green-300 p-3 '>
        <Link href='/'>
          <a className='object-left inline-flex items-center p-2 mr-4 '>
            <span className='text-xl text-white font-bold uppercase tracking-wide'>
              Slaskhas
            </span>
          </a>
        </Link>
        <Link  href='/about'>
          <a className='ml-auto inline-flex items-center p-2 mr-4'>
            <span className='text-xl text-white tracking-wide'>
              About
            </span>
          </a>
        </Link>
      </nav>
    </>
  )
}
