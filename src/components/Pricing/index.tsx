import Image from "next/image";
import PricingGrids from "./PricingGrids";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 scroll-mt-17 overflow-hidden pt-10 sm:pt-22.5 lg:pt-27.5 xl:pt-32.5"
    >
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        {/* Background Circles */}
        <div className="relative top-18">
          <div className="pointer-events-none absolute inset-0 -z-10 -my-55 overflow-hidden">
            {[13, 14, 15].map((num) => (
              <div
                key={num}
                className="absolute left-1/2 top-0 mx-auto aspect-square w-full max-w-[925px] -translate-x-1/2"
              >
                <Image
                  src={`/images/blur/blur-${num}.svg`}
                  alt="blur"
                  fill
                  className="max-w-none"
                />
              </div>
            ))}
          </div>

          <div className="pricing-circle absolute left-1/2 top-0 h-[500px] sm:h-[700px] lg:h-[830px] w-full max-w-[500px] sm:max-w-[700px] lg:max-w-[830px] -translate-x-1/2 rounded-full bg-dark"></div>

          <div className="absolute -top-30 left-1/2 -z-1 h-40 sm:h-60 w-full max-w-[250px] sm:max-w-[482px] -translate-x-1/2 overflow-hidden">
            <div className="stars"></div>
            <div className="stars2"></div>
          </div>
        </div>

        {/* Grid row */}
        <div className="relative -z-1 flex flex-wrap justify-center gap-4 sm:gap-7.5">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="pricing-grid pricing-grid-border relative h-auto sm:h-[250px] w-full max-w-[30px] sm:max-w-[50px]"
              ></div>
            ))}
        </div>

        <PricingGrids />
      </div>
    </section>
  );
};

export default Pricing;
