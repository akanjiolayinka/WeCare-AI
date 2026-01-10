import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import Navigation from "@/components/Navigation";
import { 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  HelpCircle, 
  Loader2,
  Trash2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from 'react-markdown';

// Initialize Gemini
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_GENAI_KEY || "PLACEHOLDER_KEY");

interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
}

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue("");
    setShowWelcome(false);
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      
      const chat = model.startChat({
        history: messages.map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content }]
        })),
        generationConfig: {
          maxOutputTokens: 1000,
        },
      });

      const result = await chat.sendMessage(text);
      const response = await result.response;
      const aiText = response.text();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: aiText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Chat Error:", error);
      // Fallback for demo/no-key
      setTimeout(() => {
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'model',
          content: "I'm having trouble connecting right now (likely due to a missing API key). In a real scenario, this would answer: **" + text + "**",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
      }, 1000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const starterPrompts = [
    {
      title: "Common Skin Conditions",
      prompt: "What are the most common skin conditions and their symptoms?"
    },
    {
      title: "Sun Protection Advice",
      prompt: "Why is sunscreen important and how often should I apply it?"
    },
    {
      title: "Acne Prevention",
      prompt: "Can you give me a simple routine to help prevent acne?"
    },
    {
      title: "Anti-Aging Tips",
      prompt: "What are the best scientifically proven ways to slow down skin aging?"
    }
  ];

  const faqs = [
    {
      question: "Is this medical advice?",
      answer: "No. WeCare AI provides information for educational purposes only. Always consult a dermatologist for medical diagnosis and treatment."
    },
    {
      question: "How accurate is the AI?",
      answer: "Our AI uses advanced models trained on medical data, but it is not perfect. Use it as a preliminary guide, not a definitive diagnosis."
    },
    {
      question: "Is my chat data private?",
      answer: "Yes. Your chats are processed securely and we do not store personal identifiers with your conversation history."
    },
    {
      question: "Can I upload photos here?",
      answer: "For visual analysis, please use the 'Scan' page via the navigation menu. This chat is text-only."
    }
  ];

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="flex-1 overflow-hidden flex flex-row">
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col relative max-w-5xl mx-auto w-full">
          <ScrollArea className="flex-1 p-4 md:p-8">
            {showWelcome ? (
              <div className="h-full flex flex-col items-center justify-center space-y-8 animate-in fade-in zoom-in duration-500">
                <div className="text-center space-y-4 max-w-2xl">
                  <div className="bg-primary/10 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                    <Sparkles className="w-10 h-10 text-primary" />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                    Hello, how can I help?
                  </h1>
                  <p className="text-muted-foreground text-lg">
                    I'm your personal skin health assistant. Ask me anything about skincare, conditions, or healthy habits.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 w-full max-w-2xl">
                  {starterPrompts.map((item, i) => (
                    <Button 
                      key={i} 
                      variant="outline" 
                      className="h-auto p-4 flex flex-col items-start gap-2 hover:border-primary/50 hover:bg-primary/5 transition-all text-left whitespace-normal shadow-sm"
                      onClick={() => handleSendMessage(item.prompt)}
                    >
                      <span className="font-semibold text-primary">{item.title}</span>
                      <span className="text-sm text-muted-foreground">{item.prompt}</span>
                    </Button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6 pb-4">
                 <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.role === 'model' && (
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <Bot className="w-5 h-5 text-primary" />
                        </div>
                      )}
                      
                      <div className={`
                        max-w-[85%] md:max-w-[75%] rounded-2xl px-5 py-3 shadow-sm
                        ${message.role === 'user' 
                          ? 'bg-primary text-primary-foreground rounded-tr-sm' 
                          : 'bg-card border rounded-tl-sm'
                        }
                      `}>
                         <div className={`prose ${message.role === 'user' ? 'prose-invert' : 'prose-sm dark:prose-invert'} max-w-none break-words`}>
                           <ReactMarkdown>
                             {message.content}
                           </ReactMarkdown>
                         </div>
                      </div>

                      {message.role === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                          <User className="w-5 h-5 text-secondary-foreground" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                  
                  {isLoading && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-3 justify-start"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Loader2 className="w-5 h-5 text-primary animate-spin" />
                      </div>
                      <div className="bg-card border rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm flex items-center gap-1">
                        <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce"></span>
                      </div>
                    </motion.div>
                  )}
                 </AnimatePresence>
                 <div ref={scrollRef} />
              </div>
            )}
          </ScrollArea>

          {/* Input Area */}
          <div className="p-4 bg-background/80 backdrop-blur-sm border-t">
            <div className="max-w-3xl mx-auto flex gap-3">
              {messages.length > 0 && (
                <Button 
                   variant="ghost" 
                   size="icon" 
                   onClick={() => { setMessages([]); setShowWelcome(true); }}
                   title="Clear Chat"
                >
                  <Trash2 className="w-5 h-5 text-muted-foreground hover:text-destructive" />
                </Button>
              )}
              <div className="flex-1 relative">
                <Input 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask a question about skin health..."
                  className="rounded-full pl-6 pr-12 h-12 shadow-sm border-input/60 focus-visible:ring-primary"
                  disabled={isLoading}
                />
                <Button 
                  size="icon" 
                  className="absolute right-1 top-1 h-10 w-10 rounded-full" 
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isLoading}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="h-12 w-12 rounded-full shrink-0" title="FAQ">
                     <HelpCircle className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader className="mb-6">
                    <SheetTitle>Frequently Asked Questions</SheetTitle>
                  </SheetHeader>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`item-${i}`}>
                        <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;