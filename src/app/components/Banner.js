import bannerStyles from "@/app/styles/banner.module.css"
import commonStyles from "@/app/styles/common.module.css"
import { Inter } from 'next/font/google'
import Link from "next/link";
import Image from "next/image";
import { Mulish } from 'next/font/google'
const mulish = Mulish({
    weight:['300','400','500','600','700','800','900'],
    subsets:['latin'],
    display:'swap'
  })
const BannerSection = ({title, imageUrl}) => {
    return (
       <main className={bannerStyles.main_section}>
          <div className={commonStyles.container}>
            <div className={commonStyles.grid_two_section}>
                <div className={bannerStyles.banner_content}>
                    <h1>{title}</h1>
                    <p>From award-winning dramas to blockbuster action movies, web series we&apos;ve got you covered.
                       Browse our selection of the latest and gretest movies,and find your new favorite today.
                    </p>
                    <Link href="/movie">
                    <button className={mulish.className}>
                        Explore Movies
                    </button>
                    </Link>
                </div>
                <div className={bannerStyles.banner_image}>
                  
                  <Image src={imageUrl} alt="netflix" width={300} height={300} />
                  
                </div>
            </div>
        </div> 
       </main>
    );
};

export default BannerSection;