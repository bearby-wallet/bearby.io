"use client";

import axios from "axios";
import Image from "next/image";
import { integrations, messages } from "../../../integrations.config";
import toast from "react-hot-toast";

const SinglePricing = ({ price }: any) => {
  // POST request
  const handleSubscription = async (e: any) => {
    e.preventDefault();

    if (!integrations?.isStripeEnabled) {
      toast.error(messages.stripe);
      return;
    }

    const { data } = await axios.post(
      "/api/payment",
      {
        priceId: price.id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    window.location.assign(data);
  };

  return (
    <div className="wow fadeInUp pricing-item-border relative z-20 overflow-hidden rounded-3xl bg-dark px-8 pb-10 pt-12.5 xl:px-10">
      {/* Small Plan */}
      {price.nickname === "Small" && (
        <div className="relative overflow-hidden rounded-3xl bg-dark">
          <Image
            src="/images/pricing/photo_3_2025-01-19_10-40-19.jpg"
            alt="Описание изображения для Small Plan"
            width={500}
            height={300}
            className="object-cover"
          />
        </div>
      )}

      {/* Medium Plan */}
      {price.nickname === "Medium" && (
        <div className="relative overflow-hidden rounded-3xl bg-dark">
          <Image
            src="/images/pricing/photo_1_2025-01-19_10-40-19.jpg"
            alt="Описание изображения для Medium Plan"
            width={600}
            height={400}
            className="object-cover"
          />
        </div>
      )}

      {/* Large Plan */}
      {price.nickname === "Large" && (
        <div className="relative overflow-hidden rounded-3xl bg-dark">
          <Image
            src="/images/pricing/photo_2_2025-01-19_10-40-19.jpg"
            alt="Описание изображения для Large Plan"
            width={700}
            height={500}
            className="object-cover"
          />
        </div>
      )}

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
  );
};

export default SinglePricing;
