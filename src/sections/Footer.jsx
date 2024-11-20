import { socials } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex items-center justify-center gap-3 w-full max-md:flex-col">
          
          <p className="small-compact opacity-70">Copyright, Roland</p>

          <div className="small-compact flex justify-center flex-1 sm:ml-auto text-p5 transition-all">
            <p className="legal-after relative mr-9 duration-500 hover:text-p1">Privacy Policy</p>
            
            <p className=" duration-500 hover:text-p1">Terms of Use</p>
          </div>

          <ul className="flex justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({id, url, icon, title}) => (
              <li key={id}>
                <a href={url}>
                  <img src={icon} alt={title} />
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </footer>
  )
}

export default Footer;