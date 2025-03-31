import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    title: "On-Device Key Storage",
    description:
      "Bearby stores your keys directly on your device, ensuring full control and security without external dependencies.",
    icon: "/images/features/icon-01.svg",
  },
  {
    id: 2,
    title: "Zero Data Collection",
    description:
      "Bearby collects no user data whatsoever, prioritizing your privacy and autonomy at every step.",
    icon: "/images/features/icon-02.svg",
  },
  {
    id: 3,
    title: "Seamless User Experience",
    description:
      "Enjoy a smooth and intuitive interface designed for ease of use, backed by robust cryptographic protection.",
    icon: "/images/features/icon-03.svg",
  },
  {
    id: 4,
    title: "AES-256 + PBKDF2 + BLAKE3 Encryption",
    description:
      "Leverage top-tier encryption with AES-256, PBKDF2, and BLAKE3 for unmatched security of your assets.",
    icon: "/images/features/icon-04.svg",
    rotate: true,
  },
  {
    id: 5,
    title: "Local Transaction Signing",
    description:
      "All transactions are signed directly on your hardware, eliminating risks from remote processing.",
    icon: "/images/features/icon-05.svg",
    rotate: true,
  },
  {
    id: 6,
    title: "Advanced Cryptographic Layers",
    description:
      "Benefit from multiple layers of cryptography, ensuring secure storage and transfer of your digital assets.",
    icon: "/images/features/icon-06.svg",
    rotate: true,
  },
];

export default featuresData;
