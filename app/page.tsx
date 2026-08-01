import { ArrowDown, Box } from "lucide-react";
import Button from "./components/ui/Button";
import Description from "./components/Description";
import Marquee from "./components/Marquee";
import Card from "./components/ui/Card";
import { testimonial } from "./constants/data";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero-section flex items-center justify-center w-full min-h-screen border-b-2 border-outline">
        <div className="w-250 py-24 px-4">
          <div className="hero-heading flex flex-col items-center justify-center w-full">
            <h1 className="font-serif text-center heading-h1">
              Stop guessing the keywords, start matching your{" "}
              <span className="text-uno uppercase heading-uno font-bold">
                {" "}
                skills
              </span>
            </h1>

            <p className="text-[17px] font-semibold text-[#3a352e] dark:text-foreground text-center py-10 w-2/3 tracking-[0.03em]">
              Filter, sort and match jobs that are tailored to your CV.
            </p>
          </div>
          <div className="relative hero-cta flex max-sm:flex-col items-center justify-center gap-4 py-5">
            <Button className="py-3 px-6 relative">
              <Link className="absolute w-full inset-0" href="/product"></Link>
              <div className="flex items-center justify-center gap-2">
                <span>
                  <Box className="text-outline size-6 animate-[spin_3s_linear_infinite]" />
                </span>
                <p className="font-black leading-[1.60] tracking-[0.03em] text-[16px]">
                  Find your match
                </p>
              </div>
            </Button>
            <Button variant="secondary" className="py-3 px-6">
              <div className="flex items-center justify-center gap-2">
                <p className="font-black leading-[1.60] tracking-[0.03em] text-[16px]">
                  See how it works
                </p>
                <span>
                  <ArrowDown className="text-outline size-6" />
                </span>
              </div>
            </Button>

            <div className="absolute max-md:hidden right-5 rounded-full bg-primary border-2 border-outline shadow p-3 -z-99 opacity-20">
              <div className="relative">
                <div className="bg-primary border-2 border-outline items-center justify-center flex size-8">
                  <Box className="text-outline size-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-to-section min-h-screen border-b-2 border-outline">
        <div className="flex flex-col items-center justify-center py-20">
          <h2 className="heading-h2 font-serif">
            How to use <span className=" text-uno italic">Job Rank</span>
          </h2>
          <p className="leading-[1.75] text-tertiary dark:text-foreground font-normal tracking-wide mt-4">
            The smartest way to search
          </p>
        </div>
        <div className="py-8 px-10 flex items-center justify-center">
          <Description />
        </div>
      </section>

      <section className="min-h-[10vh] border-b-2 border-outline py-10">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-[11px] font-medium leading-[1.60] text-secondary dark:text-foreground uppercase tracking-[0.2em]">
            curated roles from across the web
          </h3>
          <Marquee />
        </div>
      </section>

      <section className="bg-gradient min-h-screen border-b-2 border-outline bg-deux dark:bg-background">
        <div className="py-20 px-10 flex flex-col items-start justify-center">
          <h4 className="heading-h2 font-serif">
            Built for developers,{" "}
            <span className="text-uno italic">Loved by job seekers</span>
          </h4>

          <div className="py-10 grid md:grid-cols-3 gap-5">
            {testimonial.map(({ id, variant, review, reviewer }) => (
              <Card
                key={id}
                variant={variant}
                className="text-[13px] tracking-wide"
              >
                <p className="leading-[1.75]">{review}</p>
                <hr />
                <p className="font-bold leading-none mb-auto">{reviewer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient min-h-screen border-b-2 border-outline bg-trois dark:bg-background"></section>
      <section className="bg-gradient min-h-screen border-b-2 border-outline bg-quart dark:bg-background"></section>
      <section className="bg-gradient min-h-screen border-b-2 border-outline bg-cent dark:bg-background"></section>
      <section className="bg-gradient min-h-screen border-b-2 border-outline bg-deux dark:bg-background"></section>
    </main>
  );
}
