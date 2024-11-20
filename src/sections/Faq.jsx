import FaqItem from "../components/FaqItem.jsx";
import { faq } from "../constants/index.jsx";

import { Element } from "react-scroll";

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);

  return (
    <section>
      <Element 
      className="relative"
      name="faq">
          {/* questions header */}
          <div className="container relative z-2 py-28">
            
            <div>
              <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">
                Curiosity didn't kill the cat, it gave it answers.
              </h3>
              <p className="body-1 max-lg:max-w-sm">
                You've got questions, we've got answers.
              </p>
            </div>

            <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2"/>
            
          </div>

          {/* questions content*/}
          <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">

            <div className="container flex gap-10 max-lg:block">
              
              <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex items-center justify-center size-20 border-2 border-s2 bg-s1">
                <img 
                className="size-1/2 select-none"
                src="/images/faq-logo.svg" 
                alt="logo" />
              </div>

              <div className="relative flex-1 pt-24">
                {faq.slice(0, halfLength).map(({id, question, answer}) => (
                  <FaqItem key={id} index={id} question={question} answer={answer} />
                ))}
              </div>

              <div className="relative flex-1 lg:pt-24">
                {faq.slice(halfLength).map(({id, question, answer}) => (
                  <FaqItem key={id} index={id} question={question} answer={answer} />
                ))}
              </div>

            </div>

            <div className="faq-line_after h-full w-0.5 absolute top-0 left-[calc(50%-1px)] -z-1 bg-s2 max-lg:hidden"/>

          </div>
      </Element>
    </section>
  )
}

export default Faq