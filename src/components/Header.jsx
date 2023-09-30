import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
           <h1 className='front-bold text-sm sm:test-xl flex flex-wrap'>
               <span className='text-slate-600'>Dreamhome</span>
               <span className='text-slate-400'>Estate</span>
           </h1>
        </Link>
       <form className='bg-slate-100 h-10 p-3 rounded-lg flex items-center'>
          <input type='text' placeholder='search for your home'  
                 className='bg-transparent focus:outline-none w-24 sm:w-64 md:w-64'/>
          <FaSearch className='text-slate-600' /> 
       </form>
       <ul className='flex gap-6'>
        <Link to='/'>
           <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
        </Link>
        <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
        </Link>
         <Link to='/sign-in'>
            <li className='text-slate-700 hover:underline'>Sign in</li>
         </Link>
       </ul>
      </div>
    </header>
  )
}
