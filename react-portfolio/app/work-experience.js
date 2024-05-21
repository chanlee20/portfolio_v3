import SectionTitle from "./components/section-title";

export default function WorkExperience() {
  const events = [
    {
      heading: "Software Engineer",
      subHeading: "PayPal, Inc - JavaScript SDK Team",
      date: "August 2024 ~ Current",
      description: [""],
      direction: "left",
    },
    {
      heading: "Front-End Software Engineer Intern",
      subHeading: "Tesla - Vision Automation Team",
      date: "August 2023 ~ December 2023",
      description: [
        "Created an end-to-end group system page to organize 4,000 inspections, display real-time inspection results, and conveniently query vehicle identification numbers in order to support technicians to prevent over 30,000 production quality defects.",
        " Utilized successive pagination calls of Label Studio API to optimally summarize more than 5,000 tasks on average for each model.",
        " Refactored outdated codes to more maintainable front-end components by following strict type definition and tailwind guidelines.      ",
      ],
      direction: "right",
    },
    {
      heading: "Tech Analyst Intern",
      subHeading: "Spectrum - Billing Team",
      date: "May 2023 ~ August 2023",
      description: [
        "Developed a Python automation script using Selenium and SQL queries that compares over 10,000 unique identification numbers in billing statements and post qualification system reports to ensure that the data is up to date with customer status.",
        "Built a Python script that translates over 1,000 selectivity texts into SQL and utilizes PyAutoGUI to automate the execution of the queries in DBeaver and display the result onto a Tkinter GUI.",
      ],
      direction: "left",
    },
    {
      heading: "Full Stack Software Engineer Intern",
      subHeading: "Sobriety Hub",
      date: "September 2022 ~ May 2023",
      description: [
        " Utilized NextJS and ChakraUI to develop software service that allows the owners of sober living houses to manage and record their residents’ information regarding their rents, medication, and more.",
        "Managed to create a user-interactive tutorial using external JS library which led to a decrease of 70% negative feedback of being lost on how to use the software for first time users.",
      ],
      direction: "right",
    },
    {
      heading: "Full Stack & Embedded Software Engineer Intern",
      subHeading: "Dogu Robotics",
      date: "June 2022 ~ August 2022",
      description: [
        " Developed a user-authenticated web application that allows real time video communication between N to N users by applying SocketIO, Kurento Media Server, and WebRTC API.",
        "Employed NodeJS to create server pipelines and exchange ICE candidates to ensure users can establish video connections.",
        "Utilized PHP to store and view recorded videos in a secured MySQL database.",
      ],
      direction: "left",
    },
    {
      heading: "Graduate of Bachelor of Science in Computer Science",
      subHeading: "Washington University in St. Louis",
      date: "August 2020 ~ May 2024",
      description: ["GPA: 3.87", "Member of Korean International Student Society, Association for Computing Machinery, Chess Club"],
      direction: "right",
    },
  ];

  const Circle = () => {
    return (
      <div className="rounded-full w-4 h-4 bg-anti-flash-white mx-auto"></div>
    );
  };

  const Stick = () => {
    return (
      <div className="rounded-t-full rounded-b-full w-2 h-full bg-anti-flash-white mx-8"></div>
    );
  };

  const EventCard = ({ heading, subHeading, date, description }) => {
    return (
      <div className="flex flex-col gap-y-2 border shadow-md rounded-xl p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
        <div className="text-brown-rose font-bold text-lg border-b">
          {heading}
        </div>
        <div className="px-4 py-2 shadow-md rounded-md bg-mountbatten-pink">
          <div className="text-md text-azure">{subHeading}</div>
          <div className="text-md text-azure italic">{date}</div>
        </div>

        {description.map((bulletPoint, index) => (
          <p className="text-azure" key={index}>
            {bulletPoint}
          </p>
        ))}
      </div>
    );
  };
  return (
    <div className="w-1/2 mx-auto mt-64">
      <SectionTitle
        title="Education + Work Experience"
        content="My Adventure So Far! 🐣"
      />
      <div className="flex flex-col gap-y-3 w-full my-4">
        <Circle />
        {events.map((event, key) => {
          return (
            <>
              <div
                key={key}
                className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto"
              >
                {event.direction === "left" ? (
                  <EventCard
                    heading={event.heading}
                    subHeading={event.subHeading}
                    date={event.date}
                    description={event.description}
                  />
                ) : (
                  <div></div>
                )}
                <Stick />
                {event.direction === "right" ? (
                  <EventCard
                    heading={event.heading}
                    subHeading={event.subHeading}
                    date={event.date}
                    description={event.description}
                  />
                ) : (
                  <div></div>
                )}
              </div>
              {key < events.length - 1 && <Circle />}
            </>
          );
        })}
      </div>
    </div>
  );
}
