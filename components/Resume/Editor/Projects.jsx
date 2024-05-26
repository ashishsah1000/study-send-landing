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
import { ChevronDown, ChevronUp, Eraser } from 'lucide-react'
import { Icons } from '@/components/ui/icons'

const Projects = () => {
    const { toast } = useToast()
    const [loading, setLoading] = useState(false);
    const { resumeData, updateResumeData } = useResume();

    const [projects, setProjects] = useState({
        title: 'Projects',
        projectsDetail: []
    });

    useEffect(() => {
        setLoading(true)
        if (resumeData.projects) {
            setProjects(resumeData.projects);
        }
        setLoading(false)
    }, [resumeData.projects])

    const handleInputChange = (name, value, index) => {
        setProjects(prevProjects => ({
            ...prevProjects,
            projectsDetail: prevProjects.projectsDetail.map((detail, i) => {
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

    const handleAddProjectsDetail = () => {
        setProjects(prevProjects => ({
            ...prevProjects,
            projectsDetail: [...(prevProjects.projectsDetail || []), {}]
        }));
    };

    const handleRemoveProjectsDetail = (index) => {
        setProjects(prevProjects => ({
            ...prevProjects,
            projectsDetail: prevProjects?.projectsDetail.filter((_, i) => i !== index)
        }));
    };

    const handleAddSpecialPoint = (index) => {
        setProjects(prevProjects => ({
            ...prevProjects,
            projectsDetail: prevProjects.projectsDetail.map((detail, i) => {
                if (i === index) {
                    return {
                        ...detail,
                        pPoint: [...(detail.pPoint || []), ''] // Add an empty special point
                    };
                }
                return detail;
            })
        }));
    };

    const handleRemoveSpecialPoint = (expIndex, pointIndex) => {
        setProjects(prevProjects => ({
            ...prevProjects,
            projectsDetail: prevProjects.projectsDetail.map((detail, i) => {
                if (i === expIndex) {
                    return {
                        ...detail,
                        pPoint: detail.pPoint.filter((_, j) => j !== pointIndex) // Remove the special point
                    };
                }
                return detail;
            })
        }));
    };

    const handleEditSpecialPoint = (expIndex, pointIndex, newValue) => {
        setProjects(prevProjects => ({
            ...prevProjects,
            projectsDetail: prevProjects.projectsDetail.map((detail, i) => {
                if (i === expIndex) {
                    return {
                        ...detail,
                        pPoint: detail.pPoint.map((point, j) => j === pointIndex ? newValue : point) // Edit the special point
                    };
                }
                return detail;
            })
        }));
    };

    const handleMoveUp = (index) => {
        if (index === 0) return; // Cannot move further up
        setProjects(prevProjects => {
            const updatedProjectsDetail = [...prevProjects.projectsDetail];
            const temp = updatedProjectsDetail[index];
            updatedProjectsDetail[index] = updatedProjectsDetail[index - 1];
            updatedProjectsDetail[index - 1] = temp;
            return {
                ...prevProjects,
                projectsDetail: updatedProjectsDetail
            };
        });
    };

    const handleMoveDown = (index) => {
        if (index === projects.projectsDetail.length - 1) return; // Cannot move further down
        setProjects(prevProjects => {
            const updatedProjectsDetail = [...prevProjects.projectsDetail];
            const temp = updatedProjectsDetail[index];
            updatedProjectsDetail[index] = updatedProjectsDetail[index + 1];
            updatedProjectsDetail[index + 1] = temp;
            return {
                ...prevProjects,
                projectsDetail: updatedProjectsDetail
            };
        });
    };

    const handleSave = () => {
        setLoading(true)
        console.log(projects)
        updateResumeData('projects', projects);
        setLoading(false)
        toast({
            title: "Projects Details saved successfully",
        })
    };
    return (
        <Card>
            <CardHeader>
                <CardTitle>Projects</CardTitle>
                <CardDescription>
                    Make changes to your projects here, Click save when you&apos;re done.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="grid w-full grid-cols-1">
                    <div className="space-y-1">
                        <Label htmlFor="title">Section Title</Label>
                        <Input id="title" value={projects.title} onChange={(e) => setProjects(prevProjects => ({ ...prevProjects || {}, title: e.target.value }))} />
                    </div>
                </div>
                {projects.projectsDetail?.map((detail, index) => (
                    <div key={index} className="flex w-full flex-col gap-4 pt-6">
                        <div className='w-full flex items-center justify-between'>
                            <h2 className='font-semibold text-md'>Project Detail {index + 1}</h2>
                            <div className='flex gap-2 items-center'>
                                <Button size='icon' className='rounded-full' variant='secondary' onClick={() => handleMoveUp(index)} disabled={index === 0}><ChevronUp /></Button>
                                <Button size='icon' className='rounded-full' variant='secondary' onClick={() => handleMoveDown(index)} disabled={index === projects.projectsDetail.length - 1}><ChevronDown /></Button>
                                <Button onClick={() => handleRemoveProjectsDetail(index)}>Remove detail</Button>
                            </div>
                        </div>
                        <div className="grid w-full grid-cols-2 space-x-8">
                            <div className="space-y-1">
                                <Label htmlFor={`projectName${index}`}>Project Name</Label>
                                <Input id={`projectName${index}`} value={detail.projectName || ''} onChange={(e) => handleInputChange('projectName', e.target.value, index)} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor={`projectLink${index}`}>Project Link</Label>
                                <Input id={`projectLink${index}`} value={detail.projectLink || ''} onChange={(e) => handleInputChange('projectLink', e.target.value, index)} />
                            </div>
                        </div>
                        <div className="grid w-full grid-cols-1">
                            <div className="space-y-1">
                                <Label htmlFor={`technologies${index}`}>Technologies Used</Label>
                                <Input id={`technologies${index}`} value={detail.technologies || ''} onChange={(e) => handleInputChange('technologies', e.target.value, index)} />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            {detail.pPoint && detail.pPoint.map((point, pointIndex) => (
                                <div key={pointIndex} className="grid w-full grid-cols-1">
                                    <div className="space-y-1">
                                        <Label htmlFor={`pPoint${index}-${pointIndex}`}>Special Point {pointIndex + 1}</Label>
                                        <div className='flex gap-4 items-center'>
                                            <Input id={`pPoint${index}-${pointIndex}`} value={point} onChange={(e) => handleEditSpecialPoint(index, pointIndex, e.target.value)} />
                                            <Button size='icon' variant='secondary' onClick={() => handleRemoveSpecialPoint(index, pointIndex)}><Eraser size={18} /></Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <Button onClick={() => handleAddSpecialPoint(index)} className='w-fit' variant='secondary'>Add Special Point</Button>
                        </div>
                    </div>
                ))}
            </CardContent>
            <CardFooter className='flex flex-col gap-4 w-fit items-start'>
                <Button onClick={handleAddProjectsDetail}>Add Projects Detail</Button>
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

export default Projects