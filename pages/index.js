import { Hero, AgencySection } from "../sections";



const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const agencyProps = {
  heading: "Managed agency selection",
  subHeading: "Strengthen your onboarding process",
  backgroundImage: {
    src: "/img/background.png",
    alt: "backgroundImage",
    width: 900,
    height: 700,
  },
  videoImage: {
    src: "/img/video.png",
    alt: "videoImage",
    width: 300,
    height: 300,
  },
  cards: [
    {
      title: "Brief",
      description: (
        <p>
          Complete <b>brief writing or simple guidance</b> on what to include ,
          we've got you coverd.
        </p>
      ),
    },
    {
      title: "Search",
      description: (
        <p>
          In-dedpth agency search covering; <b>criteria matching</b>, door
          knocking and due-dilligence vetting
        </p>
      ),
    },
    {
      title: "Pitch",
      description: (
        <p>
          Comprehensive pitch management, including comms , diary management and{" "}
          <b>pitch hosting</b>.
        </p>
      ),
    },
  ],
};

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Hero {...heroProps} />
        <AgencySection {...agencyProps} />
        {/** Other sections */}
      </div>
    </>
  );
}
