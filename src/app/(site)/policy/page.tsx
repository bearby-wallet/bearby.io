import { Metadata } from "next";
import policyData from "./policy.json";

export const metadata: Metadata = {
  title: "Policy | Bearby",
  description: "This is Docs page for Bearby wallet",
};

export default function PolicyPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">

            <div className="w-full px-4">
              <div className="max-w-3xl mx-auto blog-details rounded-lg bg-white/5 px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>{policyData.title}</h1>
                <p className="font-medium">{policyData.last_update}</p>

                <p className="font-medium">{policyData.p0}</p>
                <p className="font-medium">{policyData.p1}</p>
                <p className="font-medium">{policyData.p2}</p>
                <p className="font-medium">{policyData.p3}</p>

                <strong className="text-white">{policyData.sub_title4}</strong>
                <p className="font-medium">{policyData.p5}</p>

                <strong className="text-white">{policyData.sub_title6}</strong>
                <p className="font-medium">{policyData.p7}</p>
                <p className="font-medium">{policyData.p8}</p>
                <p className="font-medium">{policyData.p9}</p>
                <p className="font-medium">{policyData.p10}</p>
                <p className="font-medium">{policyData.p11}</p>
                <p className="font-medium">{policyData.p12}</p>
                <p className="font-medium">{policyData.p13}</p>

                <strong className="text-white">{policyData.sub_title14}</strong>
                <p className="font-medium">{policyData.p15}</p>
                <p className="font-medium">{policyData.p16}</p>
                <p className="font-medium">{policyData.p17}</p>
                <p className="font-medium">{policyData.p18}</p>
                <p className="font-medium">{policyData.p19}</p>
                <p className="font-medium">{policyData.p20}</p>
                <p className="font-medium">{policyData.p21}</p>
                <p className="font-medium">{policyData.p22}</p>
                <p className="font-medium">{policyData.p23}</p>
                <p className="font-medium">{policyData.p24}</p>
                <p className="font-medium">{policyData.p25}</p>
                <p className="font-medium">{policyData.p26}</p>
                <p className="font-medium">{policyData.p27}</p>
                <p className="font-medium">{policyData.p28}</p>
                <p className="font-medium">{policyData.p29}</p>

                <strong className="text-white">{policyData.sub_title30}</strong>
                <p className="font-medium">{policyData.p31}</p>
                <p className="font-medium">{policyData.p32}</p>

                <strong className="text-white">{policyData.sub_title33}</strong>
                <p className="font-medium">{policyData.p34}</p>
                <p className="font-medium">{policyData.p35}</p>
                <p className="font-medium">{policyData.p36}</p>

                <strong className="text-white">{policyData.sub_title37}</strong>
                <p className="font-medium">{policyData.p38}</p>
                <p className="font-medium">{policyData.p39}</p>
                <p className="font-medium">{policyData.p40}</p>

                <strong className="text-white">{policyData.sub_title41}</strong>
                <p className="font-medium">{policyData.p42}</p>
                <p className="font-medium">{policyData.p43}</p>
                <p className="font-medium">{policyData.p44}</p>

                <strong className="text-white">{policyData.sub_title45}</strong>
                <p className="font-medium">{policyData.p46}</p>
                <p className="font-medium">{policyData.p47}</p>
                <p className="font-medium">{policyData.p48}</p>

                <p className="font-medium">{policyData.p50}</p>

                <p className="font-medium">{policyData.p53}</p>

                <strong className="text-white">{policyData.sub_title54}</strong>
                <p className="font-medium">{policyData.p55}</p>
                <p className="font-medium">{policyData.p56}</p>

                <strong className="text-white">{policyData.sub_title57}</strong>
                <p className="font-medium">{policyData.p58}</p>
                <p className="font-medium">{policyData.p59}</p>

                <strong className="text-white">{policyData.sub_title60}</strong>
                <p className="font-medium">{policyData.p61}</p>
                <p className="font-medium">{policyData.p62}</p>
                <p className="font-medium">{policyData.p63}</p>
                <p className="font-medium">{policyData.p64}</p>

                <strong className="text-white">{policyData.sub_title65}</strong>
                <p className="font-medium">{policyData.p66}</p>
                <p className="font-medium">{policyData.p67}</p>
                <p className="font-medium">{policyData.p68}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
