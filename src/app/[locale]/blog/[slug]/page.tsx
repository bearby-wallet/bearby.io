type Props = {
  params: Promise<{ slug: string }>;
};


export default async function BlogDetails(props: Props) {
  const params = await props.params;
  const { slug } = params;

  return null;
}
