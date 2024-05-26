'use client'
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font, Link } from '@react-pdf/renderer';
import Watermark from './Watermark';

Font.register({
    family: 'Montserrat',
    fonts: [
        {
            src: '/fonts/Montserrat-Thin.ttf', // Thin
            fontWeight: 100,
        },
        {
            src: '/fonts/Montserrat-ExtraLight.ttf', // Extra-Light
            fontWeight: 200,
        },
        {
            src: '/fonts/Montserrat-Light.ttf', // Light
            fontWeight: 300,
        },
        {
            src: '/fonts/Montserrat-Regular.ttf', // Regular
            fontWeight: 400,
        },
        {
            src: '/fonts/Montserrat-Medium.ttf', // Medium
            fontWeight: 500,
        },
        {
            src: '/fonts/Montserrat-SemiBold.ttf', // Semi-Bold
            fontWeight: 600,
        },
        {
            src: '/fonts/Montserrat-Bold.ttf', // Bold
            fontWeight: 700,
        },
        {
            src: '/fonts/Montserrat-ExtraBold.ttf', // Extra-Bold
            fontWeight: 800,
        },
        {
            src: '/fonts/Montserrat-Black.ttf', // Black
            fontWeight: 900,
        },
    ],
});

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        padding: 20,
        flexDirection: 'column',
    },
    container: {
        width: '100%',
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 6,
    },
    image: {
        width: 40,
    },
    icon: {
        width: 10,
    },
    headerText: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    subHeader: {
        fontSize: 10,
        fontWeight: 'semibold',
    },
    contactInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        flexWrap: 'wrap'
    },
    contactItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 4,
        fontSize: 8,
        flexShrink: 1,
    },
    sectionTitle: {
        fontSize: 10,
        fontWeight: 'semibold',
        textTransform: 'uppercase',
        marginBottom: 4,
    },
    sectionContent: {
        flexDirection: 'column',
        gap: 8,
        width: '100%'
    },
    sectionDetails: {
        flexDirection: 'column',
        gap: 8,
        width: '100%'
    },
    sectionItem: {
        flexDirection: 'column',
        gap: 4,
        width: '100%'
    },
    subSectionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    text: {
        fontSize: 8,
        flexShrink: 1,
        flexWrap: 'wrap',
        flexShrink: 1,
        flexGrow: 0,
        flexBasis: 'auto',
        wordBreak: 'break-word',
    },
    link: {
        textDecoration: 'underline',
        color: '#000',
    },
    sectionDivider: {
        borderBottomWidth: 1,
        marginBottom: 2,
    },
    subSectionDivider: {
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        borderBottomStyle: 'dashed',
        marginTop: 2,
        marginBottom: 2,
    },
});

