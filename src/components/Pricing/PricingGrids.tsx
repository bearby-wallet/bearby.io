import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const PricingGrids = ({ pricingData }: { pricingData: any[] }) => {
  return (
    <div className="mx-auto px-4 sm:px-8 xl:px-0">
      <SectionTitle
        subTitle="Seamless Integration"
        title="The Best Way to Join the Massa Ecosystem."
        paragraph="Bearby provides a Simple Way to Connect any website to the Massa Ecosystem."
      />
      
      <div className="wow fadeInUp pricing-item-border relative z-20 overflow-hidden rounded-3xl bg-dark px-8 pb-10 pt-12.5 xl:px-10 flex flex-col sm:flex-row gap-4">
        {/* Small Plan */}
        <div className="relative overflow-hidden rounded-3xl bg-dark flex-1">
          <Image
            src="/images/pricing/0.webp"
            alt="Small Plan"
            width={500}  
            height={300} 
            className="object-cover w-full h-full" 
          />
        </div>

        {/* Medium Plan */}
        <div className="relative overflow-hidden rounded-3xl bg-dark flex-1">
          <Image
            src="/images/pricing/1.webp"
            alt="Medium Plan"
            width={500}  
            height={300} 
            className="object-cover w-full h-full" 
          />
        </div>

        {/* Large Plan */}
        <div className="relative overflow-hidden rounded-3xl bg-dark flex-1">
          <Image
            src="/images/pricing/2.webp"
            alt="Large Plan"
            width={500}  
            height={300} 
            className="object-cover w-full h-full" 
          />
        </div>

        {/* Background shapes */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <span className="absolute bottom-0 left-0 -z-1 aspect-[370/553] w-full">
            <Image
              src="/images/blur/blur-16.svg"
              alt="blur"
              fill
              className="max-w-none"
            />
          </span>
          <span className="absolute left-0 top-0 -z-1 aspect-[370/350] w-full">
            <Image
              src="/images/blur/blur-17.svg"
              alt="blur"
              fill
              className="max-w-none"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PricingGrids;
