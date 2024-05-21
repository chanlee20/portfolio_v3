import Card from "./components/card";
import SectionTitle from "./components/section-title";

export default function Project() {
    return (
        <div className="w-1/2 mx-auto mt-64" id="project">
            <SectionTitle title="Projects" content="Discover Unique Projects I Have Worked On, 🧑🏻‍💻" />
            <Card
                imageFirst={true}
                imageLessRounded={true}
                src="/projects/vg_projects.png"
                titleHeader="Open World 3D Game"
                description="An open world FPS 3D game where the users can explore the map to shoot at various monsters (moles, orcs, wolves) in order to save the world. Users can shoot, throw grenades, swing swords, collect items while maintaining health and stamina."
                skills={["Unity", "C#"]}
                isProject
                github_link="https://github.com/chanlee20/Open_World_Burrows"
                project_link="https://pmurph09.itch.io/burrow?secret=VF20quFa63qRg4aJshGhlzxZDE"
            />
            <Card
                imageFirst={false}
                imageLessRounded={true}
                src="/projects/reloved.png"
                titleHeader="ReLoved: Free-And-For-Sale Application"
                description="ReLoved is a second-hand, free-and-for-sale social app made for the Washington University in St. Louis community. The app aims to create a safer and more sustainable way for students to buy and sell second-hand items within their community."
                isProject
                github_link="https://github.com/chanlee20/re-Loved"
                project_link="https://apps.apple.com/gr/app/re-loved/id6446915008"
                skills={["Swift", "Firebase"]}
            />
            <Card
                imageFirst={true}
                imageLessRounded={true}
                src="/projects/Priism-Text.png"
                titleHeader="Priism: Anonymous College Social Media Application"
                description="A social media platform in which users who are affliated with colleges can anonymously and freely discuss ideas and advertise school events. The app targets to support and encourage students to freely express their ideas within the appropriate boundary."
                isProject
                github_link="https://github.com/chanlee20/priism-mobile"
                skills={["React Native", "Firebase"]}
            />
            <Card
                imageFirst={false}
                imageLessRounded={true}
                src="/projects/terminal_file_system.png"
                titleHeader="Terminal File System"
                description="A terminal file system operator that utilizes object-oriented programming principles such as inheritance, abstraction, and polymorphism to optimally mimic linux file commands including ls, touch, rm, rn, and more."
                isProject
                github_link="https://github.com/chanlee20/Terminal_File_System"
                skills={["C++"]}
            />
            <Card
                imageFirst={true}
                imageLessRounded={true}
                src="/projects/pacman.png"
                titleHeader="AI Pacman"
                description="A project that trains the AI starting from simple graph searches including BFS, DFS to more advanced techniques including A* search algo, reinforcement learning, and more in order to optimize the performance of the Pacman. "
                isProject
                github_link="https://github.com/chanlee20/Pacman-AI"
                skills={["Python"]}
            />
        </div>
    )
}