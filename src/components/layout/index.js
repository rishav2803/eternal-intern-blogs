import localFont from 'next/font/local';
import Link from 'next/link';

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
      <header
        className='border-solid border-2px border-stone-100 bg-stone-100 p-4 lg:rounded-lg lg:mt-4 sm:mt-0 sm:rounded-none'
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
                  href='/about-me'
                  className='text-sm font-medium uppercase text-stone-400'
                >
                  About me
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </header>

      <main className='px-8 rounded-lg sm:rounded-none'>
        {children}
      </main>

      {/* <footer className=' text-sm font-medium uppercase text-stone-400 px-8 py-2'> */}
      {/*   <ul class="flex justify-center mt-5 space-x-5"> */}
      {/*     <li> */}
      {/*       <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"> */}
      {/*         <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> */}
      {/*           <path fill-rule="evenodd" */}
      {/*             d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" */}
      {/*             clip-rule="evenodd"></path> */}
      {/*         </svg> */}
      {/*       </a> */}
      {/*     </li> */}
      {/*   </ul> */}
      {/* </footer> */}
    </div>
  );
};

export default Layout;

