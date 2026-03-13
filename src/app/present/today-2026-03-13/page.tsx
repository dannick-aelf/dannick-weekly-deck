"use client";

import { type CSSProperties, type ReactNode } from "react";
import { motion } from "framer-motion";
import { SlideShell } from "@/components/slides/SlideShell";
import {
  BentoCard,
  QuoteSlide,
  Accent,
  Bold,
} from "@/components/slides/SlideElements";
import {
  MegaphoneIcon,
  CalendarDaysIcon,
  FilmIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  CircleStackIcon,
  SwatchIcon,
  PhotoIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

function FullBleedTitleSlide({
  title,
  subtitle,
  accent,
  footer,
}: {
  title: ReactNode;
  subtitle?: string;
  accent?: string;
  footer?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full h-full px-0">
      {accent && (
        <span className="text-neon-cyan text-sm font-medium tracking-[0.2em] uppercase mb-6">
          {accent}
        </span>
      )}
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-text-primary leading-[0.95] tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg sm:text-xl text-text-secondary mt-6 max-w-md">
          {subtitle}
        </p>
      )}
      {footer && <div className="mt-8">{footer}</div>}
    </div>
  );
}

function FullBleedSectionSlide({
  label,
  title,
  number,
}: {
  label?: string;
  title: ReactNode;
  number?: string;
}) {
  return (
    <div className="flex flex-col items-start justify-center w-full h-full px-0 max-w-7xl mx-auto">
      {number && (
        <span className="text-[120px] sm:text-[160px] font-black text-white/[0.04] leading-none absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none">
          {number}
        </span>
      )}
      {label && (
        <span className="text-neon-cyan text-xs font-medium tracking-[0.2em] uppercase mb-4">
          {label}
        </span>
      )}
      <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-text-primary leading-[1.05] tracking-tight">
        {title}
      </h2>
    </div>
  );
}

function FullBleedBentoSlide({
  title,
  label,
  children,
}: {
  title: string;
  label?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center w-full min-h-full px-0 py-12 max-w-7xl mx-auto">
      <div className="mb-8">
        {label && (
          <span className="text-neon-cyan text-xs font-medium tracking-[0.2em] uppercase block mb-2">
            {label}
          </span>
        )}
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
          {title}
        </h2>
      </div>
      <div className="grid gap-3 sm:gap-4 grid-cols-2">
        {children}
      </div>
    </div>
  );
}

function TopicHeroSplitSlide({
  label,
  title,
  image,
  imageClassName,
  children,
}: {
  label?: string;
  title: ReactNode;
  image: string;
  imageClassName?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center w-full min-h-full px-0 py-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div className="flex flex-col">
          {label && (
            <span className="text-neon-cyan text-xs font-medium tracking-[0.2em] uppercase block mb-4">
              {label}
            </span>
          )}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-[1.02] tracking-tight mb-6">
            {title}
          </h2>
          <div className="flex flex-col gap-3">
            {children}
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden border border-wire-subtle bg-surface-raised h-[540px] md:h-[640px]">
          <img
            src={image}
            alt="Hero portrait"
            className={`w-full h-full object-cover object-center ${imageClassName || ""}`}
          />
        </div>
      </div>
    </div>
  );
}

