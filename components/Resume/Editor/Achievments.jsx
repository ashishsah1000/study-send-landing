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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Award, ChevronDown, ChevronUp, FileBadge, Medal, Trophy } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'
import { useResume } from '@/context/ResumeProvider'
import { Icons } from '@/components/ui/icons'

const Achievments = () => {
    const { toast } = useToast()
    const [loading, setLoading] = useState(false);
    const { resumeData, updateResumeData } = useResume();

    const [achievments, setAchievments] = useState({
        title: 'Achievements',
        achievmentsDetail: []
    });

    useEffect(() => {
        setLoading(true)
        if (resumeData.achievments) {
            setAchievments(resumeData.achievments);
        }
        setLoading(false)
    }, [resumeData.achievments])

    const handleInputChange = (name, value, index) => {
        setAchievments(prevAchievments => ({
            ...prevAchievments,
            achievmentsDetail: prevAchievments.achievmentsDetail.map((detail, i) => {
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

    const handleAddAchievmentsDetail = () => {
        setAchievments(prevAchievments => ({
            ...prevAchievments,
            achievmentsDetail: [...(prevAchievments.achievmentsDetail || []), {}]
        }));
    };

    const handleRemoveAchievmentsDetail = (index) => {
        setAchievments(prevAchievments => ({
            ...prevAchievments,
            achievmentsDetail: prevAchievments?.achievmentsDetail.filter((_, i) => i !== index)
        }));
    };

    const handleMoveUp = (index) => {
        if (index === 0) return; // Cannot move further up
        setAchievments(prevAchievments => {
            const updatedAchievmentsDetail = [...prevAchievments.achievmentsDetail];
            const temp = updatedAchievmentsDetail[index];
            updatedAchievmentsDetail[index] = updatedAchievmentsDetail[index - 1];
            updatedAchievmentsDetail[index - 1] = temp;
            return {
                ...prevAchievments,
                achievmentsDetail: updatedAchievmentsDetail
            };
        });
    };

    const handleMoveDown = (index) => {
        if (index === achievments.achievmentsDetail.length - 1) return; // Cannot move further down
        setAchievments(prevAchievments => {
            const updatedAchievmentsDetail = [...prevAchievments.achievmentsDetail];
            const temp = updatedAchievmentsDetail[index];
            updatedAchievmentsDetail[index] = updatedAchievmentsDetail[index + 1];
            updatedAchievmentsDetail[index + 1] = temp;
            return {
                ...prevAchievments,
                achievmentsDetail: updatedAchievmentsDetail
            };
        });
    };

    const handleSave = () => {
        setLoading(true)
        console.log(achievments)
        updateResumeData('achievments', achievments);
        setLoading(false)
        toast({
            title: "Achievments Details saved successfully",
        })
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Achievments</CardTitle>
                <CardDescription>
                    Make changes to your achievments here, Click save when you&apos;re done.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="grid w-full grid-cols-1">
                    <div className="space-y-1">
                        <Label htmlFor="title">Section Title</Label>
                        <Input id="title" value={achievments.title} onChange={(e) => setAchievments(prevAchievments => ({ ...prevAchievments || {}, title: e.target.value }))} />
                    </div>
                </div>
                {achievments.achievmentsDetail?.map((detail, index) => (
                    <div key={index} className="flex w-full flex-col gap-4 pt-6">
                        <div className='w-full flex items-center justify-between'>
                            <h2 className='font-semibold text-md'>Achievments Detail {index + 1}</h2>
                            <div className='flex gap-2 items-center'>
                                <Button size='icon' className='rounded-full' variant='secondary' onClick={() => handleMoveUp(index)} disabled={index === 0}><ChevronUp /></Button>
                                <Button size='icon' className='rounded-full' variant='secondary' onClick={() => handleMoveDown(index)} disabled={index === achievments.achievmentsDetail.length - 1}><ChevronDown /></Button>
                                <Button onClick={() => handleRemoveAchievmentsDetail(index)}>Remove detail</Button>
                            </div>
                        </div>
                        <div className="flex w-full space-x-8">
                            <div className="w-96 space-y-1">
                                <Label htmlFor={`icon${index}`}>Choose Icon</Label>
                                <Select id={`icon${index}`} value={detail.icon || ''} onValueChange={(e) => handleInputChange('icon', e, index)}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select an Icon" />
                                    </SelectTrigger>
                                    <SelectContent >
                                        <SelectItem value="award"><div className='flex flex-row gap-4 p-1'><Award size={20} /> Award</div></SelectItem>
                                        <SelectItem value="certification"><div className='flex flex-row gap-4 p-1'><FileBadge size={20} /> Certification</div></SelectItem>
                                        <SelectItem value="medal"><div className='flex flex-row gap-4 p-1'><Medal size={20} />Medal</div></SelectItem>
                                        <SelectItem value="trophy"><div className='flex flex-row gap-4 p-1'><Trophy size={20} />Trophy</div></SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="w-full space-y-1">
                                <Label htmlFor={`detail${index}`}>Mention Detail</Label>
                                <Input id={`detail${index}`} value={detail.detail || ''} onChange={(e) => handleInputChange('detail', e.target.value, index)} />
                            </div>
                        </div>
                        <div className="grid w-full grid-cols-1">
                            <div className="space-y-1">
                                <Label htmlFor={`certificateLink${index}`}>Certificate Link</Label>
                                <Input id={`certificateLink${index}`} value={detail.certificateLink || ''} onChange={(e) => handleInputChange('certificateLink', e.target.value, index)} />
                            </div>
                        </div>
                    </div>
                ))}
            </CardContent>
            <CardFooter className='flex flex-col gap-4 w-fit items-start'>
                <Button onClick={handleAddAchievmentsDetail}>Add Achievments Detail</Button>
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

export default Achievments