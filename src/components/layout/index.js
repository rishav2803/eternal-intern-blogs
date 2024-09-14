import { SunIcon } from '@heroicons/react/20/solid';
import localFont from 'next/font/local';
import Link from 'next/link'

const geistMono = localFont({
  src: "../../pages/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const Layout = ({ children }) => {
  return (
    <div
      className={`container ${geistMono.variable} font-[family-name:var(--font-geist-mono)]`}
    >
      <header className='border-solid border-2px border-stone-100 bg-stone-100 p-4 rounded-lg mt-4 '
      >
        <nav>
          <ul className='flex gap-4 flex items-center justify-between'>
            <li>
              <Link
                href='/'
                className='text-sm font-medium uppercase text-stone-400'
              >
                <img src={"/logo.png"} height="50px" width="50px" />
              </Link>
            </li>
            <div className='flex items-center gap-[2rem]'>
              <li>
                <Link
                  href='/'
                  className='text-sm font-medium uppercase text-stone-400'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/'
                  className='text-sm font-medium uppercase text-stone-400'
                >
                  About me
                </Link>
              </li>

            </div>
          </ul>
        </nav>
      </header>

      <main className=' px-8  rounded-lg'
      >{children}</main>
    </div>
  )
}

export default Layout

