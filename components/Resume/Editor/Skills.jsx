'use client'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from '@/components/ui/use-toast'
import { useResume } from '@/context/ResumeProvider'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Icons } from '@/components/ui/icons'

const Skills = () => {
    const { toast } = useToast()
    const [loading, setLoading] = useState(false);
    const { resumeData, updateResumeData } = useResume();

    const [skills, setSkills] = useState({
        title: 'Skills',
        skillsDetail: []
    });

    useEffect(() => {
        setLoading(true)
        if (resumeData.skills) {
            setSkills(resumeData.skills);
        }
        setLoading(false)
    }, [resumeData.skills])

    const handleInputChange = (name, value, index) => {
        setSkills(prevSkills => ({
            ...prevSkills,
            skillsDetail: prevSkills.skillsDetail.map((detail, i) => {
                if (i === index) {
                    return {
                        ...detail,
                        [name]: value
                    };
                }
                return detail;
            })
        }));
    };

    const handleAddSkillsDetail = () => {
        setSkills(prevSkills => ({
            ...prevSkills,
            skillsDetail: [...(prevSkills.skillsDetail || []), {}]
        }));
    };

    const handleRemoveSkillsDetail = (index) => {
        setSkills(prevSkills => ({
            ...prevSkills,
            skillsDetail: prevSkills?.skillsDetail.filter((_, i) => i !== index)
        }));
    };

    const handleMoveUp = (index) => {
        if (index === 0) return; // Cannot move further up
        setSkills(prevSkills => {
            const updatedSkillsDetail = [...prevSkills.skillsDetail];
            const temp = updatedSkillsDetail[index];
            updatedSkillsDetail[index] = updatedSkillsDetail[index - 1];
            updatedSkillsDetail[index - 1] = temp;
            return {
                ...prevSkills,
                skillsDetail: updatedSkillsDetail
            };
        });
    };

    const handleMoveDown = (index) => {
        if (index === skills.skillsDetail.length - 1) return; // Cannot move further down
        setSkills(prevSkills => {
            const updatedSkillsDetail = [...prevSkills.skillsDetail];
            const temp = updatedSkillsDetail[index];
            updatedSkillsDetail[index] = updatedSkillsDetail[index + 1];
            updatedSkillsDetail[index + 1] = temp;
            return {
                ...prevSkills,
                skillsDetail: updatedSkillsDetail
            };
        });
    };

    const handleSave = () => {
        setLoading(true)
        console.log(skills)
        updateResumeData('skills', skills);
        setLoading(false)
        toast({
            title: "Skills Details saved successfully",
        })
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Skills</CardTitle>
                <CardDescription>
                    Make changes to your skills here, Click save when you&apos;re done.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="grid w-full grid-cols-1">
                    <div className="space-y-1">
                        <Label htmlFor="title">Section Title</Label>
                        <Input id="title" value={skills.title} onChange={(e) => setSkills(prevSkills => ({ ...prevSkills || {}, title: e.target.value }))} />
                    </div>
                </div>
                {skills.skillsDetail?.map((detail, index) => (
                    <div key={index} className="flex w-full flex-col gap-4 pt-6">
                        <div className='w-full flex items-center justify-between'>
                            <h2 className='font-semibold text-md'>Skills Detail {index + 1}</h2>
                            <div className='flex gap-2 items-center'>
                                <Button size='icon' className='rounded-full' variant='secondary' onClick={() => handleMoveUp(index)} disabled={index === 0}><ChevronUp /></Button>
                                <Button size='icon' className='rounded-full' variant='secondary' onClick={() => handleMoveDown(index)} disabled={index === skills.skillsDetail.length - 1}><ChevronDown /></Button>
                                <Button onClick={() => handleRemoveSkillsDetail(index)}>Remove detail</Button>
                            </div>
                        </div>
                        <div className="grid w-full grid-cols-2 space-x-8">
                            <div className="space-y-1">
                                <Label htmlFor={`sTitle${index}`}>Skill Title</Label>
                                <Input id={`sTitle${index}`} placeholder="Frontend Developement" value={detail.sTitle || ''} onChange={(e) => handleInputChange('sTitle', e.target.value, index)}/>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor={`technologies${index}`}>Technologies List (Seperated with comma)</Label>
                                <Input id={`technologies${index}`} placeholder="HTML, CSS, Javascript, Next, Tailwind, Shadcn" value={detail.technologies || ''} onChange={(e) => handleInputChange('technologies', e.target.value, index)}/>
                            </div>
                        </div>
                    </div>
                ))}
            </CardContent>
            <CardFooter className='flex flex-col gap-4 w-fit items-start'>
                <Button onClick={handleAddSkillsDetail}>Add Skills Detail</Button>
                <Button onClick={handleSave} disabled={loading}>
                    {loading && (
                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Save changes
                </Button>
            </CardFooter>
        </Card>
    )
}

export default Skills