function ProgressBarCard() {
  return (
    <div className="col-span-2 rounded-2xl border border-neon-cyan/20 bg-neon-cyan/[0.06] p-5 sm:p-6">
      <div className="flex items-end justify-between gap-4 mb-4">
        <div>
          <p className="text-neon-cyan text-xs font-medium tracking-[0.2em] uppercase mb-2">
            Content Calendar Progress
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold text-text-primary">
            Week 1 of 4 is Complete
          </h3>
        </div>
        <div className="text-right">
          <p className="text-3xl sm:text-4xl font-bold text-neon-cyan leading-none">
            25%
          </p>
          <p className="text-xs text-text-muted mt-1">4-week plan</p>
        </div>
      </div>

      <div className="h-4 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-neon-cyan"
          initial={{ width: 0 }}
          animate={{ width: "25%" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div className="grid grid-cols-4 gap-2 mt-3">
        {["Week 1", "Week 2", "Week 3", "Week 4"].map((label, index) => (
          <div
            key={label}
            className={`rounded-lg px-3 py-2 text-xs text-center border ${
              index === 0
                ? "border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan"
                : "border-wire-subtle bg-white/[0.03] text-text-muted"
            }`}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

function SocialVideoSlide({
  title,
  label,
  videos,
}: {
  title: string;
  label?: string;
  videos: { src: string; title: string }[];
}) {
  return (
    <div className="flex flex-col justify-center w-full min-h-full px-0 py-8 max-w-[92rem] mx-auto">
      <div className="mb-4">
        {label && (
          <span className="text-neon-cyan text-xs font-medium tracking-[0.2em] uppercase block mb-2">
            {label}
          </span>
        )}
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-start">
        {videos.map((video) => (
          <div key={video.src} className="flex flex-col gap-2">
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-wire-subtle bg-black">
              <video
                src={video.src}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl border border-wire-subtle bg-surface-raised px-4 py-2.5">
              <p className="text-sm font-medium text-text-primary">{video.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CarouselRowSlide({
  title,
  label,
  description,
  slides,
}: {
  title: string;
  label?: string;
  description?: ReactNode;
  slides: string[];
}) {
  const columns = slides.length;

  return (
    <div className="flex flex-col justify-center w-full min-h-full px-0 py-8 max-w-[110rem] mx-auto">
      <div className="mb-4">
        {label && (
          <span className="text-neon-cyan text-xs font-medium tracking-[0.2em] uppercase block mb-2">
            {label}
          </span>
        )}
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="text-sm sm:text-base text-text-secondary mt-3 max-w-3xl">
            {description}
          </p>
        )}
      </div>

      <div
        className="grid gap-1.5 sm:gap-2"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {slides.map((src, index) => (
          <div
            key={src}
            className="rounded-xl overflow-hidden border border-wire-subtle bg-surface-raised"
          >
            <div className="relative aspect-[4/5] bg-black">
              <img
                src={src}
                alt={`Carousel slide ${index + 1}`}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const slides = [
  // 1 - Cover
  <FullBleedTitleSlide
    key="cover"
    accent="Friday · Mar 13, 2026"
    title={
      <>
        What <span className="text-neon-cyan italic font-light" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>Moved</span> This Week
      </>
    }
    subtitle="SoulGarden acquisition, a centralised survey system, and the new Codex + Sora workflow"
    footer={
      <div className="rounded-2xl overflow-hidden border border-wire-subtle bg-surface-raised w-[280px] sm:w-[340px] mx-auto">
        <img
          src="/images/portraits/sg-user-acquisition-detail.png"
          alt="Weekly mood visual"
          className="w-full h-44 object-cover object-center"
        />
      </div>
    }
  />,

  // 2 - Topic title: SoulGarden
  <TopicHeroSplitSlide
    key="section-soulgarden"
    label="Growth Engine"
    image="/images/portraits/sg-user-acquisition-hero.png"
    imageClassName="object-[center_18%]"
    title={
      <>
        <span className="text-neon-cyan italic font-light" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>SoulGarden</span> User Acquisition
      </>
    }
  >
    <BentoCard
      icon={<ChartBarIcon className="w-5 h-5" />}
      title="This Week's Focus"
      accent
      description={
        <>
          <Accent>SoulGarden user acquisition</Accent> became one of the clearest
          focus areas this week, from content planning to assets ready for distribution
        </>
      }
    />
    <BentoCard
      icon={<MegaphoneIcon className="w-5 h-5" />}
      title="From Aesthetic to Engine"
      description={
        <>
          The visual direction is not just branding — it is helping shape a{" "}
          <Bold>recognizable acquisition story</Bold> for SoulGarden
        </>
      }
    />
  </TopicHeroSplitSlide>,

  // 3 - SoulGarden acquisition
  <FullBleedBentoSlide
    key="soulgarden-campaign"
    title="SoulGarden User Acquisition Campaign"
    label="SoulGarden"
  >
    <ProgressBarCard />
    <BentoCard
      icon={<ChartBarIcon className="w-5 h-5" />}
      title="25% Through the Plan"
      accent
      description={
        <>
          The campaign is at <Accent>25% progress</Accent> based on the content
          calendar — momentum is there, and the structure is already in motion
        </>
      }
    />
    <BentoCard
      icon={<CalendarDaysIcon className="w-5 h-5" />}
      title="Content Calendar is Leading"
      description={
        <>
          The calendar is acting as the <Bold>execution backbone</Bold> —
          keeping output aligned, paced, and easy to track week by week
        </>
      }
    />
    <BentoCard
      icon={<FilmIcon className="w-5 h-5" />}
      title="Content Has Been Shipped"
      description={
        <>
          The <Accent>content created this week</Accent> has already been
          shipped to the marketing team — three videos and two carousel concepts
          are now moving into distribution
        </>
      }
    />
    <BentoCard
      icon={<MegaphoneIcon className="w-5 h-5" />}
      title="Building Toward Distribution"
      description={
        <>
          This is not just content for content&rsquo;s sake — it&rsquo;s the early layer
          of a <Bold>repeatable acquisition engine</Bold> for SoulGarden
        </>
      }
    />
  </FullBleedBentoSlide>,

  // 4 - SoulGarden videos
  <SocialVideoSlide
    key="soulgarden-videos"
    title="Videos Shipped This Week"
    label="SoulGarden Content"
    videos={[
      {
        src: "/videos/sg-plant-reveal.mp4",
        title: "Plant Reveal - The Visual Needs No Caption",
      },
      {
        src: "/videos/sg-we-deleted.mp4",
        title: "We Deleted Our 12th Wellness App. Then We Built One.",
      },
      {
        src: "/videos/sg-walk-through.mp4",
        title: "SoulGarden Walk Through",
      },
    ]}
  />,

  // 5 - SoulGarden carousels
  <CarouselRowSlide
    key="soulgarden-carousel-affirmations"
    title="The 3 Types of Affirmations"
    label="SoulGarden Content"
    description={
      <>
        A carousel built around <Accent>why most affirmations do not land</Accent>
        {" "}and what makes the third type actually work
      </>
    }
    slides={[
      "/images/carousels/affirmations/8.jpg",
      "/images/carousels/affirmations/9.jpg",
      "/images/carousels/affirmations/10.jpg",
      "/images/carousels/affirmations/11.jpg",
      "/images/carousels/affirmations/12.jpg",
      "/images/carousels/affirmations/13.jpg",
      "/images/carousels/affirmations/14.jpg",
    ]}
  />,

  // 6 - SoulGarden carousel 2
  <CarouselRowSlide
    key="soulgarden-carousel-vision"
    title="The Day We Gave Up on Vision Boards"
    label="SoulGarden Content"
    description={
      <>
        A carousel that reframes the old ritual and points toward a{" "}
        <Bold>more grounded SoulGarden belief system</Bold>
      </>
    }
    slides={[
      "/images/carousels/vision-boards/1.jpg",
      "/images/carousels/vision-boards/2.jpg",
      "/images/carousels/vision-boards/3.jpg",
      "/images/carousels/vision-boards/4.jpg",
      "/images/carousels/vision-boards/5.jpg",
      "/images/carousels/vision-boards/6.jpg",
      "/images/carousels/vision-boards/7.jpg",
    ]}
  />,

  // 7 - Topic title: External survey
  <TopicHeroSplitSlide
    key="section-survey"
    label="Feedback Infrastructure"
    image="/images/portraits/external-survey-hero.png"
    title={
      <>
        <span className="text-neon-cyan italic font-light" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>Centralised</span> Survey System
      </>
    }
  >
    <BentoCard
      icon={<ChatBubbleLeftRightIcon className="w-5 h-5" />}
      title="One System for Both"
      accent
      description={
        <>
          We already had an <Accent>internal survey system</Accent>, and now we
          also need surveys that can be sent to external stakeholders and users.
        </>
      }
    />
    <BentoCard
      icon={<CircleStackIcon className="w-5 h-5" />}
      title="Combining the Two Flows"
      description={
        <>
          What we are doing now is <Bold>combining the internal and external
          survey flows</Bold> so a single system can support both use cases cleanly.
        </>
      }
    />
  </TopicHeroSplitSlide>,

  // 8 - External feedback system
  <FullBleedBentoSlide
    key="feedback-system"
    title="Centralised Survey System"
    label="ChronoAI System Design"
  >
    <BentoCard
      icon={<ChatBubbleLeftRightIcon className="w-5 h-5" />}
      title="Built from the Existing Internal System"
      accent
      description={
        <>
          The starting point is the <Accent>internal survey system we already have</Accent>,
          and now it is being expanded so it can also serve external users
          and stakeholders.
        </>
      }
    />
    <BentoCard
      icon={<CircleStackIcon className="w-5 h-5" />}
      title="Supporting Internal + External Together"
      description={
        <>
          Instead of splitting this into two different tools, the goal is one{" "}
          <Bold>combined survey system</Bold> that supports both internal and
          external feedback collection in the same place.
        </>
      }
    />
    <BentoCard
      icon={<SwatchIcon className="w-5 h-5" />}
      title="Why We Are Doing This"
      description={
        <>
          The goal is to <Accent>automate survey systems</Accent> so the workflow
          becomes easier to run, easier to scale, and less dependent on rebuilding
          each survey from scratch.
        </>
      }
    />
    <BentoCard
      icon={<CpuChipIcon className="w-5 h-5" />}
      title="A Learning Loop for AI"
      description={
        <>
          Over time, AI can keep <Bold>learning and self-improving</Bold> in how
          it creates product surveys, structures survey flows, and generates more
          useful survey analytics.
        </>
      }
    />
    <div className="col-span-2 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 sm:p-5 flex flex-col gap-3">
      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-red-500/15 text-red-400">
        <PhotoIcon className="w-5 h-5" />
      </div>
      <p className="text-sm font-semibold text-red-300">Current Blocker</p>
      <p className="text-sm text-red-100/85 leading-relaxed">
        Right now the blocker is figuring out how to <Bold>simplify survey creation
        and theming</Bold> so the system becomes easier to scale, easier
        to reuse, and easier to present clearly.
      </p>
    </div>
    <div className="col-span-2 rounded-2xl overflow-hidden border border-wire-subtle bg-black">
      <video
        src="/videos/centralised-survey-demo.mov"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto"
      />
    </div>
  </FullBleedBentoSlide>,

  // 9 - Topic title: Codex + Sora
  <TopicHeroSplitSlide
    key="section-codex-sora"
    label="Content Workflow"
    image="/images/portraits/codex-sora-hero.png"
    title={
      <>
        <span className="text-neon-cyan italic font-light" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>Codex</span> + Sora Workflow
      </>
    }
  >
    <BentoCard
      icon={<CpuChipIcon className="w-5 h-5" />}
      title="A New Content Stack"
      accent
      description={
        <>
          Moving from <Accent>Cursor to Codex</Accent> gives me access to a stronger
          workflow for structured content creation, tooling, and experimentation.
        </>
      }
    />
    <BentoCard
      icon={<FilmIcon className="w-5 h-5" />}
      title="Sora Becomes Part of the System"
      description={
        <>
          The plan is to combine <Bold>skills, prompts, and Sora video generation</Bold>
          into a more reusable content pipeline for ChronoAI.
        </>
      }
    />
  </TopicHeroSplitSlide>,

  // 10 - Codex + Sora
  <FullBleedBentoSlide
    key="codex-sora"
    title="From Cursor to Codex, With Sora in the Loop"
    label="AI Content Generation"
  >
    <BentoCard
      icon={<CpuChipIcon className="w-5 h-5" />}
      title="Migrated from Cursor to Codex"
      accent
      description={
        <>
          I&rsquo;ve shifted from <Accent>Cursor to Codex</Accent> on the ChatGPT Pro
          plan, which now gives me access to Sora as an additional tool we can leverage.
        </>
      }
    />
    <BentoCard
      icon={<FilmIcon className="w-5 h-5" />}
      title="Sora is an Extra Tool, Not the Whole Strategy"
      description={
        <>
          The value right now is that Sora becomes <Bold>one more option inside the workflow</Bold>
          for testing concepts, generating motion ideas, and supporting content experiments.
        </>
      }
    />
    <BentoCard
      icon={<RocketLaunchIcon className="w-5 h-5" />}
      title="My Honest Take on Sora"
      description={
        <>
          My honest opinion is that <Accent>Sora&rsquo;s video generation is very mid</Accent>{" "}
          right now — useful to explore, but not yet strong enough to replace a real creative workflow.
        </>
      }
    />
    <BentoCard
      icon={<WrenchScrewdriverIcon className="w-5 h-5" />}
      title="Why It Still Matters"
      description={
        <>
          Even with that limitation, it is still worth learning because it helps us
          understand where AI video fits, where it falls short, and how ChronoAI can
          use it more strategically over time.
        </>
      }
    />
  </FullBleedBentoSlide>,

  // 11 - Next week
  <div
    key="next-week"
    className="flex flex-col justify-center w-full min-h-full px-0 py-12 max-w-7xl mx-auto"
  >
    <div className="mb-8">
      <span className="text-neon-cyan text-xs font-medium tracking-[0.2em] uppercase block mb-2">
        Next Steps
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
        What&rsquo;s Moving Next Week
      </h2>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-3 items-stretch">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <BentoCard
          icon={<MegaphoneIcon className="w-5 h-5" />}
          title="Continue SoulGarden User Acquisition"
          accent
          description={
            <>
              Keep building out the <Accent>SoulGarden user acquisition campaign</Accent>
              and push the next batch of content and distribution forward.
            </>
          }
        />
        <BentoCard
          icon={<SparklesIcon className="w-5 h-5" />}
          title="Riteset UI/UX + Social Content"
          description={
            <>
              Continue <Bold>Riteset UI/UX design improvements</Bold> while also
              creating supporting social media content around the product.
            </>
          }
        />
        <BentoCard
          icon={<ChatBubbleLeftRightIcon className="w-5 h-5" />}
          title="Workflow + Automation Showcase"
          description={
            <>
              Build out the workflow and automation story to showcase at the{" "}
              <Accent>&ldquo;What&rsquo;s Next&rdquo; ChronoAI event</Accent>.
            </>
          }
        />
        <BentoCard
          icon={<CalendarDaysIcon className="w-5 h-5" />}
          title="Tie the Systems Together"
          description={
            <>
              The focus is not isolated tasks — it is making the content, product,
              and automation work feel like <Bold>one connected direction</Bold>.
            </>
          }
        />
      </div>
      <div className="rounded-2xl overflow-hidden border border-wire-subtle bg-surface-raised min-h-[22rem] max-h-[28rem] self-stretch w-full">
        <img
          src="/images/portraits/next-week-cherry.png"
          alt="Next week visual"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  </div>,

  // 12 - Inspiring quote
  <QuoteSlide
    key="quote-of-week"
    quote="The best way to predict the future is to create it."
    attribution="Peter Drucker"
  />,
];

export default function TodayPresentation() {
  return (
    <div
      style={
        {
          "--color-neon-cyan": "#00E5FF",
        } as CSSProperties
      }
    >
      <SlideShell slides={slides} title="This Week: Mar 13, 2026" />
    </div>
  );
}
