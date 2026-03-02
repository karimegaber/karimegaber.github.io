
// Next.js App Router requires generateStaticParams for dynamic routes when using output: "export".
// Since we want these pages to be fully client-side rendered, we export a single dummy param
// during the build step. The actual routing happens via 404.html intercept.
export async function generateStaticParams() {
  return [{ slug: "placeholder-to-satisfy-export" }]
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
