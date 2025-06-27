import TestimonialsSlider from "./_testimonials";

export default function Testimonials() {
  return (
    <div
      className="bg-testimonial pt-40 pb-32 lg:py-33"
      id="testimonial-section"
    >
      <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
        <div className="text-center">
          <h3
            className="text-4xl sm:text-6xl font-bold text-black my-3"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="1000"
          >
            Stories of Impact
          </h3>

          <h3
            className="text-4xl sm:text-6xl font-bold text-black/50 lg:mr-48 my-4"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="1100"
          >
            Stories of Impact
          </h3>

          <h3
            className="text-4xl sm:text-6xl font-bold text-black/25 opacity-25 lg:-mr-32 my-4"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="1300"
          >
            Stories of Impact
          </h3>
        </div>
        <TestimonialsSlider />
      </div>
    </div>
  );
}
