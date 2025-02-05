import policyData from "./extension-policy.json";

export const metadata: Metadata = {
  title: "Terms | Bearby", 
  description: "This is Terms page for Bearby wallet",
};

export default function TermsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">

            <div className="w-full px-4">
              <div className="max-w-3xl mx-auto blog-details rounded-lg bg-white/5 px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>{policyData.title}</h1>
                <p className="font-medium">{policyData.last_update}</p>
                <strong className="text-white">{policyData.sub_title0}</strong>
                <p className="font-medium">{policyData.p0}</p>
                <p className="font-medium">{policyData.p1}</p>
                <p className="font-medium">{policyData.p2}</p>
                <p className="font-medium">{policyData.p3}</p>
                <p className="font-medium">{policyData.p4}</p>

                <strong className="text-white">{policyData.subt_title1}</strong>
                <p className="font-medium">{policyData.p5}</p>

                <strong className="text-white">{policyData.subt_title2}</strong>
                <p className="font-medium">{policyData.p7}</p>
                <p className="font-medium">{policyData.p8}</p>
                <p className="font-medium">{policyData.p9}</p>
                <p className="font-medium">{policyData.p10}</p>

                <strong className="text-white">{policyData.subt_title3}</strong>
                <br></br>
                <strong className="text-white">{policyData.subt_title4}</strong>
                <p className="font-medium">{policyData.p11}</p>
                <strong className="text-white">{policyData.subt_title5}</strong>
                <p className="font-medium">{policyData.p12}</p>
                <strong className="text-white">{policyData.subt_title6}</strong>
                <p className="font-medium">{policyData.p13}</p>
                <strong className="text-white">{policyData.subt_title7}</strong>
                <p className="font-medium">{policyData.p14}</p>
                <strong className="text-white">{policyData.subt_title8}</strong>
                <br></br>
                <strong className="text-white">{policyData.subt_title9}</strong>
                <p className="font-medium">{policyData.p15}</p>
                <p className="font-medium">{policyData.p16}</p>
                <p className="font-medium">{policyData.p17}</p>
                <strong className="text-white">{policyData.subt_title10}</strong>
                <p className="font-medium">{policyData.p18}</p>
                <strong className="text-white">{policyData.subt_title11}</strong>
                <p className="font-medium">{policyData.p19}</p>
                <strong className="text-white">{policyData.subt_title12}</strong>
                <br></br>
                <strong className="text-white">{policyData.subt_title13}</strong>
                <p className="font-medium">{policyData.p20}</p>
                <p className="font-medium">{policyData.p21}</p>
                <strong className="text-white">{policyData.subt_title14}</strong>
                <p className="font-medium">{policyData.p22}</p>
                <p className="font-medium">{policyData.p23}</p>
                <strong className="text-white">{policyData.subt_title15}</strong>
                <p className="font-medium">{policyData.p24}</p>
                <p className="font-medium">{policyData.p25}</p>
                <p className="font-medium">{policyData.p26}</p>
                <strong className="text-white">{policyData.subt_title16}</strong>
                <p className="font-medium">{policyData.p27}</p>
                <strong className="text-white">{policyData.subt_title17}</strong>
                <p className="font-medium">{policyData.p28}</p>
                <p className="font-medium">{policyData.p29}</p>
                <strong className="text-white">{policyData.subt_title18}</strong>
                <p className="font-medium">{policyData.p30}</p>
                <strong className="text-white">{policyData.subt_title19}</strong>
                <p className="font-medium">{policyData.p31}</p>
                <strong className="text-white">{policyData.subt_title20}</strong>
                <p className="font-medium">{policyData.p32}</p>
                <strong className="text-white">{policyData.subt_title21}</strong>
                <p className="font-medium">{policyData.p33}</p>
                <strong className="text-white">{policyData.subt_title22}</strong>
                <p className="font-medium">{policyData.p34}</p>
                <strong className="text-white">{policyData.subt_title23}</strong>
                <p className="font-medium">{policyData.p35}</p>
                <strong className="text-white">{policyData.subt_title24}</strong>
                <p className="font-medium">{policyData.p36}</p>
                <p className="font-medium">{policyData.p37}</p>
                <p className="font-medium">{policyData.p38}</p>
                <strong className="text-white">{policyData.subt_title25}</strong>
                <p className="font-medium">{policyData.p39}</p>
                <p className="font-medium">{policyData.p40}</p>
                <strong className="text-white">{policyData.subt_title26}</strong>
                <p className="font-medium">{policyData.p41}</p>
                <p className="font-medium">{policyData.p42}</p>
                <strong className="text-white">{policyData.subt_title27}</strong>
                <strong className="text-white">{policyData.subt_title28}</strong>
                <p className="font-medium">{policyData.p43}</p>
                <p className="font-medium">{policyData.p44}</p>
                <strong className="text-white">{policyData.subt_title29}</strong>
                <p className="font-medium">{policyData.p45}</p>
                <strong className="text-white">{policyData.subt_title30}</strong>
                <p className="font-medium">{policyData.p46}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
