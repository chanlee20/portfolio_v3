import Card from "./card";
import SectionTitle from "./components/section-title";

export default function Project() {
    return (
        <div className="w-1/2 mx-auto">
            <SectionTitle title="Projects" content="Discover Unique Projects I Have Worked On, 🧑🏻‍💻" />
            <Card
                imageFirst={true}
                imageLessRounded={true}
                src="/projects/vg_projects.png"
                titleHeader="Open World 3D Game"
                description="An open world FPS 3D game where the users can explore the map to shoot at various monsters (burrows, orcs, wolves) in order to save the world. Users can shoot, throw grenades, swing swords, collect items while maintaining health and stamina."
            />
            <Card
                imageFirst={false}
                imageLessRounded={true}
                src="/projects/vg_projects.png"
                titleHeader="Open World 3D Game"
                description="An open world FPS 3D game where the users can explore the map to shoot at various monsters (burrows, orcs, wolves) in order to save the world. Users can shoot, throw grenades, swing swords, collect items while maintaining health and stamina."
            />
            <Card
                imageFirst={true}
                imageLessRounded={true}
                src="/projects/vg_projects.png"
                titleHeader="Open World 3D Game"
                description="An open world FPS 3D game where the users can explore the map to shoot at various monsters (burrows, orcs, wolves) in order to save the world. Users can shoot, throw grenades, swing swords, collect items while maintaining health and stamina."
            />
            <Card
                imageFirst={false}
                imageLessRounded={true}
                src="/projects/vg_projects.png"
                titleHeader="Open World 3D Game"
                description="An open world FPS 3D game where the users can explore the map to shoot at various monsters (burrows, orcs, wolves) in order to save the world. Users can shoot, throw grenades, swing swords, collect items while maintaining health and stamina."
            />
            <Card
                imageFirst={true}
                imageLessRounded={true}
                src="/projects/vg_projects.png"
                titleHeader="Open World 3D Game"
                description="An open world FPS 3D game where the users can explore the map to shoot at various monsters (burrows, orcs, wolves) in order to save the world. Users can shoot, throw grenades, swing swords, collect items while maintaining health and stamina."
            />
        </div>
    )
}