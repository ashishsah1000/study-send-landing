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

const Hobbies = () => {
    const { toast } = useToast()
    const [loading, setLoading] = useState(false);
    const { resumeData, updateResumeData } = useResume();

    const [hobbies, setHobbies] = useState({
        title: 'Hobbies & Interest',
        hobbiesDetail: ''
    });

    useEffect(() => {
        setLoading(true)
        if (resumeData.hobbies) {
            setHobbies(resumeData.hobbies);
        }
        setLoading(false)
    }, [resumeData.hobbies])

    const handleInputChange = (name, value) => {
        setHobbies(prev => ({
            ...prev,
            [name]: value
        }))
    };

    const handleSave = () => {
        setLoading(true)
        console.log(hobbies)
        updateResumeData('hobbies', hobbies);
        setLoading(false)
        toast({
            title: "Hobbies Details saved successfully",
        })
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Hobbies</CardTitle>
                <CardDescription>
                    Make changes to your hobbies here, Click save when you&apos;re done.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="grid w-full grid-cols-1">
                    <div className="space-y-1">
                        <Label htmlFor="title">Section Title</Label>
                        <Input id="title" value={hobbies.title} onChange={(e) => handleInputChange('title', e.target.value)} />
                    </div>
                </div>
                <div className="grid w-full grid-cols-1">
                    <div className="space-y-1">
                        <Label htmlFor="hobbie">Hobbies (Seperated with comma)</Label>
                        <Input id="hobbie" value={hobbies.hobbiesDetail} onChange={(e) => handleInputChange('hobbiesDetail', e.target.value)} />
                    </div>
                </div>
            </CardContent>
            <CardFooter>
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

export default Hobbies