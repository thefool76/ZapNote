import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

  interface FAQProps {
    question: string;
    answer: string;
    value: string;
  }

  const FAQList: FAQProps[] = [
    {
      question: "Will be ZapNote will be free for use?",
      answer: "Yes. It will be.",
      value: "item-1",
    },
    {
      question: "Will you be adding more features to it?",
      answer:
        "Yes I will be adding more features in it in future",
      value: "item-2",
    },
    {
      question:
        "What tech Stack is Zapnote build on?",
      answer:
        "It is built using Nextjs,Tailwind,Radix,Shadcn etc",
      value: "item-3",
    },
    {
      question: "I would Like to support you, how can I do it?",
      answer: "Thank you for supporting me you can sponsor me on github or share a tweet about Zapnote on X.",
      value: "item-4",
    },

  ];
  
  export const FAQ = () => {
    return (
      <section
        id="faq"
        className="container py-24 sm:py-32"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Questions
          </span>
        </h2>
  
        <Accordion
          type="single"
          collapsible
          className="w-full AccordionRoot"
        >
          {FAQList.map(({ question, answer, value }: FAQProps) => (
            <AccordionItem
              key={value}
              value={value}
            >
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>
  
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
  
        <h3 className="font-medium mt-4">
          Still have questions?{" "}
          <a
            href="#"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Contact us
          </a>
        </h3>
      </section>
    );
  };