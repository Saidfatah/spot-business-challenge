import localFont from 'next/font/local'
import GoButton from "./GoButton"
import { Logo } from "./Logo"

const helveticaNeue = localFont({ src: './fonts/helvetica-neue.ttf' })

export default function Home() {
  return (
    <main className={helveticaNeue.className} >
      <div className="w-screen px-[4rem] xs:px-[1.5rem] py-[1.5rem] xs:py-[2rem]">
        <footer className="bg-white  text-black">
          <div className="grid grid-rows-3 grid-cols-[30.5rem_auto_auto] xs:block ">
            <div className="border-r-[1px] border-t-[1px] border-black py-[2.5rem] pr-[5.5rem] row-span-3 col-span-1 xs:py-0 xs:mb-[3rem] xs:border-r-0 xs:pr-[0rem] xs:border-t-0 ">
              <Logo />
              <p className=" mb-[2.5rem] text-left text-[0.875rem] xs:mb-[2rem] xs:pr-[4rem]">
                In the blog you will find fascinating articles about the life of our this is worxpace, also about future
              </p>

              <div className="flex justify-start items-center mb-[2.375rem] ">
                <input className="border-black border-[1px] rounded-full text-[1rem] py-4 px-6 mr-[1rem] flex-grow" placeholder="Your Email" />
                <GoButton />
              </div>

              <p className="text-[0.875rem] xs:hidden">© 2022 Spotbusiness All rights reserved.</p>
            </div>

            <div className="col-span-2 row-span-2 border-t-[1px] border-black pl-[11.5rem]  xs:pl-[0rem]">
              <div className="flex xs:block" >
                <div className="flex-1 flex flex-col pt-[2.5rem] relative xs:justify-between xs:content-start xs:flex-row xs:flex-wrap xs:mb-[3rem]">
                  <a className="pb-[1.5rem] font-bold text-[1.375rem] leading-[125%  xs:basis-1/2 order-first" href="#">Solutions</a>
                  <a className="pb-[1.5rem] font-bold text-[1.375rem] leading-[125%] xs:basis-1/2 order-3" href="#">Locations</a>
                  <a className="pb-[1.5rem] font-bold text-[1.375rem] leading-[125%] xs:basis-1/2 xs:pl-[1rem] order-2 " href="#">Contact us</a>
                  <a className="pb-[1.5rem] font-bold text-[1.375rem] leading-[125%] xs:basis-1/2 xs:pl-[1rem] order-last" href="#">Enterprise </a>
                  <div className="hidden w-[1px] h-[8px] bg-black absolute top-0 left-0 xs:block xs:left-1/2 xs:-translate-x-1/2"></div>
                </div>
                <div className="flex-1 flex flex-col pt-[2.5rem] pl-[1rem] relative xs:border-t-[1px] xs:border-black xs:justify-between xs:content-start xs:flex-row xs:flex-wrap xs:mb-[3rem]">
                  <a className="pb-[1rem] font-medium text-[0.875rem] leading-[160%] whitespace-nowrap xs:basis-1/2 xs:order-first" href="#">Private office</a>
                  <a className="pb-[1rem] font-medium text-[0.875rem] leading-[160%] whitespace-nowrap xs:basis-1/2 xs:order-3" href="#">Co-working space</a>
                  <a className="pb-[1rem] font-medium text-[0.875rem] leading-[160%] whitespace-nowrap xs:basis-1/2 xs:order-last " href="#">Virtual office</a>
                  <a className="pb-[1rem] font-medium text-[0.875rem] leading-[160%] whitespace-nowrap xs:basis-1/2 xs:order-2" href="#">Meeting room</a>
                  <a className="pb-[1rem] font-medium text-[0.875rem] leading-[160%] whitespace-nowrap xs:basis-1/2 xs:order-4" href="#">Partners</a>
                  <div className="w-[1px] h-[8px] bg-black absolute top-0 left-0 xs:left-1/2 xs:-translate-x-1/2"></div>
                </div>
              </div>
            </div>

            <div className="col-span-2  flex  border-t-[1px] border-black  pl-[11.5rem] xs:pl-0 ">
              <div className="flex flex-1 flex-col pt-[2.5rem] xs:hidden">
                <a className="pb-[0.5rem] font-medium text-[0.875rem] leading-[160%]" href="#">Privacy Policy</a>
                <a className="pb-[0.5rem] font-medium text-[0.875rem] leading-[160%]" href="#">Terms & Conditions</a>
              </div>
              <div className="relative flex pl-[1rem] pt-[2.5rem] xs:pt-[2rem] xs:w-full xs:pl-0 xs:justify-between xs:items-center">
                <a className="w-[48px] h-[48px] flex items-center justify-center rounded-full border-black border-[1px]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.12 5.32003H17V2.14003C16.0898 2.04538 15.1752 1.99865 14.26 2.00003C11.54 2.00003 9.68 3.66003 9.68 6.70003V9.32003H6.61V12.88H9.68V22H13.36V12.88H16.42L16.88 9.32003H13.36V7.05003C13.36 6.00003 13.64 5.32003 15.12 5.32003Z" fill="#151718" />
                  </svg>
                </a>
                <a className="w-[48px] h-[48px] flex items-center justify-center rounded-full border-black border-[1px] ml-[1rem] xs:ml-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.80673 6.07062C7.80673 7.07237 7.05268 7.87393 5.84194 7.87393H5.81975C4.65402 7.87393 3.90039 7.07237 3.90039 6.07062C3.90039 5.04768 4.67697 4.26855 5.86483 4.26855C7.05268 4.26855 7.78419 5.04768 7.80673 6.07062ZM7.57974 9.2981V19.731H4.10742V9.2981H7.57974ZM20.1004 19.7313L20.1005 13.7494C20.1005 10.5449 18.3875 9.05347 16.1026 9.05347C14.259 9.05347 13.4336 10.0661 12.9727 10.7765V9.29873H9.5C9.54577 10.2777 9.5 19.7316 9.5 19.7316H12.9727V13.905C12.9727 13.5932 12.9953 13.2822 13.0871 13.0589C13.338 12.436 13.9094 11.7911 14.8687 11.7911C16.1257 11.7911 16.6282 12.7478 16.6282 14.1497V19.7313H20.1004Z" fill="#151718" />
                  </svg>

                </a>
                <a className="w-[48px] h-[48px] flex items-center justify-center rounded-full border-black border-[1px] ml-[1rem] xs:ml-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.34 5.46C17.1027 5.46 16.8707 5.53038 16.6733 5.66224C16.476 5.79409 16.3222 5.98151 16.2313 6.20078C16.1405 6.42005 16.1168 6.66133 16.1631 6.89411C16.2094 7.12689 16.3236 7.34071 16.4915 7.50853C16.6593 7.67635 16.8731 7.79064 17.1059 7.83694C17.3387 7.88324 17.5799 7.85948 17.7992 7.76866C18.0185 7.67783 18.2059 7.52402 18.3378 7.32668C18.4696 7.12935 18.54 6.89734 18.54 6.66C18.54 6.34174 18.4136 6.03652 18.1885 5.81147C17.9635 5.58643 17.6583 5.46 17.34 5.46ZM21.94 7.88C21.9206 7.0503 21.7652 6.2294 21.48 5.45C21.2257 4.78313 20.83 4.17928 20.32 3.68C19.8248 3.16743 19.2196 2.77418 18.55 2.53C17.7727 2.23616 16.9508 2.07721 16.12 2.06C15.06 2 14.72 2 12 2C9.28 2 8.94 2 7.88 2.06C7.04915 2.07721 6.22734 2.23616 5.45 2.53C4.78168 2.77665 4.17693 3.16956 3.68 3.68C3.16743 4.17518 2.77418 4.78044 2.53 5.45C2.23616 6.22734 2.07721 7.04915 2.06 7.88C2 8.94 2 9.28 2 12C2 14.72 2 15.06 2.06 16.12C2.07721 16.9508 2.23616 17.7727 2.53 18.55C2.77418 19.2196 3.16743 19.8248 3.68 20.32C4.17693 20.8304 4.78168 21.2234 5.45 21.47C6.22734 21.7638 7.04915 21.9228 7.88 21.94C8.94 22 9.28 22 12 22C14.72 22 15.06 22 16.12 21.94C16.9508 21.9228 17.7727 21.7638 18.55 21.47C19.2196 21.2258 19.8248 20.8326 20.32 20.32C20.8322 19.8226 21.2283 19.2182 21.48 18.55C21.7652 17.7706 21.9206 16.9497 21.94 16.12C21.94 15.06 22 14.72 22 12C22 9.28 22 8.94 21.94 7.88ZM20.14 16C20.1327 16.6348 20.0178 17.2637 19.8 17.86C19.6403 18.2952 19.3839 18.6884 19.05 19.01C18.7256 19.3405 18.3332 19.5964 17.9 19.76C17.3037 19.9778 16.6748 20.0927 16.04 20.1C15.04 20.15 14.67 20.16 12.04 20.16C9.41 20.16 9.04 20.16 8.04 20.1C7.38089 20.1123 6.72459 20.0109 6.1 19.8C5.68578 19.6281 5.31136 19.3728 5 19.05C4.66809 18.7287 4.41484 18.3352 4.26 17.9C4.01586 17.2952 3.88044 16.6519 3.86 16C3.86 15 3.8 14.63 3.8 12C3.8 9.37 3.8 9 3.86 8C3.86448 7.35106 3.98295 6.70795 4.21 6.1C4.38605 5.67791 4.65627 5.30166 5 5C5.30381 4.65617 5.67929 4.3831 6.1 4.2C6.70955 3.98004 7.352 3.86508 8 3.86C9 3.86 9.37 3.8 12 3.8C14.63 3.8 15 3.8 16 3.86C16.6348 3.86728 17.2637 3.98225 17.86 4.2C18.3144 4.36865 18.7223 4.64285 19.05 5C19.3777 5.30718 19.6338 5.68273 19.8 6.1C20.0223 6.70893 20.1373 7.35178 20.14 8C20.19 9 20.2 9.37 20.2 12C20.2 14.63 20.19 15 20.14 16ZM12 6.87C10.9858 6.87198 9.99496 7.17453 9.15265 7.73942C8.31035 8.30431 7.65438 9.1062 7.26763 10.0438C6.88089 10.9813 6.78072 12.0125 6.97979 13.0069C7.17886 14.0014 7.66824 14.9145 8.38608 15.631C9.10392 16.3474 10.018 16.835 11.0129 17.0321C12.0077 17.2293 13.0387 17.1271 13.9755 16.7385C14.9123 16.35 15.7129 15.6924 16.2761 14.849C16.8394 14.0056 17.14 13.0142 17.14 12C17.1413 11.3251 17.0092 10.6566 16.7512 10.033C16.4933 9.40931 16.1146 8.84281 15.6369 8.36605C15.1592 7.88929 14.5919 7.51168 13.9678 7.25493C13.3436 6.99818 12.6749 6.86736 12 6.87ZM12 15.33C11.3414 15.33 10.6976 15.1347 10.15 14.7688C9.60234 14.4029 9.17552 13.8828 8.92348 13.2743C8.67144 12.6659 8.6055 11.9963 8.73398 11.3503C8.86247 10.7044 9.17963 10.111 9.64533 9.64533C10.111 9.17963 10.7044 8.86247 11.3503 8.73398C11.9963 8.6055 12.6659 8.67144 13.2743 8.92348C13.8828 9.17552 14.4029 9.60234 14.7688 10.15C15.1347 10.6976 15.33 11.3414 15.33 12C15.33 12.4373 15.2439 12.8703 15.0765 13.2743C14.9092 13.6784 14.6639 14.0454 14.3547 14.3547C14.0454 14.6639 13.6784 14.9092 13.2743 15.0765C12.8703 15.2439 12.4373 15.33 12 15.33Z" fill="#151718" />
                  </svg>
                </a>
                <a className="w-[48px] h-[48px] flex items-center justify-center rounded-full border-black border-[1px] ml-[1rem] xs:ml-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.0364 6.46408C22.7771 5.50017 22.0171 4.74033 21.0533 4.48077C19.2926 3.99902 12.2497 3.99902 12.2497 3.99902C12.2497 3.99902 5.20708 3.99902 3.44638 4.46251C2.50114 4.72179 1.72263 5.50031 1.46335 6.46408C1 8.22464 1 11.8758 1 11.8758C1 11.8758 1 15.5454 1.46335 17.2875C1.7229 18.2513 2.4826 19.0112 3.44652 19.2707C5.22562 19.7526 12.25 19.7526 12.25 19.7526C12.25 19.7526 19.2926 19.7526 21.0533 19.2891C22.0173 19.0297 22.7771 18.2698 23.0367 17.3061C23.4999 15.5454 23.4999 11.8943 23.4999 11.8943C23.4999 11.8943 23.5184 8.22464 23.0364 6.46408ZM10.0074 15.2489V8.50273L15.864 11.8758L10.0074 15.2489Z" fill="#151718" />
                  </svg>
                </a>

                <div className="w-[1px] h-[8px] bg-black absolute top-0 left-0 xs:hidden"></div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
