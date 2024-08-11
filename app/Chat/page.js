/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sUGekxsbToQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"

export default function Chat() {
    return (
        <div className="flex flex-col h-screen">
            <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <BotIcon className="w-6 h-6" />
                    <h1 className="text-xl font-bold">AI Assistant</h1>
                </div>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <SettingsIcon className="w-5 h-5" />
                    <span className="sr-only">Settings</span>
                </Button>
            </header>
            <div className="flex-1 overflow-auto p-6">
                <div className="grid gap-4">
                    <div className="flex items-start gap-4">
                        <Avatar className="w-8 h-8 border">
                            <AvatarImage src="/placeholder-user.jpg" alt="Image" />
                            <AvatarFallback>YO</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1 text-sm">
                            <div className="font-bold">You</div>
                            <div className="prose text-muted-foreground">
                                <p>Hi there! I'm looking for some help with a project I'm working on. Can you give me a hand?</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Avatar className="w-8 h-8 border">
                            <AvatarImage src="/placeholder-user.jpg" alt="Image" />
                            <AvatarFallback>OA</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1 text-sm">
                            <div className="font-bold">AI Assistant</div>
                            <div className="prose text-muted-foreground">
                                <p>Absolutely! I'd be happy to assist you with your project. What kind of help do you need?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-background px-6 py-4 border-t">
                <div className="relative">
                    <Textarea
                        placeholder="Type your message..."
                        name="message"
                        id="message"
                        rows={1}
                        className="min-h-[48px] rounded-2xl resize-none p-4 border border-neutral-400 shadow-sm pr-16"
                    />
                    <Button type="submit" size="icon" className="absolute w-8 h-8 top-3 right-3">
                        <ArrowUpIcon className="w-4 h-4" />
                        <span className="sr-only">Send</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

function ArrowUpIcon(props) {
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
            <path d="m5 12 7-7 7 7" />
            <path d="M12 19V5" />
        </svg>
    )
}


function BotIcon(props) {
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
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
        </svg>
    )
}


function SettingsIcon(props) {
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
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}