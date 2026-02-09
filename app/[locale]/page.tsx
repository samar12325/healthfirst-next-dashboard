import { redirect } from "next/navigation";
import { defaultLocale, type Locale } from "@/lib/i18n";

type HomePageProps = {
  params: { locale: Locale };
};

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;
  redirect(`/${locale ?? defaultLocale}/dashboard`);
}
