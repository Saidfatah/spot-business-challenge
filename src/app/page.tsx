import localFont from 'next/font/local'
import GoButton from "./GoButton"

const helveticaNeue = localFont({ src: './fonts/helvetica-neue.ttf' })

export default function Home() {
  return (
    <main className={helveticaNeue.className} >
      <div className="w-screen px-[4rem] xs:px-[1.5rem] py-[1.5rem] xs:py-[2rem]">
        <footer className="bg-white  text-black">
          <div className="grid grid-rows-3 grid-cols-[30.5rem_auto_auto] xs:block ">
            <div className="border-r-[1px] border-t-[1px] border-black py-[2.5rem] pr-[5.5rem] row-span-3 col-span-1 xs:py-0 xs:mb-[3rem] xs:border-r-0 xs:pr-[0rem] xs:border-t-0 ">
              <svg className="mb-[4.125rem] w-[178px] h-[52px] xs:mb-[2rem] xs:w-[109px] xs:h-[32px]" viewBox="0 0 178 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.34465 10.2819C8.75991 10.0221 7.94777 9.72969 6.95697 9.40483L6.27477 9.17744C5.54367 8.9702 4.84018 8.67571 4.17946 8.30033C4.06003 8.22249 3.96478 8.11277 3.9045 7.98359C3.84422 7.85441 3.82131 7.71093 3.83836 7.56941C3.82565 7.4399 3.85313 7.30962 3.91706 7.19628C3.981 7.08294 4.07829 6.99204 4.1957 6.93594C4.66158 6.7152 5.17532 6.61469 5.69004 6.64357C7.78535 6.64357 8.12644 7.65062 8.12644 8.52773V9.12871H11.375V8.52773C11.3911 7.89874 11.2784 7.27311 11.0437 6.68931C10.8091 6.10551 10.4575 5.57588 10.0106 5.133C9.41888 4.62722 8.73139 4.24575 7.98909 4.01135C7.2468 3.77694 6.46491 3.69438 5.69004 3.76861C4.39168 3.69525 3.1043 4.04273 2.01918 4.75941C1.56258 5.08113 1.19196 5.51006 0.939906 6.00851C0.687847 6.50697 0.562053 7.05969 0.573576 7.61813C0.545777 8.38268 0.780817 9.13366 1.23953 9.74593C1.67635 10.2916 2.23186 10.7304 2.8638 11.0291C3.63142 11.3844 4.42402 11.6829 5.23524 11.9225L5.93368 12.1336C6.61587 12.3285 7.15188 12.5234 7.55795 12.6696C7.84172 12.7618 8.09461 12.9304 8.28887 13.1569C8.44582 13.355 8.52651 13.6028 8.51627 13.8553C8.52532 14.0058 8.49394 14.1559 8.4254 14.2902C8.35685 14.4244 8.25363 14.5379 8.12644 14.6187C7.54645 14.8612 6.91841 14.9668 6.29102 14.9274C4.1957 14.9436 3.25363 14.164 3.25363 12.426V11.8088H0.00508072V12.426C-0.0279261 13.1673 0.100191 13.9069 0.380602 14.5939C0.661014 15.2809 1.08705 15.899 1.62935 16.4054C2.93805 17.4493 4.58766 17.9703 6.25853 17.8673C7.71291 17.9901 9.16495 17.6055 10.3679 16.779C10.8078 16.4211 11.1595 15.967 11.396 15.4516C11.6326 14.9362 11.7477 14.3735 11.7323 13.8066C11.7608 13.0065 11.5015 12.2228 11.0014 11.5976C10.5549 11.0403 9.98862 10.5906 9.34465 10.2819Z" fill="#151718" />
                <path d="M24.3674 4.69434C23.3428 4.06501 22.1587 3.74363 20.9565 3.76851C20.076 3.70864 19.194 3.86192 18.3854 4.21535C17.5767 4.56879 16.8652 5.11197 16.311 5.79885V4.01215H13.0625V22.0903H16.311V15.7719C16.5901 16.1348 16.918 16.4573 17.2856 16.7302C18.3541 17.4912 19.6459 17.8742 20.9565 17.8185C22.1383 17.8483 23.3039 17.5382 24.3145 16.9249C25.3252 16.3115 26.1385 15.4209 26.6577 14.3588C27.1929 13.25 27.4652 12.0327 27.4536 10.8016C27.4672 9.56506 27.1948 8.3421 26.6577 7.22821C26.142 6.18888 25.3495 5.31205 24.3674 4.69434ZM24.1888 10.8016C24.2339 11.3559 24.1665 11.9135 23.9907 12.4411C23.8148 12.9686 23.5341 13.4552 23.1655 13.8715C22.7854 14.2136 22.3415 14.4772 21.8593 14.6472C21.3771 14.8172 20.866 14.8903 20.3555 14.8623C19.2829 14.9141 18.2311 14.5538 17.4156 13.8552C17.0228 13.4555 16.7208 12.9759 16.5302 12.4489C16.3396 11.9219 16.2648 11.3601 16.311 10.8016C16.2662 10.2457 16.3416 9.68664 16.5322 9.1625C16.7228 8.63836 17.0241 8.16145 17.4156 7.76422C18.2286 7.05976 19.2807 6.69356 20.3555 6.74093C20.8675 6.7114 21.3802 6.78536 21.863 6.95838C22.3458 7.13141 22.7888 7.39995 23.1655 7.74798C23.5402 8.15816 23.8272 8.64062 24.0088 9.16574C24.1903 9.69085 24.2626 10.2475 24.2213 10.8016H24.1888Z" fill="#151718" />
                <path d="M39.4403 4.6943C38.2974 4.08707 37.023 3.76953 35.7288 3.76953C34.4347 3.76953 33.1602 4.08707 32.0174 4.6943C30.9616 5.2919 30.0905 6.16852 29.4997 7.22816C28.8926 8.31472 28.5792 9.54071 28.5902 10.7853C28.5786 12.0351 28.892 13.2665 29.4997 14.3587C30.0857 15.422 30.9579 16.2998 32.0174 16.8926C33.1486 17.5421 34.4325 17.8785 35.737 17.8671C37.0292 17.8886 38.305 17.5753 39.4403 16.9576C40.5048 16.3586 41.382 15.4757 41.9742 14.4074C42.5638 13.3096 42.8655 12.0802 42.8513 10.834C42.868 9.59081 42.5601 8.36471 41.9579 7.27689C41.3743 6.19931 40.5027 5.30517 39.4403 4.6943ZM37.816 14.3425C37.1836 14.7026 36.4645 14.8824 35.737 14.8622C34.9989 14.8842 34.2689 14.7045 33.6254 14.3425C33.0558 13.9985 32.5987 13.4962 32.3097 12.8969C31.9961 12.2379 31.8403 11.515 31.8549 10.7853C31.8078 9.71261 32.1807 8.66378 32.8945 7.86163C33.258 7.47901 33.7008 7.18046 34.1918 6.98687C34.6827 6.79327 35.2101 6.70932 35.737 6.74088C36.4668 6.71876 37.1879 6.90466 37.816 7.27689C38.3803 7.61523 38.8322 8.11241 39.1154 8.70625C39.4276 9.35415 39.5834 10.0663 39.5702 10.7853C39.5848 11.515 39.4291 12.2379 39.1154 12.8969C38.8278 13.492 38.3772 13.9933 37.816 14.3425Z" fill="#151718" />
                <path d="M48.7319 7.00062H52.5815V4.01195H48.7319V0L45.4834 0.990806V4.01195H42.7871V7.00062H45.4834V15.528C45.4619 15.8522 45.5086 16.1772 45.6205 16.4822C45.7324 16.7871 45.907 17.0652 46.1331 17.2985C46.3364 17.4841 46.5748 17.6272 46.8342 17.7192C47.0936 17.8113 47.3689 17.8505 47.6437 17.8345H47.8386L53.1175 17.5584V14.6185L48.7319 14.8296V7.00062Z" fill="#151718" />
                <path d="M63.4634 51.9769H60.2148V33.98L69.8305 24.3643H87.8275V27.6128H71.1787L63.4634 35.3281V51.9769Z" fill="#8554EE" />
                <path d="M53.8485 27.6126H35.8516V24.3641H52.5004L60.2157 16.6488V0H63.4642V17.9969L53.8485 27.6126Z" fill="#8554EE" />
                <path d="M81.7529 38.8361C80.7272 38.2093 79.5439 37.8881 78.3419 37.9103C77.05 37.8631 75.778 38.2396 74.7198 38.9823C74.3551 39.2579 74.0227 39.574 73.729 39.9244V32.2578H70.4805V51.7491H73.729V49.9299C74.0224 50.2854 74.3547 50.6069 74.7198 50.8882C75.7971 51.6438 77.092 52.026 78.4069 51.9765C79.6092 52.0014 80.7932 51.68 81.8179 51.0506C82.8002 50.4308 83.5882 49.5471 84.0919 48.5005C84.6051 47.3849 84.8709 46.1714 84.8709 44.9434C84.8709 43.7153 84.6051 42.5019 84.0919 41.3862C83.5654 40.3346 82.7552 39.4513 81.7529 38.8361ZM81.558 44.9271C81.6042 45.4852 81.5358 46.0469 81.357 46.5776C81.1782 47.1083 80.8929 47.5968 80.5185 48.0133C80.1423 48.3621 79.6994 48.6311 79.2165 48.8042C78.7336 48.9772 78.2206 49.0508 77.7085 49.0203C76.639 49.0651 75.5929 48.699 74.7848 47.997C74.3934 47.593 74.0924 47.1103 73.902 46.581C73.7116 46.0517 73.636 45.4879 73.6803 44.9271C73.625 44.3784 73.6893 43.8241 73.8687 43.3026C74.0482 42.781 74.3386 42.3046 74.7198 41.906C75.5287 41.2069 76.5757 40.8463 77.6435 40.8989C78.1568 40.8678 78.6712 40.9394 79.1565 41.1095C79.6418 41.2797 80.0882 41.5449 80.4697 41.8897C80.8483 42.2953 81.14 42.7739 81.3271 43.2962C81.5143 43.8185 81.5928 44.3734 81.558 44.9271Z" fill="#151718" />
                <path d="M95.8357 44.2447C95.8588 45.1373 95.687 46.0242 95.3322 46.8435C95.0459 47.5019 94.5784 48.0652 93.984 48.4678C93.3925 48.8453 92.7041 49.0428 92.0024 49.0363C91.6539 49.07 91.3023 49.0311 90.9696 48.922C90.6369 48.813 90.3305 48.6362 90.0695 48.4028C89.6083 47.715 89.4015 46.8878 89.4848 46.0639V38.1699H86.2362V46.2913C86.1317 47.8226 86.6334 49.3335 87.6331 50.4982C88.1391 50.9886 88.7404 51.37 89.3998 51.6186C90.0592 51.8673 90.7625 51.9779 91.4664 51.9438C92.7495 51.9962 94.0079 51.5806 95.0073 50.7743C95.3261 50.5018 95.6098 50.1908 95.8519 49.8484V51.7001H99.1005V38.1699H95.8357V44.2447Z" fill="#151718" />
                <path d="M109.724 44.4396C108.943 44.1071 108.146 43.8143 107.336 43.5625L106.654 43.3351C105.918 43.1266 105.209 42.8322 104.542 42.458C104.428 42.3753 104.336 42.2648 104.277 42.1368C104.217 42.0089 104.191 41.8679 104.201 41.7271C104.192 41.5961 104.223 41.4655 104.29 41.3524C104.356 41.2393 104.456 41.1491 104.575 41.0936C105.035 40.8742 105.543 40.7737 106.053 40.8012C108.164 40.8012 108.424 41.792 108.424 42.6691V43.2864H111.673V42.6691C111.687 42.0429 111.573 41.4203 111.338 40.8395C111.104 40.2586 110.753 39.7316 110.308 39.2906C109.723 38.7889 109.045 38.4085 108.311 38.1714C107.578 37.9344 106.805 37.8456 106.037 37.91C104.718 37.8522 103.417 38.2288 102.333 38.982C101.619 39.5523 101.147 40.3728 101.014 41.2774C100.882 42.1821 101.098 43.1034 101.619 43.8549C102.058 44.3934 102.613 44.8264 103.243 45.1218C104.018 45.4775 104.815 45.7814 105.631 46.0314C105.859 46.1106 106.092 46.1757 106.329 46.2263C107.011 46.4374 107.547 46.6161 107.953 46.7623C108.231 46.8737 108.481 47.0457 108.684 47.2658C108.838 47.4583 108.914 47.7021 108.895 47.948C108.895 48.4678 108.7 48.6465 108.538 48.7439C107.962 48.9997 107.332 49.1111 106.703 49.0688C104.624 49.0688 103.681 48.2891 103.681 46.5349V45.9664H100.433V46.5674C100.4 47.3111 100.528 48.0532 100.808 48.7429C101.088 49.4326 101.514 50.0535 102.057 50.5631C103.39 51.6051 105.065 52.1094 106.751 51.9762C108.208 52.1025 109.663 51.7115 110.861 50.8717C111.274 50.5027 111.598 50.0452 111.809 49.5332C112.02 49.0213 112.112 48.4683 112.079 47.9155C112.116 47.1142 111.856 46.3274 111.348 45.7065C110.914 45.1617 110.358 44.7275 109.724 44.4396Z" fill="#151718" />
                <path d="M132.138 37.9105C130.853 37.8656 129.596 38.2867 128.597 39.0962C128.283 39.3676 128 39.6726 127.752 40.0058V38.1704H124.504V51.733H127.752V45.6583C127.734 44.7661 127.906 43.8801 128.256 43.0594C128.538 42.394 129.014 41.8283 129.62 41.4352C130.204 41.0709 130.881 40.8846 131.569 40.8991C131.915 40.8658 132.265 40.9049 132.595 41.014C132.925 41.123 133.228 41.2997 133.486 41.5326C133.965 42.2079 134.189 43.0306 134.12 43.8553V51.7493H137.368V43.6279C137.468 42.1072 136.966 40.6082 135.971 39.4535C135.476 38.9423 134.879 38.5408 134.218 38.275C133.558 38.0092 132.849 37.885 132.138 37.9105Z" fill="#151718" />
                <path d="M162.432 44.4396C161.847 44.1797 161.035 43.8873 160.044 43.5625L159.346 43.3351C158.616 43.1245 157.912 42.8302 157.25 42.4579C157.136 42.3753 157.044 42.2647 156.985 42.1368C156.925 42.0089 156.899 41.8678 156.909 41.727C156.896 41.5975 156.924 41.4672 156.988 41.3539C157.052 41.2406 157.149 41.1497 157.266 41.0936C157.734 40.8791 158.247 40.7789 158.761 40.8012C160.856 40.8012 161.132 41.792 161.132 42.6691V43.2863H164.381V42.6691C164.394 42.0444 164.281 41.4233 164.05 40.8429C163.818 40.2626 163.472 39.7347 163.033 39.2906C162.447 38.7904 161.768 38.4109 161.035 38.174C160.301 37.9371 159.529 37.8473 158.761 37.91C157.461 37.846 156.175 38.1989 155.09 38.917C154.636 39.2406 154.269 39.6703 154.02 40.1686C153.771 40.667 153.647 41.2188 153.661 41.7758C153.642 42.5215 153.87 43.2525 154.31 43.8548C154.752 44.3918 155.306 44.8245 155.935 45.1218C156.703 45.4806 157.495 45.7845 158.306 46.0313L159.004 46.2263C159.697 46.432 160.239 46.6107 160.629 46.7623C160.902 46.8738 161.146 47.046 161.343 47.2658C161.426 47.3581 161.488 47.4662 161.527 47.5835C161.566 47.7008 161.581 47.8248 161.571 47.948C161.571 48.4678 161.376 48.6464 161.197 48.7439C160.627 49.0015 160.002 49.1131 159.378 49.0687C157.283 49.0687 156.357 48.2891 156.357 46.5349V45.9664H153.108V46.5674C153.076 47.311 153.205 48.0528 153.485 48.7423C153.765 49.4318 154.191 50.0528 154.733 50.5631C156.06 51.6026 157.729 52.1068 159.411 51.9762C160.872 52.0994 162.331 51.7088 163.536 50.8717C163.971 50.5138 164.318 50.0616 164.552 49.5493C164.785 49.0371 164.899 48.4783 164.884 47.9155C164.915 47.1179 164.661 46.3353 164.17 45.7065C163.7 45.1508 163.104 44.7163 162.432 44.4396Z" fill="#151718" />
                <path d="M176.531 45.7075C176.096 45.1639 175.539 44.73 174.906 44.4405C174.126 44.108 173.329 43.8153 172.519 43.5634L171.837 43.336C171.105 43.1288 170.402 42.8343 169.741 42.4589C169.623 42.3798 169.529 42.2698 169.469 42.141C169.409 42.0122 169.385 41.8694 169.4 41.728C169.387 41.5985 169.415 41.4682 169.479 41.3549C169.543 41.2415 169.64 41.1506 169.757 41.0945C170.223 40.8738 170.737 40.7733 171.252 40.8022C173.347 40.8022 173.623 41.793 173.623 42.6701V43.2873H176.872V42.6701C176.885 42.0453 176.772 41.4243 176.541 40.8439C176.309 40.2635 175.963 39.7356 175.524 39.2916C174.938 38.7914 174.259 38.4119 173.525 38.175C172.792 37.938 172.02 37.8483 171.252 37.911C169.952 37.8424 168.664 38.1956 167.581 38.918C166.829 39.4816 166.327 40.3164 166.181 41.2447C166.035 42.1731 166.258 43.1216 166.801 43.8883C167.239 44.4289 167.795 44.8622 168.426 45.1552C169.194 45.514 169.986 45.818 170.797 46.0648L171.495 46.2597C172.194 46.4709 172.73 46.6495 173.12 46.7957C173.4 46.903 173.651 47.0756 173.851 47.2993C174.009 47.4902 174.09 47.7336 174.078 47.9815C174.101 48.1361 174.078 48.2941 174.011 48.4357C173.945 48.5772 173.838 48.6961 173.704 48.7773C173.129 49.0363 172.498 49.1479 171.869 49.1022C169.79 49.1022 168.864 48.3226 168.864 46.5683V45.9674H165.616V46.5683C165.586 47.3117 165.715 48.0528 165.995 48.742C166.275 49.4312 166.7 50.0525 167.24 50.564C168.572 51.6061 170.248 52.1104 171.934 51.9772C173.391 52.1035 174.846 51.7124 176.043 50.8727C176.483 50.5181 176.835 50.0668 177.071 49.5541C177.308 49.0414 177.423 48.481 177.408 47.9165C177.393 47.0982 177.081 46.3133 176.531 45.7075Z" fill="#151718" />
                <path d="M149.08 46.5844V46.6656C148.949 47.3702 148.562 48.0012 147.992 48.436C147.355 48.863 146.597 49.0737 145.832 49.037C145.338 49.0917 144.838 49.0322 144.37 48.8633C143.903 48.6943 143.48 48.4204 143.135 48.0625C142.638 47.4531 142.322 46.7155 142.226 45.9347H151.971V44.5378C152.021 43.6494 151.891 42.7601 151.59 41.9229C151.289 41.0857 150.822 40.3178 150.217 39.665C149.607 39.0692 148.882 38.6047 148.086 38.3002C147.29 37.9957 146.44 37.8576 145.588 37.8945C144.399 37.8736 143.224 38.1589 142.177 38.7229C141.125 39.2622 140.259 40.1054 139.692 41.1431C139.118 42.2684 138.834 43.5187 138.863 44.7814C138.874 46.0242 139.156 47.2495 139.692 48.3711C140.162 49.4607 140.956 50.3794 141.966 51.0024C143.13 51.6869 144.466 52.025 145.815 51.977C146.631 52.0176 147.446 51.8948 148.213 51.6159C148.98 51.3369 149.683 50.9075 150.282 50.3527C151.277 49.4145 151.977 48.2066 152.296 46.8767V46.5194L149.08 46.5844ZM142.583 42.3125C142.859 41.858 143.259 41.4918 143.736 41.2568C144.294 40.9725 144.914 40.8329 145.539 40.8507C145.964 40.8172 146.391 40.8721 146.794 41.0119C147.196 41.1517 147.565 41.3733 147.878 41.6628C148.282 42.0821 148.549 42.6148 148.642 43.1896H142.209C142.272 42.8798 142.387 42.5831 142.551 42.3125H142.583Z" fill="#151718" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M119.862 33.3818H116.334V36.9104H119.862V33.3818ZM119.568 39.1507C119.665 39.4303 119.704 39.7271 119.682 40.0224V48.7285H123.141V51.6847H113.055V48.7285H116.531V40.932L113.981 41.1757V38.187L117.391 37.8784C117.699 37.827 118.014 37.8471 118.313 37.9372C118.612 38.0274 118.885 38.1851 119.113 38.3981C119.315 38.6149 119.47 38.8712 119.568 39.1507Z" fill="#151718" />
              </svg>
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
