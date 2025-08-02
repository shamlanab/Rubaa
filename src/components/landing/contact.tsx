import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="w-full py-20 md:py-28 lg:py-32 bg-muted/40">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 mx-auto">
        <div className="space-y-3">
           <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions about investment opportunities or need assistance with the platform? Reach out to us.
            </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-4 sm:max-w-none sm:gap-6">
            <Card className="text-left">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>By Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our investment support team is available from Sunday to Thursday, 9:00 AM to 5:00 PM (AST).
                </p>
                <a href="tel:+966123456789" className="mt-2 block font-semibold text-primary hover:underline">
                  +966 123 456 789
                </a>
              </CardContent>
            </Card>
            <Card className="text-left">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>By Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our investment support team is available from Sunday to Thursday, 9:00 AM to 5:00 PM (AST).
                </p>
                <a href="tel:+966123456789" className="mt-2 block font-semibold text-primary hover:underline">
                  Help@RubaNavigator.com
                </a>
              </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
};
