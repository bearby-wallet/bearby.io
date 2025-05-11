'use client';

import dynamic from 'next/dynamic';

const ClientMDXRemote = dynamic(() =>
  import('next-mdx-remote').then(mod => mod.MDXRemote), { ssr: false }
);

export default ClientMDXRemote;
