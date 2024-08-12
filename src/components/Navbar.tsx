import logo from '../../public/asoslogo.png'
import search from '../../public/search-svgrepo-com.svg'
import Image from 'next/image'
import Link from 'next/link'
export default function Navbar() {
    return (
        <div className="bg-[#2d2d2d] flex text-white items-center gap-1 h-full">
            <div className='flex flex-row items-center gap-1 ml-[5rem] font-bold h-full'>
                <Link href={'/'}>
                    <h3 className='py-2 px-5 text-sm h-full'>
                        <Image className='grayscale-0 fill-white h-full' src={logo} alt='asoslogo' width={100} height={100} />
                    </h3>
                </Link>
                <Link href={'/men'} className='border-l-[1px] border-[#767676] '>
                    <h3 className='py-6 px-10 text-sm h-full text-[1.1rem]'>
                        WOMEN
                    </h3>
                </Link>
                <Link href={'/men'} className='border-l-[1px] border-[#767676] '>
                    <h3 className='py-6 px-8 text-[1.1rem]'>
                        MEN
                    </h3>
                </Link>
            </div>
            <div className='flex relative items-center'>
                <input

                    className='relative m-0 block w-[50rem] rounded-3xl px-3 py-2 ml-1'
                    placeholder='Search for items and brands'
                />
                <button className='absolute right-3 text-black'><Image src={search} width={18} height={18} alt='searchbutton' /></button>
            </div>
        </div>
    )
}