import Head from "next/head";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

export default function Home() {
	const { locale, locales } = useRouter();
	const { data: session } = useSession();

	const { t, lang } = useTranslation("index");
	const subtitle = t("subtitle", { icon: ":)" });
	const title = t("title");

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>{subtitle}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<h1 className="text-6xl font-bold">{title}</h1>
				<h2 className="text-6xl font-bold">{subtitle}</h2>
			</main>
		</div>
	);
}
