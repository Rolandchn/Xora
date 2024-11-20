import clsx from "clsx";
import { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";


const FaqItem = ({index, question, answer}) => {
  const [activeId, setActiveId] = useState(false);
  const active = activeId === index;

  return (
    <div className="relative z-2 mb-16">
      
      {/* box that container the question */}
      <div 
      className="group relative flex items-center justify-between gap-10 cursor-pointer px-7"
      onClick={() => {setActiveId(activeId === index ? null : index)}}>
        
        {/* The question tab */}
        <div className="flex-1">
          <span className="small-compact mb-1.5 text-p3 max-lg:hidden block">
            {index < 10 ? "0" : ""}{index}
          </span>

          <h3 className={clsx("h6 text-p4 transition-colors duration-500 max-md:min-h-20 max-md:flex max-md:items-center", active && 'max-lg:text-p1')}>
            {question}
          </h3>
        </div>

        {/* the + symbole */}
        <div className={clsx("faq-icon relative flex items-center justify-center size-12 rounded-full border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-s4", active && "before:bg-p1 after:rotate-0 after:bg-p1")}>
          <div className="g3 size-11/12 rounded-full shadow-300"/>
        </div>

      </div>

      {/* box that containes the answer */}
      <SlideDown>
          {activeId === index && (
            <div className="body-3 px-7 py-3.5">
              <p>{answer}</p>
            </div>
          )}
      </SlideDown>

      {/* bg box when tab opened */}
      <div className={clsx("g5 w-full absolute -bottom-7 -top-7 left-0 -z-1 rounded-3xl transition-opacity duration-500", active ? "opacity-100" : "opacity-0")}>
        <div className="g4 absolute -z-1 inset-0.5 rounded-3xl"/>
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-p1"/>
      </div>
   
    </div>
  )
}

export default FaqItem