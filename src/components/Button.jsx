import Marker from '../components/Marker.jsx';
import clsx from "clsx";

const Button = ({icon, children, href, containerClassName, onClick, markerFill}) => {
  const Inner = () => (
    <>
        <div className='relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden'>
            <span className='absolute -left-[1px]'>
                <Marker markerFill={markerFill}></Marker>
            </span>

            {icon && (
                <img 
                className="size-10 mr-5 object-contain z-10"
                src={icon} 
                alt="circle"></img>
            )}    
            <span className='relative z-2 font-poppins base-bold text-p1 uppercase'>
                {children}
            </span>
        </div>

        <span className='glow-before glow-after'/>
    </>
  );
  
    return href ? (
    <a className={clsx('relative p-0.5 g5 rounded-2xl shadow-500 group', containerClassName)} href={href}>
        <Inner></Inner>
    </a>
    ) : (
    <button className={clsx('relative p-0.5 g5 rounded-2xl shadow-500 group')} onClick={onClick}>
        <Inner></Inner>
    </button>
    );
}

export default Button;