"use client";

import { SlideShell } from "@/components/slides/SlideShell";
import {
  TitleSlide,
  SectionSlide,
  BentoSlide,
  BentoCard,
  VideoGridSlide,
  QuoteSlide,
  Bold,
  Accent,
  AccentWarm,
  Keyword,
  KeywordWarm,
} from "@/components/slides/SlideElements";
import {
  MegaphoneIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  LightBulbIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  EyeIcon,
  FireIcon,
} from "@heroicons/react/24/outline";

const slides = [
  // 1 — Cover
  <TitleSlide
    key="cover"
    accent="Week 10 · Mar 2 – Mar 8, 2026"
    title={<>The <Keyword>Signal</Keyword> & the <KeywordWarm>Soul</KeywordWarm></>}
    subtitle="PRCA wins, community truths, and a visual rebirth"
  />,

  // 2 — Section: PRCA & MarcAI
  <SectionSlide
    key="section-prca"
    label="What Happened"
    title={<><KeywordWarm>Three</KeywordWarm> Things That Defined the Week</>}
    number="01"
  />,

  // 3 — PRCA Event Success
  <BentoSlide key="prca-success" title="PRCA: The Moment Landed" label="PRCA Event">
    <BentoCard
      icon={<MegaphoneIcon className="w-5 h-5" />}
      title="Presented to the Room"
      accent
      description={
        <>
          Stood up at the <Accent>PRCA AI Conference</Accent> and
          demoed MarcAI live — real reactions, real interest
        </>
      }
    />
    <BentoCard
      icon={<ChartBarIcon className="w-5 h-5" />}
      title="Market Validation"
      description={
        <>
          The audience <Bold>leaned in</Bold> — content automation
          in PR is a gap people feel but nobody&rsquo;s solved cleanly
        </>
      }
    />
    <BentoCard
      icon={<UserGroupIcon className="w-5 h-5" />}
      title="Sign-ups & Conversations"
      description={
        <>
          Collected early interest and <AccentWarm>real conversations</AccentWarm> with
          people who want to try MarcAI — not polite nods, genuine pull
        </>
      }
    />
    <BentoCard
      icon={<FireIcon className="w-5 h-5" />}
      title="Wendy Crushed It"
      description={
        <>
          Panel presence was strong — positioned <Bold>ChronoAI</Bold> as
          builders, not just talkers
        </>
      }
    />
  </BentoSlide>,

  // 4 — MarcAI Market Positioning
  <BentoSlide key="marcai-positioning" title="Where MarcAI Sits" label="Market Positioning">
    <BentoCard
      icon={<RocketLaunchIcon className="w-5 h-5" />}
      title="The Gap We're Filling"
      accent
      description={
        <>
          PR teams still do content manually — <Accent>MarcAI automates</Accent> the
          entire pipeline from brand intel to publish-ready output
        </>
      }
    />
    <BentoCard
      icon={<LightBulbIcon className="w-5 h-5" />}
      title="Not Another Chatbot"
      description={
        <>
          Four specialized agents working in sequence — it&rsquo;s a{" "}
          <Bold>system</Bold>, not a wrapper around an LLM
        </>
      }
    />
    <BentoCard
      icon={<EyeIcon className="w-5 h-5" />}
      title="What PRCA Showed Us"
      description={
        <>
          The market doesn&rsquo;t need convincing that AI helps —
          they need <AccentWarm>someone to build it right</AccentWarm>
        </>
      }
    />
    <BentoCard
      icon={<ChartBarIcon className="w-5 h-5" />}
      title="Next: Close the Loop"
      description={
        <>
          Take PRCA feedback, <Bold>iterate the agent flow</Bold>,
          and get a working beta into early users&rsquo; hands
        </>
      }
    />
  </BentoSlide>,

  // 5 — Section: Community
  <SectionSlide
    key="section-community"
    label="A Deeper Truth"
    title={<>People Yearn for <Keyword>Community</Keyword></>}
    number="02"
  />,

  // 6 — Community
  <BentoSlide key="community" title="Why Community Matters Now" label="Community">
    <BentoCard
      icon={<HeartIcon className="w-5 h-5" />}
      title="The Loneliness of Building"
      accent
      description={
        <>
          Builders, creators, founders — we&rsquo;re all heads-down in our
          own worlds. <Accent>Community breaks the isolation</Accent>
        </>
      }
    />
    <BentoCard
      icon={<ChatBubbleLeftRightIcon className="w-5 h-5" />}
      title="Tech Needs Tribe"
      description={
        <>
          The best ideas don&rsquo;t come from solo sessions —
          they come from <Bold>collisions</Bold> between people who care about the same things
        </>
      }
    />
    <BentoCard
      icon={<UserGroupIcon className="w-5 h-5" />}
      title="AI Community Is Still Early"
      description={
        <>
          Everyone&rsquo;s building with AI, few are building <AccentWarm>around</AccentWarm> it —
          there&rsquo;s a huge gap for genuine, human-first AI communities
        </>
      }
    />
    <BentoCard
      icon={<SparklesIcon className="w-5 h-5" />}
      title="First Bloom Is the Start"
      description={
        <>
          SoulGarden&rsquo;s soft launch isn&rsquo;t just a product demo —
          it&rsquo;s <Accent>seeding a community</Accent> of people who believe in something
        </>
      }
    />
  </BentoSlide>,

  // 7 — Section: SoulGarden 2.0
  <SectionSlide
    key="section-soulgarden"
    label="A New Chapter"
    title={<><KeywordWarm>SoulGarden</KeywordWarm> 2.0</>}
    number="03"
  />,

  // 8 — SoulGarden 2.0 Overview
  <BentoSlide key="soulgarden-v2" title="The 2.0 Evolution" label="SoulGarden">
    <BentoCard
      icon={<DevicePhoneMobileIcon className="w-5 h-5" />}
      title="Refined Experience"
      accent
      description={
        <>
          Prompts tuned, plant rendering polished — the{" "}
          <Accent>core loop feels delightful</Accent> now
        </>
      }
    />
    <BentoCard
      icon={<PaintBrushIcon className="w-5 h-5" />}
      title="New Visual Direction"
      description={
        <>
          Moving toward a <Bold>warmer, more organic</Bold> visual
          language — less tech, more soul
        </>
      }
    />
    <BentoCard
      icon={<EyeIcon className="w-5 h-5" />}
      title="Brand Feels Different"
      description={
        <>
          The <AccentWarm>First Bloom</AccentWarm> aesthetic is
          setting the tone — playful, alive, grounded
        </>
      }
    />
    <BentoCard
      icon={<SparklesIcon className="w-5 h-5" />}
      title="Ready for First Bloom"
      description={
        <>
          March 12 at MBFC — everything is converging toward
          that <Accent>one moment</Accent>
        </>
      }
    />
  </BentoSlide>,

  // 9 — Visual Direction Grid
  <VideoGridSlide
    key="soulgarden-visuals"
    title="New Visual Direction"
    label="SoulGarden 2.0"
    heroVideo="/images/sg2-visual-subtle.mp4"
    videos={[
      "/images/sg2-manifest.mp4",
      "/images/sg2-your.mp4",
      "/images/sg2-reality-1.mp4",
      "/images/sg2-reality-2.mp4",
      "/images/sg2-reality-3.mp4",
      "/images/sg2-reality-4.mp4",
      "/images/sg2-reality-5.mp4",
      "/images/sg2-reality-6.mp4",
      "/images/sg2-visual-still.mp4",
    ]}
  />,

  // 10 — Closing
  <QuoteSlide
    key="closing"
    quote="Build the product. Find your people. The rest follows."
    attribution="Week 10, 2026"
  />,
];

export default function Week10Presentation() {
  return <SlideShell slides={slides} title="Week 10: Mar 2 – Mar 8" />;
}
