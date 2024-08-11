// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/Pc0phHSakt8
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import Image from "next/image"
import logo from "../../asset/img/logo.png"
import bg from "../../asset/img/bg.png"
import bg1 from "../../asset/img/bg1.png"


const { NextFetchEvent } = require("next/server");

export default function Layout() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link href="#" className="flex items-center justify-center" prefetch={false}>
                    <Image
                        src={logo}
                        width={42}
                        className="rounded-full border-gray-600 p-2"
                        alt="Picture of the author"
                    />
                    <span className="sr-only">Acme AI Support</span>
                </Link>
                <nav className="ml-auto hidden lg:flex gap-4 sm:gap-6">

                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Sign Up
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Log In
                    </Link>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="lg:hidden">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <Link href="#" prefetch={false}>
                            <MountainIcon className="h-6 w-6" />
                            <span className="sr-only">Acme AI Support</span>
                        </Link>
                        <div className="grid gap-2 py-6">
                            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                                About
                            </Link>
                            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                                Contact
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </header>
            <main className="flex-1 ">

                <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <Image
                        src={bg1}
                        alt="Background"
                        className="absolute  inset-0 w-full h-full object-cover opacity-30 rounded-3xl z-0"
                    />
                    <div className="relative z-10 container px-4 md:px-6 text-center">
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
                                Unlock the Power of AI Support
                            </h1>
                            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                                Our AI-powered support system is here to assist you with all your questions and concerns. Get fast,
                                reliable answers anytime, anywhere.
                            </p>
                            <div>
                                <Link
                                    href="/Chat"
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    prefetch={false}
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">AI-Powered Support</h2>
                                <p className="mt-4 text-muted-foreground md:text-xl">
                                    Our AI-powered support system is designed to provide you with fast, accurate, and personalized
                                    assistance. With advanced natural language processing and machine learning algorithms, we can
                                    understand your queries and deliver tailored solutions.
                                </p>
                                <ul className="mt-6 space-y-4">
                                    <li className="flex items-start gap-2">
                                        <CheckIcon className="h-5 w-5 text-primary" />
                                        <div>
                                            <h3 className="text-lg font-semibold">Instant Responses</h3>
                                            <p className="text-muted-foreground">Get answers to your questions in real-time, 24/7.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckIcon className="h-5 w-5 text-primary" />
                                        <div>
                                            <h3 className="text-lg font-semibold">Personalized Assistance</h3>
                                            <p className="text-muted-foreground">
                                                Our AI system learns your preferences and provides tailored support.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckIcon className="h-5 w-5 text-primary" />
                                        <div>
                                            <h3 className="text-lg font-semibold">Continuous Improvement</h3>
                                            <p className="text-muted-foreground">
                                                Our AI model is constantly learning and improving to provide better support.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex items-center justify-center">
                                <Image
                                    src={bg}
                                    alt="AI Support"
                                    className="w-full max-w-[500px] rounded-3xl shadow-2xl"

                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
                            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                                Find answers to the most common questions about our AI support service.
                            </p>
                        </div>
                        <div className="mt-8 space-y-4">
                            <Collapsible className="rounded-md border bg-background shadow-sm">
                                <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-4 py-3 text-lg font-medium [&[data-state=open]>svg]:rotate-90">
                                    What is the response time for AI support?
                                    <ChevronRightIcon className="h-5 w-5 transition-all" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                                    Our AI support system is designed to provide instant responses, typically within seconds. We use
                                    advanced natural language processing and machine learning algorithms to understand your queries and
                                    deliver tailored solutions in real-time.
                                </CollapsibleContent>
                            </Collapsible>
                            <Collapsible className="rounded-md border bg-background shadow-sm">
                                <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-4 py-3 text-lg font-medium [&[data-state=open]>svg]:rotate-90">
                                    Is the AI support service available 24/7?
                                    <ChevronRightIcon className="h-5 w-5 transition-all" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                                    Yes, our AI support service is available 24 hours a day, 7 days a week. You can access our AI-powered
                                    assistance anytime, from anywhere, to get the help you need.
                                </CollapsibleContent>
                            </Collapsible>
                            <Collapsible className="rounded-md border bg-background shadow-sm">
                                <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-4 py-3 text-lg font-medium [&[data-state=open]>svg]:rotate-90">
                                    How accurate is the AI support?
                                    <ChevronRightIcon className="h-5 w-5 transition-all" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                                    Our AI support system is highly accurate, with a success rate of over 90%. We use advanced machine
                                    learning algorithms and continuously train our model to provide reliable and accurate assistance.
                                    However, for complex issues, we may recommend connecting with our human support team.
                                </CollapsibleContent>
                            </Collapsible>
                            <Collapsible className="rounded-md border bg-background shadow-sm">
                                <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-4 py-3 text-lg font-medium [&[data-state=open]>svg]:rotate-90">
                                    Is the AI support service free to use?
                                    <ChevronRightIcon className="h-5 w-5 transition-all" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                                    Yes, our AI support service is free to use for all customers. We believe in making high-quality
                                    support accessible to everyone, so you can get the help you need without any additional costs.
                                </CollapsibleContent>
                            </Collapsible>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-muted-foreground">&copy; 2024 Acme AI Support. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                        Terms of Service
                    </Link>
                    <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}

function CheckIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}


function ChevronRightIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}


function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}