const PDFDocument2 = ({ resumeData }) => {
    const { name, degree, branch, lookingFor, phone, email, linkedin, github, leetcode, leetcodeLink, gfg, gfgLink, codechef, codechefLink, codeforces, codeforcesLink } = resumeData?.basicInfo;
    const { title: educationTitle, educationDetail } = resumeData?.education;
    const { title: experiencesTitle, experiencesDetail } = resumeData?.experiences;
    const { title: achievmentsTitle, achievmentsDetail } = resumeData?.achievments;
    const { title: hobbiesTitle, hobbiesDetail } = resumeData?.hobbies;
    const { title: skillsTitle, skillsDetail } = resumeData?.skills;
    const { title: projectsTitle, projectsDetail } = resumeData?.projects;
    const { title: activitiesTitle, activitiesDetail } = resumeData?.activities;

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Watermark text="BIT Unfiltered" />
                <View style={styles.container}>
                    {/* Basic Info */}
                    <View style={styles.header}>
                        <View style={styles.headerText}>
                            <Text style={styles.name}>{name || 'Alice Wonderland'}</Text>
                            <Text style={styles.subHeader}>{degree || 'B.Tech'}, {branch || 'Information Technology'} | {lookingFor ? `Looking for ${lookingFor}` : 'Looking for web developer jobs'}</Text>
                            <View style={styles.contactInfo}>
                                <View style={styles.contactItem}><Image style={styles.icon} src="/icon/at-sign.png" alt="icon" /><Text>{email || 'alice@gmail.com'}</Text></View>
                                <View style={styles.contactItem}><Image style={styles.icon} src="/icon/phone.png" alt="icon" /><Text>{phone || '+91 0987654321'}</Text></View>
                                <View style={styles.contactItem}><Image style={styles.icon} src="/icon/linkedin.png" alt="icon" /><Text>{linkedin || 'https://linkedin.com/in/alice'}</Text></View>
                                <View style={styles.contactItem}><Image style={styles.icon} src="/icon/github.png" alt="icon" /><Text>{github || 'https://github.com/alice'}</Text></View>
                                {leetcodeLink && <View style={styles.contactItem}><Image style={styles.icon} src="/icon/leetcode.png" alt="icon" />
                                    <Text style={styles.text}>
                                        <Link src={leetcodeLink} style={styles.link}>
                                            {'Leetcode'}
                                        </Link>
                                    </Text>
                                </View>}
                                {codeforcesLink && <View style={styles.contactItem}><Image style={styles.icon} src="/icon/codeforces.png" alt="icon" />
                                    <Text style={styles.text}>
                                        <Link src={codeforcesLink} style={styles.link}>
                                            {'CodeForces'}
                                        </Link>
                                    </Text>
                                </View>}
                            </View>
                        </View>
                    </View>

                    {/* Sections */}
                    <View style={styles.sectionContent}>
                        {/* Education */}
                        <View style={styles.sectionDetails}>
                            <View style={styles.eachSection}>
                                <Text style={styles.sectionTitle}>{educationTitle || 'Education'}</Text>
                                <View style={styles.sectionDivider} />
                            </View>
                            {educationDetail?.map((detail, index) => (
                                <View key={index} style={styles.sectionItem}>
                                    <View style={styles.subSectionItem}>
                                        <Text style={[styles.text, { fontWeight: 'semibold' }]}>{detail.instituteName || 'Birsa Institute of Technology, Sindri'}</Text>
                                        <Text style={[styles.text, { fontWeight: 'semibold' }]}>{detail.startDate || 'Aug 2021'} - {detail.endDate || 'June 2025'}</Text>
                                    </View>
                                    <View style={styles.subSectionItem}>
                                        <View style={styles.contactItem}>
                                            <Text style={styles.text}>{detail.degree ? detail.degree : 'B.Tech, Electrical Engineering'}</Text>
                                            <Text style={styles.text}>-</Text>
                                            <Text style={[styles.text, { fontWeight: 'semibold' }]}>{detail.cgpa ? detail.cgpa : 'CGPA : 8.7'}</Text>
                                        </View>
                                        <Text style={styles.text}>{detail.location ? detail.location : 'Dhanbad'}</Text>
                                    </View>
                                    <View style={styles.subSectionDivider} />
                                </View>
                            ))}
                        </View>

                        {/* Experience */}
                        <View style={styles.sectionDetails}>
                            <View style={styles.eachSection}>
                                <Text style={styles.sectionTitle}>{experiencesTitle || 'Experience'}</Text>
                                <View style={styles.sectionDivider} />
                            </View>
                            {experiencesDetail?.map((detail, index) => (
                                <View key={index} style={styles.sectionItem}>
                                    <View style={[styles.subSectionItem, { fontWeight: 'semibold', fontSize: 8 }]}>
                                        <Text style={styles.text}>{detail.company || 'Google Summer of Code 2021 - Developer'}</Text>
                                        <Text style={styles.text}>{detail.startDate || 'Aug 2021'} - {detail.endDate || 'June 2025'}</Text>
                                    </View>
                                    <View style={styles.subSectionItem}>
                                        <View style={styles.contactItem}>
                                            <Text style={styles.text}>{detail.role || 'The KDE Community'}</Text>
                                            <Text style={styles.text}>|</Text>
                                            <Text style={[styles.text, { fontWeight: 'semibold' }]}>{detail.technologies || 'HTML, CSS, Javascript'}</Text>
                                        </View>
                                        <Text style={styles.text}>{detail.location || 'Bangalore'}</Text>
                                    </View>
                                    {detail.ePoint?.map((point, index) => (
                                        <View key={index} style={styles.contactItem}>
                                            <Image style={styles.icon} src="/icon/dot.png" alt="icon" />
                                            <Text style={styles.text}>{point}</Text>
                                        </View>
                                    ))}
                                    <View style={styles.subSectionDivider} />
                                </View>
                            ))}
                        </View>

                        {/* Projects */}
                        <View style={styles.sectionDetails}>
                            <View style={styles.eachSection}>
                                <Text style={styles.sectionTitle}>{projectsTitle || 'Projects'}</Text>
                                <View style={styles.sectionDivider} />
                            </View>
                            {projectsDetail?.map((detail, index) => (
                                <View key={index} style={styles.sectionItem}>
                                    <View style={[styles.contactItem, { fontWeight: 'semibold' }]}>
                                        <Text style={styles.text}>
                                            <Link src={detail.projectLink} style={styles.link}>
                                                {detail.projectName || 'Sudo'}
                                            </Link>
                                        </Text>
                                        <Text style={styles.text}>|</Text>
                                        <Text style={styles.text}>{detail.technologies || 'HTML, CSS, Javascript'}</Text>
                                    </View>
                                    {detail.pPoint?.map((point, index) => (
                                        <View key={index} style={styles.contactItem}>
                                            <Image style={styles.icon} src="/icon/dot.png" alt="icon" />
                                            <Text style={styles.text}>{point || 'A simple super-user authentication application for Linux systems which can be used with a companion Android App'}</Text>
                                        </View>
                                    ))}
                                    <View style={styles.subSectionDivider} />
                                </View>
                            ))}
                        </View>

                        {/* Skills */}
                        <View style={styles.sectionDetails}>
                            <View style={styles.eachSection}>
                                <Text style={styles.sectionTitle}>{skillsTitle || 'Skills'}</Text>
                                <View style={styles.sectionDivider} />
                            </View>

                            {skillsDetail?.map((detail, index) => (
                                <View key={index} style={styles.sectionItem}>
                                    <Text style={[styles.text, { fontWeight: 'semibold' }]}>{detail.sTitle || 'Computer Skills'}:</Text>
                                    <Text style={styles.text}>{detail.technologies || 'Confident with C, C++, Java, Boost C++, Qt, Make/CMake, Python, Bash, Rust, HTML/CSS, SQL experienced.'}</Text>
                                    <View style={styles.subSectionDivider} />
                                </View>
                            ))}
                        </View>

                        {/* Coding profile */}
                        <View style={styles.sectionDetails}>
                            <View style={styles.eachSection}>
                                <Text style={styles.sectionTitle}>{'Coding Profile'}</Text>
                                <View style={styles.sectionDivider} />
                            </View>
                            <View style={styles.sectionItem}>
                                {leetcodeLink && <View style={styles.contactItem}><Image style={styles.icon} src="/icon/leetcode.png" alt="icon" />
                                    <Text style={styles.text}>
                                        <Link src={leetcodeLink} style={styles.link}>
                                            {leetcode || 'Leetcode'}
                                        </Link>
                                    </Text>
                                </View>}
                                {gfgLink && <View style={styles.contactItem}><Image style={styles.icon} src="/icon/gfg.png" alt="icon" />
                                    <Text style={styles.text}>
                                        <Link src={gfgLink} style={styles.link}>
                                            {gfg || 'GFG'}
                                        </Link>
                                    </Text>
                                </View>}
                                {codechefLink && <View style={styles.contactItem}><Image style={styles.icon} src="/icon/codechef.png" alt="icon" />
                                    <Text style={styles.text}>
                                        <Link src={codechefLink} style={styles.link}>
                                            {codechef || 'Codechef'}
                                        </Link>
                                    </Text>
                                </View>}
                                {codeforcesLink && <View style={styles.contactItem}><Image style={styles.icon} src="/icon/codeforces.png" alt="icon" />
                                    <Text style={styles.text}>
                                        <Link src={codeforcesLink} style={styles.link}>
                                            {codeforces || 'CodeForces'}
                                        </Link>
                                    </Text>
                                </View>}
                            </View>
                        </View>

                        {/* Achievements */}
                        <View style={styles.sectionDetails}>
                            <View style={styles.eachSection}>
                                <Text style={styles.sectionTitle}>{achievmentsTitle || 'Achievements'}</Text>
                                <View style={styles.sectionDivider} />
                            </View>
                            <View style={styles.sectionItem}>
                                {achievmentsDetail?.map((detail, index) => (
                                    <View key={index} style={styles.contactItem}>
                                        {detail.icon === 'award' && <Image style={styles.icon} src="/icon/award.png" alt="icon" />}
                                        {detail.icon === 'certification' && <Image style={styles.icon} src="/icon/file-badge.png" alt="icon" />}
                                        {detail.icon === 'medal' && <Image style={styles.icon} src="/icon/medal.png" alt="icon" />}
                                        {detail.icon === 'trophy' && <Image style={styles.icon} src="/icon/trophy.png" alt="icon" />}
                                        <Text style={styles.text}>
                                            <Link src={detail.certificateLink} style={styles.link}>
                                                {detail.detail || 'Rank 1 in CodeChef May Lunchtime 2021'}
                                            </Link>
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </View>

                        {/* Activities */}
                        <View style={styles.sectionDetails}>
                            <View style={styles.eachSection}>
                                <Text style={styles.sectionTitle}>{activitiesTitle || 'Activities'}</Text>
                                <View style={styles.sectionDivider} />
                            </View>
                            {activitiesDetail?.map((detail, index) => (
                                <View key={index} style={styles.sectionItem}>
                                    <View style={[styles.contactItem, { fontWeight: 'semibold' }]}>
                                        <Text style={styles.text}>{detail.organisationName || 'IETE SF, BIT Sindri'}</Text>
                                        <Text style={styles.text}>-</Text>
                                        <Text style={styles.text}>{detail.role || 'Secretary'}</Text>
                                    </View>
                                    {detail.aPoint?.map((point, index) => (
                                        <View key={index} style={styles.contactItem}>
                                            <Image style={styles.icon} src="/icon/dot.png" alt="icon" />
                                            <Text style={styles.text}>{point || 'Served as the secretary of official coding club of BIT Sindri'}</Text>
                                        </View>
                                    ))}
                                    <View style={styles.subSectionDivider} />
                                </View>
                            ))}
                        </View>

                        {/* Hobbies & Interest */}
                        <View style={styles.sectionDetails}>
                            <View style={styles.eachSection}>
                                <Text style={styles.sectionTitle}>{hobbiesTitle || 'Hobbies & Interests'}</Text>
                                <View style={styles.sectionDivider} />
                            </View>
                            <Text style={styles.text}>{hobbiesDetail}</Text>
                        </View>

                    </View>
                </View>
            </Page>
        </Document >
    );
};

export default PDFDocument2;
