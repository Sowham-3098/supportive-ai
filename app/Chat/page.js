"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import ReactMarkdown from 'react-markdown';
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

export default function Chat() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);

  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt) return;
    setIsLoading(true);

    const userMessage = { type: "user", content: prompt };
    setMessages((prev) => [...prev, userMessage]);
    setPrompt(""); // Clear the input field

    try {
      const chatSession = model.startChat({ generationConfig });
      const result = await chatSession.sendMessage(prompt);
      const message = await result.response.text();

      const botMessage = { type: "bot", content: message };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error during API call:", error);
      const errorMessage = {
        type: "bot",
        content: "Error: Unable to fetch response. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

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
      <div
        className="flex-1 overflow-auto p-6"
        ref={chatContainerRef}
      >
        <div className="grid gap-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 ${
                message.type === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <Avatar className="w-8 h-8 border shadow-lg">
                {message.type === "user" ? (
                  <UserIcon className="w-8 h-8" />
                ) : (
                  <BotIcon className="w-8 h-8" />
                )}
              </Avatar>
              <div className="grid gap-1 text-sm">
                <div className="font-bold">
                  {message.type === "user" ? "You" : "AI Assistant"}
                </div>
                <div className={`prose text-muted-foreground p-4 rounded-lg shadow-xl ${message.type === "user" ? "bg-white" : "bg-slate-200"}`}>
                    <ReactMarkdown>{message.content}</ReactMarkdown>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-center items-center">
              <p>Loading...</p>
            </div>
          )}
        </div>
      </div>
      <div className="bg-background px-6 py-4 border-t">
        <form onSubmit={handleSubmit} className="relative">
          <Textarea
            placeholder="Type your message..."
            name="message"
            id="message"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={1}
            className="min-h-[48px] rounded-2xl resize-none p-4 border border-neutral-400 shadow-sm pr-16"
          />
          <Button
            type="submit"
            size="icon"
            className="absolute w-8 h-8 top-3 right-3"
          >
            <ArrowUpIcon className="w-4 h-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>
    </div>
  );
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
  );
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
  );
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UserIcon(props) {
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
      <circle cx="12" cy="8" r="4" />
      <path d="M16 21a4 4 0 0 0-8 0" />
    </svg>
  );
}
