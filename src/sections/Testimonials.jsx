import { testimonials } from "../constants"
import TestimonialItem from "../components/TestimonialItem";

const Testimonials = () => {
  const halfLength = Math.floor(testimonials.length / 2);
  
  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40">
      
      <div className="container lg:flex">
       
        <div className="testimonials_head-res relative z-2 mr-20 flex-300">
          <span className="caption mb-5 block max-md:mb-2.5">Wall of Love</span>
          <h3 className="h3 max-md:h5 text-p4">Words from our fans</h3>
        </div>


        {/* left side */}
        <div className="testimonials_inner-before testimonials_inner-after relative -my-12 -mr-3 flex max-lg:static max-md:block">
          
          <div className="testimonials_group-after flex-50">
            {testimonials.slice(0, halfLength).map((testimonial) => (
              
              <TestimonialItem 
              containerClassName="last:after:hidden last:after:max-md:block"
              key={testimonial.id} 
              item={testimonial} />

            ))}
          </div>

          {/* right side */}
          <div className="flex-50">
            {testimonials.slice(halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
              />
            ))}
          </div>

          

        </div>
     
      </div>
    
    </section>
  )
}

export default Testimonials