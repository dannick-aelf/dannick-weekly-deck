"use client";

import { SlideShell } from "@/components/slides/SlideShell";
import {
  TitleSlide,
  SectionSlide,
  BentoSlide,
  BentoCard,
  SplitSlide,
  ImageSlide,
  VideoSlide,
  QuoteSlide,
  Bold,
  Accent,
  Keyword,
} from "@/components/slides/SlideElements";
import {
  AcademicCapIcon,
  SparklesIcon,
  SwatchIcon,
  DevicePhoneMobileIcon,
  MegaphoneIcon,
  PhotoIcon,
  BoltIcon,
  CpuChipIcon,
  VideoCameraIcon,
  RocketLaunchIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  LightBulbIcon,
  ArrowPathIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  CodeBracketIcon,
  BeakerIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";

const slides = [
  // 1 — Cover
  <TitleSlide
    key="cover"
    accent="Week 9 · Feb 23 – Mar 1, 2026"
    title={<>This Week in <Keyword>Motion</Keyword></>}
    subtitle="Shipping products, shaping brands, chasing ideas"
  />,

  // 2 — Section: This Week
  <SectionSlide
    key="section-this-week"
    label="The Highlights"
    title={<><Keyword>Four</Keyword> Things That Moved the Needle</>}
    number="01"
  />,

  // 3 — Skills: Discovery
  <BentoSlide key="skills-1" title="Levelling Up the Toolkit" label="Skills">
    <BentoCard
      icon={<AcademicCapIcon className="w-5 h-5" />}
      title="Deep-diving into Skills"
      accent
      image="/images/skillsmp.png"
      description={
        <>
          Exploring <Accent>skillsmp.com</Accent> to find the right skills for
          generating brandkits and design content — faster, smarter
        </>
      }
    />
    <BentoCard
      icon={<SparklesIcon className="w-5 h-5" />}
      title="AI-Powered Copy & Guidelines"
      image="/images/claude-skills-hero.png"
      description={
        <>
          Testing <Bold>Claude Skills</Bold> for micro-copy, brand voice, and
          guideline generation — seeing real potential here
        </>
      }
    />
  </BentoSlide>,

  // 4 — Skills: Application
  <BentoSlide key="skills-2" title="Putting Skills to Work" label="Skills">
    <BentoCard
      icon={<VideoCameraIcon className="w-5 h-5" />}
      title="Automating Brand Videos"
      accent
      span={2}
      image="/images/remotion-skill.png"
      description={
        <>
          Discovered and building with <Accent>Claude Code + Remotion</Accent>{" "}
          — a skill that automates brand video production end to end
        </>
      }
    />
    <BentoCard
      icon={<SwatchIcon className="w-5 h-5" />}
      title="Streamlining Brand Identity"
      span={2}
      image="/images/soulgarden-brandkit.png"
      description={
        <>
          Building reusable skill workflows so every new product can spin up a{" "}
          <Accent>brandkit & guidelines</Accent> in a fraction of the time it
          takes today
        </>
      }
    />
  </BentoSlide>,

  // 5 — SoulGarden Launch Prep
  <ImageSlide
    key="soulgarden"
    title="Growing SoulGarden"
    label="SoulGarden"
    image="/images/soulgarden-firstbloom.png"
  >
    <BentoCard
      icon={<DevicePhoneMobileIcon className="w-5 h-5" />}
      title="2.0 Getting Polished"
      accent
      description={
        <>
          Fine-tuning prompts and nailing the plant image rendering for a{" "}
          <Accent>smooth, delightful experience</Accent>
        </>
      }
    />
    <BentoCard
      icon={<MegaphoneIcon className="w-5 h-5" />}
      title="Launch Prep with Marketing"
      description={
        <>
          Teaming up with <Bold>marketing</Bold> to get everything ready for
          the soft launch moment
        </>
      }
    />
    <BentoCard
      icon={<BoltIcon className="w-5 h-5" />}
      title="The Vision: Auto-Generated Assets"
      description={
        <>
          Connecting <Accent>Skills + NanoBanana</Accent> to auto-generate
          event posters — one prompt, done
        </>
      }
    />
  </ImageSlide>,

  // 6 — SoulGarden Soft Launch
  <SplitSlide
    key="soulgarden-launch"
    title="First Bloom: Soft Launch"
    label="SoulGarden"
    image="/images/soulgarden-softlaunch.png"
  >
    <BentoCard
      icon={<RocketLaunchIcon className="w-5 h-5" />}
      title="Intimate Launch Party"
      accent
      description={
        <>
          Hosting <Accent>First Bloom</Accent> — a fresh look into
          AI Manifestation, March 12 at MBFC
        </>
      }
    />
    <BentoCard
      icon={<UserGroupIcon className="w-5 h-5" />}
      title="6–8 Live Testers"
      description={
        <>
          Handpicking <Bold>real users</Bold> to stress-test SoulGarden
          2.0 and give us raw, unfiltered feedback
        </>
      }
    />
    <BentoCard
      icon={<SparklesIcon className="w-5 h-5" />}
      title="Organic Hype"
      description={
        <>
          First testers become first <Accent>advocates</Accent> —
          creating buzz from the ground up
        </>
      }
    />
  </SplitSlide>,

  // 6 — MarcAI: The Product
  <BentoSlide key="marcai-1" title="Introducing MarcAI" label="MarcAI">
    <BentoCard
      icon={<CpuChipIcon className="w-5 h-5" />}
      title="A New SaaS is Born"
      accent
      image="/images/marcai-dashboard.png"
      description={
        <>
          Building <Accent>MarcAI</Accent> with Wendy — a{" "}
          <Bold>4-agent system</Bold> that automates content generation end to
          end
        </>
      }
    />
    <BentoCard
      icon={<LightBulbIcon className="w-5 h-5" />}
      title="Chat-Driven Brand Intel"
      image="/images/marcai-chat.png"
      description={
        <>
          A conversational interface that <Accent>scrapes your brand</Accent>,
          pulls competitor data, and generates a full analysis
        </>
      }
    />
  </BentoSlide>,

  // 7 — MarcAI: Next Steps
  <VideoSlide key="marcai-2" title="MarcAI Teaser" label="MarcAI" video="/images/marcai-teaser.mp4" poster="/images/marcai-teaser-thumb.jpg">
    <BentoCard
      icon={<VideoCameraIcon className="w-5 h-5" />}
      title="Teaser Ready"
      accent
      description={
        <>
          First build is done, and we have a <Accent>teaser video</Accent>{" "}
          ready to drop at PRCA next week
        </>
      }
    />
    <BentoCard
      icon={<RocketLaunchIcon className="w-5 h-5" />}
      title="Testing the Waters"
      description={
        <>
          The goal: put it in front of people and see if the{" "}
          <Bold>market pulls</Bold>
        </>
      }
    />
  </VideoSlide>,

  // 6 — PRCA
  <BentoSlide
    key="prca"
    title="PRCA Conference"
    label="On the Calendar"
  >
    <BentoCard
      icon={<CalendarDaysIcon className="w-5 h-5" />}
      title="Hitting the Stage"
      accent
      image="/images/prca-banner.png"
      description={
        <>
          Next Wednesday — presenting at this <Accent>AI conference</Accent>,
          showing what we&rsquo;ve been cooking
        </>
      }
    />
    <BentoCard
      icon={<UserGroupIcon className="w-5 h-5" />}
      title="Wendy on the Panel"
      image="/images/prca-panel.png"
      description={
        <>
          Walking out with at least <Bold>10 test users</Bold> who want to try
          MarcAI
        </>
      }
    />
    <BentoCard
      icon={<LightBulbIcon className="w-5 h-5" />}
      title="We're Invited"
      image="/images/prca-invite-chat.png"
      description={
        <>
          Wendy got us extra passes — heading there together to{" "}
          <Bold>represent ChronoAI</Bold>
        </>
      }
    />
    <BentoCard
      icon={<RocketLaunchIcon className="w-5 h-5" />}
      title="Reading the Room"
      description={
        <>
          Understanding how the industry thinks about{" "}
          <Bold>design structure</Bold> and where AI fits in
        </>
      }
    />
  </BentoSlide>,

  // 7 — Section: Next Week
  <SectionSlide
    key="section-next-week"
    label="Looking Ahead"
    title={<>What's on <Keyword>Deck</Keyword></>}
    number="02"
  />,

  // 8 — Next Week (1)
  <BentoSlide key="next-week-1" title="The Plan" label="Next Week">
    <BentoCard
      icon={<ChartBarIcon className="w-5 h-5" />}
      title="PRCA Day"
      accent
      description={
        <>
          Present the MarcAI teaser, collect real feedback,{" "}
          <Accent>lock in early users</Accent>, and get investors
        </>
      }
    />
    <BentoCard
      icon={<MegaphoneIcon className="w-5 h-5" />}
      title="Plan the Hackathon"
      description={
        <>
          Sit down with the <Bold>marketing team</Bold> to plan the upcoming
          hackathon event — logistics, format, and promotion
        </>
      }
    />
    <BentoCard
      icon={<DevicePhoneMobileIcon className="w-5 h-5" />}
      title="SoulGarden v2.0 Improvements"
      description={
        <>
          Continue refining the <Accent>2.0 experience</Accent> — polish
          interactions, squash bugs, prep for soft launch
        </>
      }
    />
    <BentoCard
      icon={<WrenchScrewdriverIcon className="w-5 h-5" />}
      title="Riteset v1.20 Improvements"
      description={
        <>
          Ship updates for <Bold>Riteset v1.20</Bold> — tighten up the
          product for the next release
        </>
      }
    />
  </BentoSlide>,

  // 8b — Next Week (2)
  <BentoSlide key="next-week-2" title="Building the Engine" label="Next Week">
    <BentoCard
      icon={<BeakerIcon className="w-5 h-5" />}
      title="Test & Implement Skills for MarcAI"
      accent
      description={
        <>
          Identify and stress-test <Accent>skills</Accent> that plug
          directly into the MarcAI SaaS — making the agents smarter
        </>
      }
    />
    <BentoCard
      icon={<PuzzlePieceIcon className="w-5 h-5" />}
      title="Lock Down the MarcAI Flow"
      description={
        <>
          Use <Bold>PRCA feedback</Bold> to finalize the agent flow —
          nail the user journey and content generation pipeline
        </>
      }
    />
    <BentoCard
      icon={<ArrowPathIcon className="w-5 h-5" />}
      title="Ship What We Learn"
      description={
        <>
          Take PRCA feedback and <Bold>iterate fast</Bold> on MarcAI
        </>
      }
    />
    <BentoCard
      icon={<CodeBracketIcon className="w-5 h-5" />}
      title="Skills → Production"
      description={
        <>
          Lock in the <Bold>brandkit skill</Bold> workflows — ready for
          real use across products
        </>
      }
    />
  </BentoSlide>,

  // 9 — Closing
  <QuoteSlide
    key="closing"
    quote="Stay curious, build boldly."
    attribution="Week 9, 2026"
  />,
];

export default function Week9Presentation() {
  return <SlideShell slides={slides} title="Week 9: Feb 23 – Mar 1" />;
}
