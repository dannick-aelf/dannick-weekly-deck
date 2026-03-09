"use client";

import { SlideShell } from "@/components/slides/SlideShell";
import {
  TitleSlide,
  SectionSlide,
  BentoSlide,
  BentoCard,
  VideoGridSlide,
  LogoWallSlide,
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
  FilmIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CheckBadgeIcon,
  HandThumbUpIcon,
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
      title="Wendy on Stage"
      accent
      image="/images/prca-wendy-stage.png"
      compactImage
      description={
        <>
          Spoke on <Accent>AI automations, branding, and innovation</Accent> —
          then showcased MarcAI to a room of agencies, brands, and tech companies
        </>
      }
    />
    <BentoCard
      icon={<ChartBarIcon className="w-5 h-5" />}
      title="ChronoAI Was There"
      image="/images/prca-badge.png"
      compactImage
      description={
        <>
          Dannick Young, <Bold>Head AI Design</Bold> — representing
          ChronoAI at One Farrer Hotel, Singapore
        </>
      }
    />
    <BentoCard
      icon={<UserGroupIcon className="w-5 h-5" />}
      title="The Panel"
      image="/images/prca-panel-w10.png"
      compactImage
      description={
        <>
          <AccentWarm>2026: The Year of Being Human</AccentWarm> —
          real conversations about AI, branding, and innovation in PR
        </>
      }
    />
    <BentoCard
      icon={<FireIcon className="w-5 h-5" />}
      title="Among the Big Names"
      image="/images/prca-sponsors.png"
      compactImage
      description={
        <>
          A mix of PR agencies, brands, and tech companies in one room —
          <Bold>ChronoAI</Bold> showed up as builders, not just talkers
        </>
      }
    />
  </BentoSlide>,

  // 4 — MarcAI at PRCA
  <BentoSlide key="marcai-prca" title="MarcAI × PRCA" label="Product-Market Fit">
    <BentoCard
      icon={<RocketLaunchIcon className="w-5 h-5" />}
      title="We Promoted MarcAI"
      accent
      image="/images/marcai-splash-w10.png"
      description={
        <>
          Used PRCA as the stage to test <Accent>product-market fit</Accent> —
          put MarcAI in front of real agencies and brands
        </>
      }
    />
    <BentoCard
      icon={<LightBulbIcon className="w-5 h-5" />}
      title="The Product Spoke"
      image="/images/marcai-dashboard-w10.png"
      description={
        <>
          Brand Videos, Visual Design, AI UGC — a full{" "}
          <Bold>content engine</Bold> in one product
        </>
      }
    />
    <BentoCard
      icon={<ChartBarIcon className="w-5 h-5" />}
      title="Very Strong Response"
      description={
        <>
          Not polite nods — <AccentWarm>genuine pull</AccentWarm>.
          Companies asking when they can start, how to collaborate,
          and whether it works for agencies
        </>
      }
    />
    <BentoCard
      icon={<EyeIcon className="w-5 h-5" />}
      title="8 Companies Want In"
      description={
        <>
          From <Bold>ByteDance</Bold> to <Bold>Razer</Bold> — agencies, tech giants,
          and sustainability leaders want to <AccentWarm>work with us</AccentWarm>
        </>
      }
    />
  </BentoSlide>,

  // 5 — The Questions & The Answer
  <BentoSlide key="marcai-questions" title="What They Asked Us" label="MarcAI × PRCA">
    <BentoCard
      icon={<ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />}
      title={<>&ldquo;When can we start using MarcAI?&rdquo;</>}
      accent
      description={
        <>The demand is <Accent>now</Accent> — not future interest, immediate intent</>
      }
    />
    <BentoCard
      icon={<ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />}
      title={<>&ldquo;Can we collaborate?&rdquo;</>}
      description={
        <>Agencies and brands wanting to <Bold>partner</Bold>, not just buy</>
      }
    />
    <BentoCard
      icon={<ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />}
      title={<>&ldquo;How long did you take to build this?&rdquo;</>}
      description={
        <>The speed shocked them — <AccentWarm>built fast, built right</AccentWarm></>
      }
    />
    <BentoCard
      icon={<ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />}
      title={<>&ldquo;Is this suitable for agencies?&rdquo;</>}
      description={
        <>
          Proud to say — the answer to every single one of these is a{" "}
          <Accent>big fat YES</Accent>
        </>
      }
    />
  </BentoSlide>,

  // 6 — Logo Wall: Who Wants In
  <LogoWallSlide
    key="marcai-logos"
    title="Who Wants In"
    label="MarcAI × PRCA"
    logos={[
      { src: "/images/logo-bytedance.png", alt: "ByteDance" },
      { src: "/images/logo-razer.png", alt: "Razer" },
      { src: "/images/logo-comco.png", alt: "COMCO Southeast Asia" },
      { src: "/images/logo-precious.png", alt: "PRecious Communications" },
      { src: "/images/logo-horizon-quantum.png", alt: "Horizon Quantum" },
      { src: "/images/logo-midaspr.png", alt: "Midas PR Group" },
      { src: "/images/logo-climateUX.png", alt: "Climate UX", dark: true },
      { src: "/images/logo-notified.png", alt: "Notified" },
    ]}
    footnote={
      <>Companies that expressed interest to work with us or use MarcAI</>
    }
  />,

  // 7 — PRCA Value to ChronoAI
  <BentoSlide key="prca-value" title="What PRCA Gave ChronoAI" label="Value to the Company">
    <BentoCard
      icon={<ChartBarIcon className="w-5 h-5" />}
      title="Direct Leads"
      accent
      description={
        <>
          Not just interest — <Accent>real potential clients</Accent> for MarcAI
          who are ready to move
        </>
      }
    />
    <BentoCard
      icon={<FireIcon className="w-5 h-5" />}
      title="Industry Credibility"
      description={
        <>
          ChronoAI is now seen as a <Bold>serious player</Bold> —
          not a side project, a company that ships
        </>
      }
    />
    <BentoCard
      icon={<UserGroupIcon className="w-5 h-5" />}
      title="Strategic Relationships"
      description={
        <>
          Partnerships forming with agencies and brands —
          <AccentWarm>doors that didn&rsquo;t exist before</AccentWarm>
        </>
      }
    />
    <BentoCard
      icon={<CheckBadgeIcon className="w-5 h-5" />}
      title="Product Validation"
      description={
        <>
          We now <Accent>know</Accent> MarcAI solves a real problem —
          the market told us, not us telling the market
        </>
      }
    />
  </BentoSlide>,

  // 8 — Section: Community
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
      title="Tech Should Connect, Not Isolate"
      accent
      description={
        <>
          It&rsquo;s core to our mission — technology should bring people
          together. <Accent>Community is not a feature, it&rsquo;s the foundation</Accent>
        </>
      }
    />
    <BentoCard
      icon={<ChatBubbleLeftRightIcon className="w-5 h-5" />}
      title="People Don't Want Tools — They Want Belonging"
      description={
        <>
          PRCA proved it — the interest wasn&rsquo;t just about buying a product.
          People want to <Bold>belong to something</Bold>
        </>
      }
    />
    <BentoCard
      icon={<UserGroupIcon className="w-5 h-5" />}
      title="AI Community Is Still Early"
      description={
        <>
          Everyone&rsquo;s building with AI, few are building <AccentWarm>around</AccentWarm> it —
          there&rsquo;s a huge gap for genuine, human-first communities
        </>
      }
    />
    <BentoCard
      icon={<SparklesIcon className="w-5 h-5" />}
      title="SoulGarden Is the Proof"
      description={
        <>
          Daily rituals that create shared habits. Users who feel they belong.
          People who naturally <Accent>share and invite others</Accent> — that&rsquo;s community
        </>
      }
    />
  </BentoSlide>,

  // 7 — Community: The Opportunity
  <BentoSlide key="community-opportunity" title="The Opportunity" label="Community">
    <BentoCard
      icon={<PaintBrushIcon className="w-5 h-5" />}
      title="Creatives Need Community Too"
      accent
      description={
        <>
          Tech people have hackathons. Designers and creatives?{" "}
          <Accent>Almost nothing</Accent>. There&rsquo;s no equivalent gathering
          that brings creative minds together in the AI era
        </>
      }
    />
    <BentoCard
      icon={<LightBulbIcon className="w-5 h-5" />}
      title="AI Is Reshaping Creative Work"
      description={
        <>
          Product designers and creatives are navigating a shift —
          community helps them <Bold>learn, adapt, and stay relevant</Bold> together
        </>
      }
    />
    <BentoCard
      icon={<UserGroupIcon className="w-5 h-5" />}
      title="Workshops & Events"
      description={
        <>
          Can workshops and events bring people together?{" "}
          <AccentWarm>Absolutely</AccentWarm> — and ChronoAI can be the
          one to host, connect, and lead that space
        </>
      }
    />
    <BentoCard
      icon={<SparklesIcon className="w-5 h-5" />}
      title="ChronoAI as the Hub"
      description={
        <>
          We build the products, we host the events, we grow the tribe —
          <Accent>community becomes our moat</Accent>
        </>
      }
    />
  </BentoSlide>,

  // — Community Value to ChronoAI
  <BentoSlide key="community-value" title="What Community Gives ChronoAI" label="Value to the Company">
    <BentoCard
      icon={<MegaphoneIcon className="w-5 h-5" />}
      title="Brand Positioning"
      accent
      description={
        <>
          ChronoAI becomes the <Accent>go-to name</Accent> in creative AI —
          the company that doesn&rsquo;t just build tools, but brings people together
        </>
      }
    />
    <BentoCard
      icon={<UserGroupIcon className="w-5 h-5" />}
      title="Organic User Acquisition"
      description={
        <>
          Community members become users. Users become advocates.{" "}
          <Bold>Growth that compounds</Bold> without paid ads
        </>
      }
    />
    <BentoCard
      icon={<HeartIcon className="w-5 h-5" />}
      title="Retention Through Belonging"
      description={
        <>
          People stay because they <AccentWarm>belong</AccentWarm>, not just
          because of features — that&rsquo;s the stickiest product you can build
        </>
      }
    />
    <BentoCard
      icon={<SparklesIcon className="w-5 h-5" />}
      title="SoulGarden as Living Proof"
      description={
        <>
          A product that <Accent>already embodies community</Accent> —
          shared rituals, shared growth, shared meaning
        </>
      }
    />
  </BentoSlide>,

  // — Section: SoulGarden 2.0
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
          Moving toward a <Bold>fun, playful</Bold> visual
          language — less tech, more soul
        </>
      }
    />
    <BentoCard
      icon={<FilmIcon className="w-5 h-5" />}
      title="In-House Production"
      description={
        <>
          Content production is <AccentWarm>in full swing</AccentWarm> —
          creating marketing assets for user acquisition
        </>
      }
    />
    <BentoCard
      icon={<SparklesIcon className="w-5 h-5" />}
      title="UI/UX Improvements"
      description={
        <>
          Every screen refined to feel inline with the <Accent>new branding</Accent> —
          scenic backgrounds, chrome icons, improved experience
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

  // 10 — SoulGarden 2.0 UI Upgrades
  <BentoSlide key="sg2-ui" title="The New Experience" label="SoulGarden 2.0 UI" cols={4}>
    <BentoCard
      icon={<SparklesIcon className="w-5 h-5" />}
      title="Seed Phase"
      accent
      image="/images/sg2-ui-seed.png"
      description={
        <>
          <Accent>Scenic backgrounds</Accent> replace flat white —
          every phase now feels alive and immersive
        </>
      }
    />
    <BentoCard
      icon={<SparklesIcon className="w-5 h-5" />}
      title="Sprout Phase"
      image="/images/sg2-ui-sprout.png"
      description={
        <>
          <Bold>Chrome icons</Bold> with metallic finish —
          a premium, tactile feel across all growth stages
        </>
      }
    />
    <BentoCard
      icon={<SparklesIcon className="w-5 h-5" />}
      title="Growing Phase"
      image="/images/sg2-ui-growing.png"
      description={
        <>
          <AccentWarm>White background removed</AccentWarm> — the plant lives
          inside its world now, not on top of a card
        </>
      }
    />
    <BentoCard
      icon={<SparklesIcon className="w-5 h-5" />}
      title="Fully Bloomed"
      image="/images/sg2-ui-bloomed.png"
      description={
        <>
          The full journey: Seed → Sprout → Growing → <Accent>Bloom</Accent>.
          Every stage is a visual reward
        </>
      }
    />
  </BentoSlide>,

  // 11 — Closing
  <QuoteSlide
    key="closing"
    quote="Build the product. Find your people. The rest follows."
    attribution="Week 10, 2026"
  />,
];

export default function Week10Presentation() {
  return <SlideShell slides={slides} title="Week 10: Mar 2 – Mar 8" />;
}
