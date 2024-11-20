import Marker from "../components/Marker.jsx";
import { links, logos } from "../constants/index.jsx";

import { Element } from "react-scroll";


const Download = () => {
  return (
    <section>
      <Element 
      className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      name="download">

        <div className="container">

          <div className="flex items-center">
            
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100">

              {/* logo container */}
              <div className="mb-10">
                <img 
                className="pointer-events-none select-none"
                src="/images/xora.svg" 
                alt="xora"
                width={160}
                height={55} />
              </div>

              <p className="body-1 mb-10 max-w-md">
                Try it now for free on iOS, Android, PC, Web - whatever your flavor, we've got you covered.
              </p>

              {/* download platform */}
              <ul className="flex flex-wrap items-center gap-6">
                {links.map(({id, url, icon}) => (
                  <li 
                  className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                  key={id}>
                    
                    <a 
                    className="download_tech-icon_before relative size-22 flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500"
                    href={url}>

                      <span className="absolute -top-2 rotate-90"><Marker /></span>

                      <img 
                      className="absolute size-13/20 object-contain pointer-events-none select-none"
                      src="/images/lines.svg" 
                      alt="lines" />

                      <span className="download_tech-icon">{icon}</span>

                    </a>

                  </li>
                ))}
              </ul>

            </div>

            {/* demo */}
            <div className="mb-10 max-md:hidden">
              <div className="download_preview-before download_preview-after rounded-40 relative w-[955px] border-2 border-s5 p-6">
                
                {/* screen container */}
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />

                  <img 
                  className="rounded-xl pointer-events-none select-none"
                  src="/images/screen.jpg" 
                  alt="screen" 
                  width={855} 
                  height={655} />
                </div>

              </div>
            </div>

          </div>
           
           {/* partners */}
          <ul className="mt-24 flex justify-center gap-20 max-lg:hidden">
            {logos.map(({ id, url, width, height, title}) => (
              <li key={id}>
                <img 
                className="pointer-events-none select-none"
                src={url} 
                alt={title} 
                width={width} 
                height={height} />
              </li>
            ))}
          </ul>

        </div>

      </Element>
    </section>
  )
}

export default Download