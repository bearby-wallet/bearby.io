import { Metadata } from "next";
import policyData from "./extension-policy.json";

export const metadata: Metadata = {
  title: "Extension policy| Bearby", 
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
                <h1>{policyData.head_title}</h1>
                <p className="font-medium">{policyData.last_update}</p>
                <strong className="text-white">{policyData.title0}</strong>
                <p style={{ marginBottom: '0,5rem' }} className="font-medium">{policyData.p0}</p>
                <p style={{ marginBottom: '0,5rem' }} className="font-medium">{policyData.p1}</p>
                <p style={{ marginBottom: '0,5rem' }} className="font-medium">{policyData.p2}</p>
                <p style={{ marginBottom: '0,5rem' }} className="font-medium">{policyData.p3}</p>

                <strong className="text-white mt-1 block">{policyData.title1}</strong>
                <ul style={{ listStyle: 'none', paddingLeft: '1rem', marginTop: '0', marginBottom: '0.1rem' }}>
                <li style={{ marginBottom: '0.1rem' }}>{policyData.collections0}</li>
                <li style={{ marginBottom: '0.1rem' }}>{policyData.collections1}</li>
                </ul>
                <strong className="text-white block mt-4 mb-0">{policyData.title2}</strong>
                <p className="font-medium">{policyData.p4}</p>
                <strong className="text-white">{policyData.title3}</strong>
                <p className="font-medium">{policyData.p5}</p>
                <p className="font-medium">{policyData.p6}</p>
                <p className="font-medium">{policyData.p7}</p>
                <p className="font-medium">{policyData.p8}</p>
                <strong className="text-white">{policyData.title4}</strong>
                <p className="font-medium">{policyData.p9}</p>
                <p className="font-medium" style={{ color: '#f0f0f0' }}>
                  {policyData.p10}
                </p>
                <strong className="text-white mb-1 block">{policyData.title5}</strong>
                <ul style={{ listStyle: 'none', paddingLeft: '1rem', marginTop: '0', marginBottom: '0.1rem' }}>
                  <li style={{ marginBottom: '0.1rem' }}>{policyData.stores0}</li>
                  <li style={{ marginBottom: '0.1rem' }}>{policyData.stores1}</li>
                  <li style={{ marginBottom: '0.1rem' }}>{policyData.stores2}</li>
                  <li style={{ marginBottom: '0.1rem' }}>{policyData.stores3}</li>
                  <li style={{ marginBottom: '0.1rem' }}>{policyData.stores4}</li>
                  <li style={{ marginBottom: '0.1rem' }}>{policyData.stores5}</li>
                </ul>
                <strong className="text-white block mt-4 mb-0">{policyData.title6}</strong>
                <p className="font-medium">{policyData.p11}</p>
                <strong className="text-white">{policyData.title7}</strong>
                <p className="font-medium">{policyData.p12}</p>
                <strong className="text-white">{policyData.title8}</strong>
                <p className="font-medium">{policyData.p13}</p>
                <strong className="text-white">{policyData.title9}</strong>
                <p className="font-medium">{policyData.p14}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
