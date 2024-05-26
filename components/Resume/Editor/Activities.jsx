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

const Activities = () => {
    const { toast } = useToast()
    const [loading, setLoading] = useState(false);
    const { resumeData, updateResumeData } = useResume();

    const [activities, setActivities] = useState({
        title: 'Activities',
        activitiesDetail: []
    });

    useEffect(() => {
        setLoading(true)
        if (resumeData.activities) {
            setActivities(resumeData.activities);
        }
        setLoading(false)
    }, [resumeData.activities])

    const handleInputChange = (name, value, index) => {
        setActivities(prevActivities => ({
            ...prevActivities,
            activitiesDetail: prevActivities.activitiesDetail.map((detail, i) => {
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

    const handleAddActivitiesDetail = () => {
        setActivities(prevActivities => ({
            ...prevActivities,
            activitiesDetail: [...(prevActivities.activitiesDetail || []), {}]
        }));
    };

    const handleRemoveActivitiesDetail = (index) => {
        setActivities(prevActivities => ({
            ...prevActivities,
            activitiesDetail: prevActivities?.activitiesDetail.filter((_, i) => i !== index)
        }));
    };

    const handleAddSpecialPoint = (index) => {
        setActivities(prevActivities => ({
            ...prevActivities,
            activitiesDetail: prevActivities.activitiesDetail.map((detail, i) => {
                if (i === index) {
                    return {
                        ...detail,
                        aPoint: [...(detail.aPoint || []), ''] // Add an empty special point
                    };
                }
                return detail;
            })
        }));
    };

    const handleRemoveSpecialPoint = (expIndex, pointIndex) => {
        setActivities(prevActivities => ({
            ...prevActivities,
            activitiesDetail: prevActivities.activitiesDetail.map((detail, i) => {
                if (i === expIndex) {
                    return {
                        ...detail,
                        aPoint: detail.aPoint.filter((_, j) => j !== pointIndex) // Remove the special point
                    };
                }
                return detail;
            })
        }));
    };

    const handleEditSpecialPoint = (expIndex, pointIndex, newValue) => {
        setActivities(prevActivities => ({
            ...prevActivities,
            activitiesDetail: prevActivities.activitiesDetail.map((detail, i) => {
                if (i === expIndex) {
                    return {
                        ...detail,
                        aPoint: detail.aPoint.map((point, j) => j === pointIndex ? newValue : point) // Edit the special point
                    };
                }
                return detail;
            })
        }));
    };

    const handleMoveUp = (index) => {
        if (index === 0) return; // Cannot move further up
        setActivities(prevActivities => {
            const updatedActivitiesDetail = [...prevActivities.activitiesDetail];
            const temp = updatedActivitiesDetail[index];
            updatedActivitiesDetail[index] = updatedActivitiesDetail[index - 1];
            updatedActivitiesDetail[index - 1] = temp;
            return {
                ...prevActivities,
                activitiesDetail: updatedActivitiesDetail
            };
        });
    };

    const handleMoveDown = (index) => {
        if (index === activities.activitiesDetail.length - 1) return; // Cannot move further down
        setActivities(prevActivities => {
            const updatedActivitiesDetail = [...prevActivities.activitiesDetail];
            const temp = updatedActivitiesDetail[index];
            updatedActivitiesDetail[index] = updatedActivitiesDetail[index + 1];
            updatedActivitiesDetail[index + 1] = temp;
            return {
                ...prevActivities,
                activitiesDetail: updatedActivitiesDetail
            };
        });
    };

    const handleSave = () => {
        setLoading(true)
        console.log(activities)
        updateResumeData('activities', activities);
        setLoading(false)
        toast({
            title: "Activities Details saved successfully",
        })
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Activities</CardTitle>
                <CardDescription>
                    Make changes to your activities here, Click save when you&apos;re done.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="grid w-full grid-cols-1">
                    <div className="space-y-1">
                        <Label htmlFor="title">Section Title</Label>
                        <Input id="title" value={activities.title} onChange={(e) => setActivities(prevActivities => ({ ...prevActivities || {}, title: e.target.value }))} />
                    </div>
                </div>
                {activities.activitiesDetail?.map((detail, index) => (
                    <div key={index} className="flex w-full flex-col gap-4 pt-6">
                        <div className='w-full flex items-center justify-between'>
                            <h2 className='font-semibold text-md'>Activity Detail {index + 1}</h2>
                            <div className='flex gap-2 items-center'>
                                <Button size='icon' className='rounded-full' variant='secondary' onClick={() => handleMoveUp(index)} disabled={index === 0}><ChevronUp /></Button>
                                <Button size='icon' className='rounded-full' variant='secondary' onClick={() => handleMoveDown(index)} disabled={index === activities.activitiesDetail.length - 1}><ChevronDown /></Button>
                                <Button onClick={() => handleRemoveActivitiesDetail(index)}>Remove detail</Button>
                            </div>
                        </div>
                        <div className="grid w-full grid-cols-2 space-x-8">
                            <div className="space-y-1">
                                <Label htmlFor={`organisationName${index}`}>Organisation Name</Label>
                                <Input id={`organisationName${index}`} value={detail.organisationName || ''} onChange={(e) => handleInputChange('organisationName', e.target.value, index)} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor={`role${index}`}>Role</Label>
                                <Input id={`role${index}`} value={detail.role || ''} onChange={(e) => handleInputChange('role', e.target.value, index)} />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            {detail.aPoint && detail.aPoint.map((point, pointIndex) => (
                                <div key={pointIndex} className="grid w-full grid-cols-1">
                                    <div className="space-y-1">
                                        <Label htmlFor={`aPoint${index}-${pointIndex}`}>Special Point {pointIndex + 1}</Label>
                                        <div className='flex gap-4 items-center'>
                                            <Input id={`aPoint${index}-${pointIndex}`} value={point} onChange={(e) => handleEditSpecialPoint(index, pointIndex, e.target.value)} />
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
                <Button onClick={handleAddActivitiesDetail}>Add Activities Detail</Button>
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

export default Activities