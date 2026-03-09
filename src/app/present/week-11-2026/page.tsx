"use client";

import { SlideShell } from "@/components/slides/SlideShell";
import {
  TitleSlide,
  SectionSlide,
  BentoSlide,
  BentoCard,
  QuoteSlide,
  Bold,
  Accent,
  AccentWarm,
  Keyword,
  KeywordWarm,
} from "@/components/slides/SlideElements";
import {
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  ServerStackIcon,
  CommandLineIcon,
  KeyIcon,
  GlobeAltIcon,
  FilmIcon,
  UserGroupIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  BugAntIcon,
  CheckBadgeIcon,
  MegaphoneIcon,
  ChatBubbleLeftRightIcon,
  LightBulbIcon,
  SparklesIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const slides = [
  // 1 — Cover
  <TitleSlide
    key="cover"
    accent="Week 11 · Mar 9 – Mar 15, 2026"
    title={<><Keyword>Sprint Zero</Keyword> & the <KeywordWarm>Groundwork</KeywordWarm></>}
    subtitle="MarcAI architecture, SoulGarden growth, Riteset polish, community strategy"
  />,

  // 2 — Section: MarcAI
  <SectionSlide
    key="section-marcai"
    label="The Foundation"
    title={<><Keyword>MarcAI</Keyword> Sprint Zero</>}
    number="01"
  />,

  // 3 — Sprint Zero: What & Why
  <BentoSlide key="sprint-zero" title="Sprint Zero: No Code, All Clarity" label="MarcAI SaaS">
    <BentoCard
      icon={<RocketLaunchIcon className="w-5 h-5" />}
      title="Engineers Have the PRD"
      accent
      description={
        <>
          The 4-agent pipeline, user flows, expected outputs, timing — the team
          is <Accent>getting up to speed</Accent> on everything
        </>
      }
    />
    <BentoCard
      icon={<WrenchScrewdriverIcon className="w-5 h-5" />}
      title="Why No Building Yet?"
      description={
        <>
          This week is purely about <Bold>removing ambiguity</Bold> — so when
          code starts flowing next week, everyone knows exactly what they&rsquo;re building
        </>
      }
    />
    <BentoCard
      icon={<ServerStackIcon className="w-5 h-5" />}
      title="The Goal"
      description={
        <>
          Make every decision, get every piece of access sorted —{" "}
          <AccentWarm>zero blockers</AccentWarm> when the Discovery build begins
        </>
      }
    />
    <BentoCard
      icon={<CheckBadgeIcon className="w-5 h-5" />}
      title="What This Enables"
      description={
        <>
          MarcAI&rsquo;s path to <Accent>first paying clients</Accent> accelerates
          when the team builds with clarity, not guesswork
        </>
      }
    />
  </BentoSlide>,

  // 4 — MarcAI: Community & Aevatar Opportunity
  <BentoSlide key="marcai-community" title="The Bigger Picture" label="MarcAI × Community">
    <BentoCard
      icon={<UserGroupIcon className="w-5 h-5" />}
      title="MarcAI as a Community Builder"
      accent
      description={
        <>
          MarcAI isn&rsquo;t just a product — it&rsquo;s a chance to{" "}
          <Accent>build communities</Accent> around AI-powered content creation
        </>
      }
    />
    <BentoCard
      icon={<RocketLaunchIcon className="w-5 h-5" />}
      title="Showcase Aevatar"
      description={
        <>
          MarcAI is a live case study for the{" "}
          <Bold>aevatar platform</Bold> — proof that the agent infrastructure works at product scale
        </>
      }
    />
    <BentoCard
      icon={<PaintBrushIcon className="w-5 h-5" />}
      title="Across All Communities"
      description={
        <>
          Non-tech creatives, designers, AI builders, tech communities —{" "}
          <AccentWarm>MarcAI speaks to all of them</AccentWarm>
        </>
      }
    />
    <BentoCard
      icon={<LightBulbIcon className="w-5 h-5" />}
      title="Two Birds, One Product"
      description={
        <>
          Grow MarcAI&rsquo;s user base while giving aevatar{" "}
          <Accent>real-world visibility</Accent> — community and product in one move
        </>
      }
    />
  </BentoSlide>,

  // 7 — Section: SoulGarden
  <SectionSlide
    key="section-soulgarden"
    label="Growing the Garden"
    title={<><KeywordWarm>SoulGarden</KeywordWarm> User Acquisition</>}
    number="02"
  />,

  // 7 — SoulGarden Marketing
  <BentoSlide key="sg-marketing" title="200 Users is the Target" label="SoulGarden Marketing">
    <BentoCard
      icon={<FilmIcon className="w-5 h-5" />}
      title="In-House Production"
      accent
      description={
        <>
          Content production is <Accent>in full swing</Accent> — video, visual,
          and copy assets being created for the campaign
        </>
      }
    />
    <BentoCard
      icon={<MegaphoneIcon className="w-5 h-5" />}
      title="Organic Distribution"
      description={
        <>
          Shipping 5+ assets across social channels —
          driving toward <Bold>200 new user sign-ups</Bold>
        </>
      }
    />
    <BentoCard
      icon={<UserGroupIcon className="w-5 h-5" />}
      title="Validating Product-Market Fit"
      description={
        <>
          These aren&rsquo;t vanity metrics — each sign-up is a{" "}
          <AccentWarm>signal of demand</AccentWarm> for SoulGarden 2.0
        </>
      }
    />
    <BentoCard
      icon={<SparklesIcon className="w-5 h-5" />}
      title="Building the Growth Engine"
      description={
        <>
          Establishing the <Accent>organic growth loop</Accent> —
          community members become users, users become advocates
        </>
      }
    />
  </BentoSlide>,

  // 8 — Section: Riteset
  <SectionSlide
    key="section-riteset"
    label="Polish & Ship"
    title={<><Keyword>Riteset</Keyword> v2.0</>}
    number="03"
  />,

  // 9 — Riteset Improvements
  <BentoSlide key="riteset" title="UI/UX Improvements & Bug Testing" label="Riteset v2.0">
    <BentoCard
      icon={<PaintBrushIcon className="w-5 h-5" />}
      title="Design Improvements"
      accent
      description={
        <>
          v2.0 UI/UX updates shipping to production —{" "}
          <Accent>refining the experience</Accent> across all core flows
        </>
      }
    />
    <BentoCard
      icon={<BugAntIcon className="w-5 h-5" />}
      title="End-to-End Bug Testing"
      description={
        <>
          Testing every core flow to catch and resolve{" "}
          <Bold>all critical bugs</Bold> before the next release
        </>
      }
    />
    <BentoCard
      icon={<DevicePhoneMobileIcon className="w-5 h-5" />}
      title="User Satisfaction"
      description={
        <>
          These improvements directly address user pain points —{" "}
          <AccentWarm>better experience, better retention</AccentWarm>
        </>
      }
    />
    <BentoCard
      icon={<CheckBadgeIcon className="w-5 h-5" />}
      title="Release Ready"
      description={
        <>
          The goal is clear: ship to production with{" "}
          <Accent>zero critical bugs</Accent> in core user flows
        </>
      }
    />
  </BentoSlide>,

  // 10 — Closing
  <QuoteSlide
    key="closing"
    quote="Remove every blocker. Start every engine. The build begins next week."
    attribution="Week 11, 2026"
  />,
];

export default function Week11Presentation() {
  return <SlideShell slides={slides} title="Week 11: Mar 9 – Mar 15" />;
}
