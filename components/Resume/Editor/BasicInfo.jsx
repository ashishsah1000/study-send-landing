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
import { useResume } from '@/context/ResumeProvider'
import { Icons } from '@/components/ui/icons'
import { useToast } from '@/components/ui/use-toast'

const BasicInfo = () => {
    const { toast } = useToast()
    const [loading, setLoading] = useState(false);
    const { resumeData, updateResumeData } = useResume();

    const [basicInfo, setBasicInfo] = useState({
        name: '',
        degree: '',
        branch: '',
        lookingFor: '',
        phone: '',
        email: '',
        linkedin: '',
        github: '',
        leetcode: '',
        gfg: '',
        codechef: '',
        codeforces: '',
        leetcodeLink: '',
        gfgLink: '',
        codechefLink: '',
        codeforcesLink: ''
    });

    useEffect(() => {
        setLoading(true)
        if (resumeData.basicInfo) {
            setBasicInfo(resumeData.basicInfo);
        }
        setLoading(false)
    }, [resumeData.basicInfo])

    const handleInputChange = (name, value) => {
        setBasicInfo(prevBasicInfo => ({
            ...prevBasicInfo,
            [name]: value,
        }));
    };

    const handleSave = () => {
        setLoading(true)
        updateResumeData('basicInfo', basicInfo);
        setLoading(false)
        toast({
            title: "Basic Info saved successfully",
        })
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Basic Info</CardTitle>
                <CardDescription>
                    Make changes to your basic info here, Click save when you&apos;re done.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="grid w-full grid-cols-1">
                    <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" value={basicInfo.name} onChange={(e) => handleInputChange('name', e.target.value)} />
                    </div>
                </div>
                <div className="grid w-full grid-cols-2 space-x-8">
                    <div className="space-y-1">
                        <Label htmlFor="degree">Degree</Label>
                        <Input id="degree" value={basicInfo.degree} onChange={(e) => handleInputChange('degree', e.target.value)} />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="branch">Branch</Label>
                        <Input id="branch" value={basicInfo.branch} onChange={(e) => handleInputChange('branch', e.target.value)} />
                    </div>
                </div>
                <div className="grid w-full grid-cols-1">
                    <div className="space-y-1">
                        <Label htmlFor="lookingFor">Looking For</Label>
                        <Input id="lookingFor" value={basicInfo.lookingFor} onChange={(e) => handleInputChange('lookingFor', e.target.value)} />
                    </div>
                </div>
                <div className="grid w-full grid-cols-2 space-x-8">
                    <div className="space-y-1">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" value={basicInfo.phone} onChange={(e) => handleInputChange('phone', e.target.value)} />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" value={basicInfo.email} onChange={(e) => handleInputChange('email', e.target.value)} />
                    </div>
                </div>
                <div className="grid w-full grid-cols-2 space-x-8">
                    <div className="space-y-1">
                        <Label htmlFor="linkedin">Linkedin</Label>
                        <Input id="linkedin" value={basicInfo.linkedin} onChange={(e) => handleInputChange('linkedin', e.target.value)} />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="github">Github</Label>
                        <Input id="github" value={basicInfo.github} onChange={(e) => handleInputChange('github', e.target.value)} />
                    </div>
                </div>
                <div className="grid w-full grid-cols-2 space-x-8">
                    <div className="space-y-1">
                        <Label htmlFor="leetcode">Leetcode Profile Link (if any)</Label>
                        <Input id="leetcode" placeholder='Solved More than 650+ problems' value={basicInfo.leetcode} onChange={(e) => handleInputChange('leetcode', e.target.value)} />
                        <Input id="leetcodelink" placeholder='Profile Link' value={basicInfo.leetcodeLink} onChange={(e) => handleInputChange('leetcodeLink', e.target.value)} />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="gfg">Geek for Geeks Profile Link (if any)</Label>
                        <Input id="gfg" placeholder='Solved More than 650+ problems' value={basicInfo.gfg} onChange={(e) => handleInputChange('gfg', e.target.value)} />
                        <Input id="gfglink" placeholder='Profile Link' value={basicInfo.gfgLink} onChange={(e) => handleInputChange('gfgLink', e.target.value)} />
                    </div>
                </div>
                <div className="grid w-full grid-cols-2 space-x-8">
                    <div className="space-y-1">
                        <Label htmlFor="codechef">Codechef Profile Link (if any)</Label>
                        <Input id="codechef" placeholder='Solved More than 650+ problems' value={basicInfo.codechef} onChange={(e) => handleInputChange('codechef', e.target.value)} />
                        <Input id="codecheflink" placeholder='Profile Link' value={basicInfo.codechefLink} onChange={(e) => handleInputChange('codechefLink', e.target.value)} />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="codeforces">Codeforces Profile Link (if any)</Label>
                        <Input id="codeforces" placeholder='Solved More than 650+ problems' value={basicInfo.codeforces} onChange={(e) => handleInputChange('codeforces', e.target.value)} />
                        <Input id="codeforceslink" placeholder='Profile Link' value={basicInfo.codeforcesLink} onChange={(e) => handleInputChange('codeforcesLink', e.target.value)} />
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

export default BasicInfo