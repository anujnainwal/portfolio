import Layout from "@/components/layouts/Layout";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
