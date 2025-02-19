import { VulnerabilityForm } from "@/modules/VulnerabilityForm/VulnerabilityForm";

export default async function Home() {
    return (
        <main className="flex px-2 flex-col gap-4 items-center justify-center h-screen">
            <h1 className="text-blue font-heading font-bold text-3xl">
                Hello, there!
            </h1>
            <h1 className="text-blue font-heading font-semibold text-xl">
                This portal allows you to check for vulnerabilities in packages
                using `osv.dev`. For more details, visit my{" "}
                <a
                    className="text-gray-900 font-heading font-semibold"
                    href="https://github.com/fernandoors/ms-vulnerabilities-check"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub repository
                </a>
                .
            </h1>
            <p className="text-gray-900 flex items-center justify-center rounded-xl font-bold px-5 h-12 bg-gray-200 w-full ">
                Enter your `package.json` file below to check for potential
                vulnerabilities.
            </p>
            <section className="w-full">
                <VulnerabilityForm />
            </section>
        </main>
    );
}
