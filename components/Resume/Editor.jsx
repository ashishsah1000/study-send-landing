import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import BasicInfo from "./Editor/BasicInfo"
import Education from "./Editor/Education"
import Experiences from "./Editor/Experiences"
import Achievments from "./Editor/Achievments"
import Hobbies from "./Editor/Hobbies"
import Skills from "./Editor/Skills"
import Projects from "./Editor/Projects"
import Activities from "./Editor/Activities"

const TabsSection = {
    basicInfo: "Basic Info",
    education: "Education",
    experiences: "Experience",
    achievements: "Achievements",
    hobbies: "Hobbies & Interest",
    skills: "Skills",
    projects: "Projects",
    activites: "Activities",
}

const TabsBody = {
    basicInfo: <BasicInfo />,
    education: <Education />,
    experiences: <Experiences />,
    achievements: <Achievments />,
    hobbies: <Hobbies />,
    skills: <Skills />,
    projects: <Projects />,
    activites: <Activities />,
}

export function Editor() {
    return (
        <Tabs defaultValue="basicInfo" className="w-full">
            <TabsList className="grid w-full grid-cols-8">
                {Object.keys(TabsSection)?.map((key) => (
                    <TabsTrigger
                        value={key}
                        key={key}
                    >
                        {TabsSection[key]}
                    </TabsTrigger>
                ))}
            </TabsList>
            {Object.keys(TabsBody)?.map((key) => (
                <TabsContent
                    value={key}
                    key={key}
                >
                    {TabsBody[key]}
                </TabsContent>
            ))}
        </Tabs>
    )
}
