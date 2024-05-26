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

const Experiences = () => {
    const { toast } = useToast()
    const [loading, setLoading] = useState(false);
    const { resumeData, updateResumeData } = useResume();

    const [experiences, setExperiences] = useState({
        title: 'Experiences',
        experiencesDetail: []
    });

    useEffect(() => {
        setLoading(true)
        if (resumeData.experiences) {
            setExperiences(resumeData.experiences);
        }
        setLoading(false)
    }, [resumeData.experiences])

    const handleInputChange = (name, value, index) => {
        setExperiences(prevExperiences => ({
            ...prevExperiences,
            experiencesDetail: prevExperiences.experiencesDetail.map((detail, i) => {
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

    const handleAddExperiencesDetail = () => {
        setExperiences(prevExperiences => ({
            ...prevExperiences,
            experiencesDetail: [...(prevExperiences.experiencesDetail || []), {}]
        }));
    };

    const handleRemoveExperiencesDetail = (index) => {
        setExperiences(prevExperiences => ({
            ...prevExperiences,
            experiencesDetail: prevExperiences?.experiencesDetail.filter((_, i) => i !== index)
        }));
    };

    const handleAddSpecialPoint = (index) => {
        setExperiences(prevExperiences => ({
            ...prevExperiences,
            experiencesDetail: prevExperiences.experiencesDetail.map((detail, i) => {
                if (i === index) {
                    return {
                        ...detail,
                        ePoint: [...(detail.ePoint || []), ''] // Add an empty special point
                    };
                }
                return detail;
            })
        }));
    };

    const handleRemoveSpecialPoint = (expIndex, pointIndex) => {
        setExperiences(prevExperiences => ({
            ...prevExperiences,
            experiencesDetail: prevExperiences.experiencesDetail.map((detail, i) => {
                if (i === expIndex) {
                    return {
                        ...detail,
                        ePoint: detail.ePoint.filter((_, j) => j !== pointIndex) // Remove the special point
                    };
                }
                return detail;
            })
        }));
    };

    const handleEditSpecialPoint = (expIndex, pointIndex, newValue) => {
        setExperiences(prevExperiences => ({
            ...prevExperiences,
            experiencesDetail: prevExperiences.experiencesDetail.map((detail, i) => {
                if (i === expIndex) {
                    return {
                        ...detail,
                        ePoint: detail.ePoint.map((point, j) => j === pointIndex ? newValue : point) // Edit the special point
                    };
                }
                return detail;
            })
        }));
    };

    const handleMoveUp = (index) => {
        if (index === 0) return; // Cannot move further up
        setExperiences(prevExperiences => {
            const updatedExperiencesDetail = [...prevExperiences.experiencesDetail];
            const temp = updatedExperiencesDetail[index];
            updatedExperiencesDetail[index] = updatedExperiencesDetail[index - 1];
            updatedExperiencesDetail[index - 1] = temp;
            return {
                ...prevExperiences,
                experiencesDetail: updatedExperiencesDetail
            };
        });
    };

    const handleMoveDown = (index) => {
        if (index === experiences.experiencesDetail.length - 1) return; // Cannot move further down
        setExperiences(prevExperiences => {
            const updatedExperiencesDetail = [...prevExperiences.experiencesDetail];
            const temp = updatedExperiencesDetail[index];
            updatedExperiencesDetail[index] = updatedExperiencesDetail[index + 1];
            updatedExperiencesDetail[index + 1] = temp;
            return {
                ...prevExperiences,
                experiencesDetail: updatedExperiencesDetail
            };
        });
    };

    const handleSave = () => {
        setLoading(true)
        console.log(experiences)
        updateResumeData('experiences', experiences);
        setLoading(false)
        toast({
            title: "Experiences Details saved successfully",
        })
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Experience</CardTitle>
                <CardDescription>
                    Make changes to your experience here, Click save when you&apos;re done.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="grid w-full grid-cols-1">
                    <div className="space-y-1">
                        <Label htmlFor="title">Section Title</Label>
                        <Input id="title" value={experiences.title} onChange={(e) => setExperiences(prevExperiences => ({ ...prevExperiences || {}, title: e.target.value }))} />
                    </div>
                </div>
                {experiences.experiencesDetail?.map((detail, index) => (
                    <div key={index} className="flex w-full flex-col gap-4 pt-6">
                        <div className='w-full flex items-center justify-between'>
                            <h2 className='font-semibold text-md'>Experience Detail {index + 1}</h2>
                            <div className='flex gap-2 items-center'>
                                <Button size='icon' className='rounded-full' variant='secondary' onClick={() => handleMoveUp(index)} disabled={index === 0}><ChevronUp /></Button>
                                <Button size='icon' className='rounded-full' variant='secondary' onClick={() => handleMoveDown(index)} disabled={index === experiences.experiencesDetail.length - 1}><ChevronDown /></Button>
                                <Button onClick={() => handleRemoveExperiencesDetail(index)}>Remove detail</Button>
                            </div>
                        </div>
                        <div className="grid w-full grid-cols-2 space-x-8">
                            <div className="space-y-1">
                                <Label htmlFor={`companyName${index}`}>Company Name</Label>
                                <Input id={`companyName${index}`} value={detail.companyName || ''} onChange={(e) => handleInputChange('companyName', e.target.value, index)} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor={`role${index}`}>Role</Label>
                                <Input id={`role${index}`} value={detail.role || ''} onChange={(e) => handleInputChange('role', e.target.value, index)} />
                            </div>
                        </div>
                        <div className="grid w-full grid-cols-2 space-x-8">
                            <div className="space-y-1">
                                <Label htmlFor={`startDate${index}`}>Start Date</Label>
                                <Input id={`startDate${index}`} value={detail.startDate || ''} onChange={(e) => handleInputChange('startDate', e.target.value, index)} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor={`endDate${index}`}>End Date</Label>
                                <Input id={`endDate${index}`} value={detail.endDate || ''} onChange={(e) => handleInputChange('endDate', e.target.value, index)} />
                            </div>
                        </div>
                        <div className="grid w-full grid-cols-2 space-x-8">
                            <div className="space-y-1">
                                <Label htmlFor={`location${index}`}>Location</Label>
                                <Input id={`location${index}`} value={detail.location || ''} onChange={(e) => handleInputChange('location', e.target.value, index)} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor={`technologies${index}`}>Technologies Used</Label>
                                <Input id={`technologies${index}`} value={detail.technologies || ''} onChange={(e) => handleInputChange('technologies', e.target.value, index)} />
                            </div>
                        </div>
                        <div className="grid w-full grid-cols-1">
                            <div className="space-y-1">
                                <Label htmlFor={`certificateLink${index}`}>Certificate Link</Label>
                                <Input id={`certificateLink${index}`} value={detail.certificateLink || ''} onChange={(e) => handleInputChange('certificateLink', e.target.value, index)} />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            {detail.ePoint && detail.ePoint.map((point, pointIndex) => (
                                <div key={pointIndex} className="grid w-full grid-cols-1">
                                    <div className="space-y-1">
                                        <Label htmlFor={`ePoint${index}-${pointIndex}`}>Special Point {pointIndex + 1}</Label>
                                        <div className='flex gap-4 items-center'>
                                            <Input id={`ePoint${index}-${pointIndex}`} value={point} onChange={(e) => handleEditSpecialPoint(index, pointIndex, e.target.value)} />
                                            <Button size='icon' variant='secondary' onClick={() => handleRemoveSpecialPoint(index, pointIndex)}><Eraser size={18}/></Button>
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
                <Button onClick={handleAddExperiencesDetail}>Add Experiences Detail</Button>
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

export default Experiences