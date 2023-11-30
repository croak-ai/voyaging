import dynamic from "next/dynamic";
export default async function HomePage() {
  // We need to do this because the Lottie package has a bug with a Suspense boundary where it gives the error "document is not defined"
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const DynamicLandingPage = dynamic(
    () => import("./components/landing-page"),
    { ssr: false }
  );

  return <DynamicLandingPage />;
}
