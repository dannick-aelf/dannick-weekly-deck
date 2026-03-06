"use client";

import { SlideShell } from "@/components/slides/SlideShell";
import {
  TitleSlide,
  SectionSlide,
  BentoSlide,
  BentoCard,
  VideoSlide,
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
  VideoCameraIcon,
  FilmIcon,
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

  // 9 — Manifest Video
  <VideoSlide
    key="soulgarden-manifest"
    title="Manifest Your Reality"
    label="SoulGarden 2.0"
    video="/images/sg2-manifest.mp4"
  >
    <BentoCard
      icon={<VideoCameraIcon className="w-5 h-5" />}
      title="Brand Video: Manifest"
      accent
      description={
        <>
          The new <Accent>SoulGarden anthem</Accent> — setting the emotional
          tone for everything 2.0 is about
        </>
      }
    />
    <BentoCard
      icon={<SparklesIcon className="w-5 h-5" />}
      title="AI Manifestation, Visualized"
      description={
        <>
          Not just an app — a <Bold>feeling</Bold>, a world you step into
        </>
      }
    />
  </VideoSlide>,

  // 10 — Visual Direction: Reality Series
  <BentoSlide key="soulgarden-visuals-1" title="The Reality Series" label="Visual Direction">
    <BentoCard
      icon={<FilmIcon className="w-5 h-5" />}
      title="Reality 1"
      accent
      span={1}
      video="/images/sg2-reality-1.mp4"
      description={<>Organic motion — <Accent>nature meets intention</Accent></>}
    />
    <BentoCard
      icon={<FilmIcon className="w-5 h-5" />}
      title="Reality 2"
      span={1}
      video="/images/sg2-reality-2.mp4"
      description={<>Ethereal landscapes of the <Bold>inner world</Bold></>}
    />
    <BentoCard
      icon={<FilmIcon className="w-5 h-5" />}
      title="Reality 3"
      span={1}
      video="/images/sg2-reality-3.mp4"
      description={<>Subtle, <AccentWarm>dreamlike</AccentWarm> textures</>}
    />
    <BentoCard
      icon={<FilmIcon className="w-5 h-5" />}
      title="Reality 4"
      span={1}
      video="/images/sg2-reality-4.mp4"
      description={<>Where <Bold>manifestation</Bold> takes form</>}
    />
  </BentoSlide>,

  // 11 — Visual Direction: More Reality + Art Direction
  <BentoSlide key="soulgarden-visuals-2" title="Art Direction Exploration" label="Visual Direction">
    <BentoCard
      icon={<FilmIcon className="w-5 h-5" />}
      title="Reality 5"
      accent
      span={1}
      video="/images/sg2-reality-5.mp4"
      description={<>Depth and <Accent>presence</Accent></>}
    />
    <BentoCard
      icon={<FilmIcon className="w-5 h-5" />}
      title="Reality 6"
      span={1}
      video="/images/sg2-reality-6.mp4"
      description={<>The world <Bold>responds</Bold> to you</>}
    />
    <BentoCard
      icon={<EyeIcon className="w-5 h-5" />}
      title="Subtle Motion"
      span={1}
      video="/images/sg2-visual-subtle.mp4"
      description={<>Gentle movement — <AccentWarm>alive but calm</AccentWarm></>}
    />
    <BentoCard
      icon={<PaintBrushIcon className="w-5 h-5" />}
      title="Still Frame"
      span={1}
      video="/images/sg2-visual-still.mp4"
      description={<>The <Bold>stillness</Bold> between breaths</>}
    />
  </BentoSlide>,

  // 12 — Your Vision
  <VideoSlide
    key="soulgarden-your"
    title="Your SoulGarden"
    label="SoulGarden 2.0"
    video="/images/sg2-your.mp4"
  >
    <BentoCard
      icon={<SparklesIcon className="w-5 h-5" />}
      title="It's Yours"
      accent
      description={
        <>
          Every garden is <Accent>unique</Accent> — shaped by your
          intentions, your energy, your story
        </>
      }
    />
    <BentoCard
      icon={<HeartIcon className="w-5 h-5" />}
      title="March 12: First Bloom"
      description={
        <>
          The soft launch brings it all together — <Bold>product,
          community, vision</Bold>
        </>
      }
    />
  </VideoSlide>,

  // 13 — Closing
  <QuoteSlide
    key="closing"
    quote="Build the product. Find your people. The rest follows."
    attribution="Week 10, 2026"
  />,
];

export default function Week10Presentation() {
  return <SlideShell slides={slides} title="Week 10: Mar 2 – Mar 8" />;
}
