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
import { Icons } from '@/components/ui/icons'
import { ChevronDown, ChevronUp } from 'lucide-react'

const Education = () => {
    const { toast } = useToast()
    const [loading, setLoading] = useState(false);
    const { resumeData, updateResumeData } = useResume();

    const [education, setEducation] = useState({
        title: 'Education',
        educationDetail: []
    });

    useEffect(() => {
        setLoading(true)
        if (resumeData.education) {
            setEducation(resumeData.education);
        }
        setLoading(false)
    }, [resumeData.education])

    const handleInputChange = (name, value, index) => {
        setEducation(prevEducation => ({
            ...prevEducation,
            educationDetail: prevEducation.educationDetail.map((detail, i) => {
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

    const handleAddEducationDetail = () => {
        setEducation(prevEducation => ({
            ...prevEducation,
            educationDetail: [...(prevEducation.educationDetail || []), {}]
        }));
    };

    const handleRemoveEducationDetail = (index) => {
        setEducation(prevEducation => ({
            ...prevEducation,
            educationDetail: prevEducation?.educationDetail.filter((_, i) => i !== index)
        }));
    };

    const handleMoveUp = (index) => {
        if (index === 0) return; // Cannot move further up
        setEducation(prevEducation => {
            const updatedEducationDetail = [...prevEducation.educationDetail];
            const temp = updatedEducationDetail[index];
            updatedEducationDetail[index] = updatedEducationDetail[index - 1];
            updatedEducationDetail[index - 1] = temp;
            return {
                ...prevEducation,
                educationDetail: updatedEducationDetail
            };
        });
    };

    const handleMoveDown = (index) => {
        if (index === education.educationDetail.length - 1) return; // Cannot move further down
        setEducation(prevEducation => {
            const updatedEducationDetail = [...prevEducation.educationDetail];
            const temp = updatedEducationDetail[index];
            updatedEducationDetail[index] = updatedEducationDetail[index + 1];
            updatedEducationDetail[index + 1] = temp;
            return {
                ...prevEducation,
                educationDetail: updatedEducationDetail
            };
        });
    };

    const handleSave = () => {
        setLoading(true)
        console.log(education)
        updateResumeData('education', education);
        setLoading(false)
        toast({
            title: "Education Details saved successfully",
        })
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Education</CardTitle>
                <CardDescription>
                    Make changes to your education here, Click save when you&apos;re done.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="grid w-full grid-cols-1">
                    <div className="space-y-1">
                        <Label htmlFor="title">Section Title</Label>
                        <Input id="title" value={education.title} onChange={(e) => setEducation(prevEducation => ({ ...prevEducation || {}, title: e.target.value }))} />
                    </div>
                </div>
                {education.educationDetail?.map((detail, index) => (
                    <div key={index} className="flex w-full flex-col gap-4 pt-6">
                        <div className='w-full flex items-center justify-between'>
                            <h2 className='font-semibold text-md'>Education Detail {index + 1}</h2>
                            <div className='flex gap-2 items-center'>
                                <Button size='icon' className='rounded-full' variant='secondary' onClick={() => handleMoveUp(index)} disabled={index === 0}><ChevronUp /></Button>
                                <Button size='icon' className='rounded-full' variant='secondary' onClick={() => handleMoveDown(index)} disabled={index === education.educationDetail.length - 1}><ChevronDown /></Button>
                                <Button onClick={() => handleRemoveEducationDetail(index)}>Remove detail</Button>
                            </div>
                        </div>
                        <div className="grid w-full grid-cols-2 space-x-8">
                            <div className="space-y-1">
                                <Label htmlFor={`instituteName${index}`}>Institute Name</Label>
                                <Input id={`instituteName${index}`} value={detail.instituteName || ''} onChange={(e) => handleInputChange('instituteName', e.target.value, index)} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor={`degree${index}`}>Degree</Label>
                                <Input id={`degree${index}`} value={detail.degree || ''} onChange={(e) => handleInputChange('degree', e.target.value, index)} />
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
                                <Label htmlFor={`cgpa${index}`}>CGPA / Percentage</Label>
                                <Input id={`cgpa${index}`} value={detail.cgpa || ''} onChange={(e) => handleInputChange('cgpa', e.target.value, index)} />
                            </div>
                        </div>
                    </div>
                ))}
            </CardContent>
            <CardFooter className='flex flex-col gap-4 w-fit items-start'>
                <Button onClick={handleAddEducationDetail}>Add Education Detail</Button>
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

export default Education