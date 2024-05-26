'use client'
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font, Link } from '@react-pdf/renderer';

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
        flexDirection: 'row',
    },
    container: {
        flexDirection: 'column',
        gap: 12,
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    image: {
        width: 40,
    },
    icon: {
        width: 10,
    },
    headerText: {
        flexDirection: 'column',
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
        alignItems: 'center',
        gap: 10,
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        fontSize: 8,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 2,
    },
    sectionContent: {
        flexDirection: 'row',
        gap: 10,
        width: '100%'
    },
    leftSection: {
        width: '52%',
        flexDirection: 'column',
        gap: 8,
        paddingRight: 10,
    },
    rightSection: {
        width: '48%',
        flexDirection: 'column',
        gap: 8,
        paddingLeft: 10,
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
    text: {
        fontSize: 8,
        flexWrap: 'wrap',
        wordBreak: 'break-word',
        width: '100%'
    },
    link: {
        textDecoration: 'underline',
        color: '#000',
    },
    sectionDivider: {
        borderBottomWidth: 1,
        marginBottom: 4,
    },
    subSectionDivider: {
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        borderBottomStyle: 'dashed',
        marginTop: 6,
        marginBottom: 6,
    },
});

const PDFDocument1 = ({ resumeData }) => {
    const { name, degree, branch, lookingFor, phone, email, linkedin, github } = resumeData?.basicInfo;
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
                <View style={styles.container}>

                    {/* Basic Info */}
                    <View style={styles.header}>
                        <Image style={styles.image} src="/img/bitlogo.png" alt="logo" />
                        <View style={styles.headerText}>
                            <Text style={styles.name}>{name || 'Alice Wonderland'}</Text>
                            <Text style={styles.subHeader}>{degree || 'B.Tech'}, {branch || 'Information Technology'} | {lookingFor ? `Looking for ${lookingFor}` : 'Looking for web developer jobs'}</Text>
                            <View style={styles.contactInfo}>
                                <View style={styles.contactItem}><Image style={styles.icon} src="/icon/at-sign.png" alt="icon" /><Text>{email || 'alice@gmail.com'}</Text></View>
                                <View style={styles.contactItem}><Image style={styles.icon} src="/icon/phone.png" alt="icon" /><Text>{phone || '+91 0987654321'}</Text></View>
                                <View style={styles.contactItem}><Image style={styles.icon} src="/icon/linkedin.png" alt="icon" /><Text>{linkedin || 'https://linkedin.com/in/alice'}</Text></View>
                                <View style={styles.contactItem}><Image style={styles.icon} src="/icon/github.png" alt="icon" /><Text>{github || 'https://github.com/alice'}</Text></View>
                            </View>
                        </View>
                    </View>

                    {/* Sections */}
                    <View style={styles.sectionContent}>
                        <View style={styles.leftSection}>
                            {/* Education */}
                            <View style={styles.sectionDetails}>
                                <View style={styles.eachSection}>
                                    <Text style={styles.sectionTitle}>{educationTitle || 'Education'}</Text>
                                    <View style={styles.sectionDivider} />
                                </View>
                                {educationDetail?.map((detail, index) => (
                                    <View key={index} style={styles.sectionItem}>
                                        <Text style={styles.text}>{detail.degree || 'B.Tech, Electrical Engineering'}</Text>
                                        <Text style={[styles.text, { fontWeight: 'semibold' }]}>{detail.instituteName || 'Birsa Institute of Technology, Sindri'}</Text>
                                        <View style={styles.contactInfo}>
                                            <View style={styles.contactItem}><Image style={styles.icon} src="/icon/calendar-days.png" alt="icon" /><Text>{detail.startDate || 'Aug 2021'} - {detail.endDate || 'June 2025'}</Text></View>
                                            <View style={styles.contactItem}><Image style={styles.icon} src="/icon/map-pin.png" alt="icon" /><Text>{detail.location || 'Dhanbad'}</Text></View>
                                        </View>
                                        <View key={index} style={styles.contactItem}>
                                            <Image style={styles.icon} src="/icon/dot.png" alt="icon" />
                                            <Text style={styles.text}>{detail.cgpa || 'CGPA: 8.7'}</Text>
                                        </View>
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

                            {/* Achievements */}
                            <View style={[styles.sectionDetails, { marginBottom: 6 }]}>
                                <View style={styles.eachSection}>
                                    <Text style={styles.sectionTitle}>{achievmentsTitle || 'Achievements'}</Text>
                                    <View style={styles.sectionDivider} />
                                </View>
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

                            {/* Hobbies & Interest */}
                            <View style={[styles.sectionDetails, { marginBottom: 6 }]}>
                                <View style={styles.eachSection}>
                                    <Text style={styles.sectionTitle}>{hobbiesTitle || 'Hobbies & Interests'}</Text>
                                    <View style={styles.sectionDivider} />
                                </View>
                                {hobbiesDetail?.split(',')?.map((detail, index) => (
                                    <View key={index} style={styles.contactItem}>
                                        <Image style={styles.icon} src="/icon/dot.png" alt="icon" />
                                        <Text style={styles.text}>{detail}</Text>
                                    </View>
                                ))}
                            </View>

                        </View>

                        <View style={styles.rightSection}>
                            {/* Experience */}
                            <View style={styles.sectionDetails}>
                                <View style={styles.eachSection}>
                                    <Text style={styles.sectionTitle}>{experiencesTitle || 'Experience'}</Text>
                                    <View style={styles.sectionDivider} />
                                </View>
                                {experiencesDetail?.map((detail, index) => (
                                    <View key={index} style={styles.sectionItem}>
                                        <Text style={styles.text}>{detail.company || 'Google Summer of Code 2021 - Developer'}</Text>
                                        <Text style={[styles.text, { fontWeight: 'semibold' }]}>{detail.role || 'The KDE Community'}</Text>
                                        <View style={styles.contactInfo}>
                                            <View style={styles.contactItem}><Image style={styles.icon} src="/icon/calendar-days.png" alt="icon" /><Text>{detail.startDate || 'Aug 2021'} - {detail.endDate || 'June 2025'}</Text></View>
                                            <View style={styles.contactItem}><Image style={styles.icon} src="/icon/map-pin.png" alt="icon" /><Text>{detail.location || 'Bangalore'}</Text></View>
                                        </View>
                                        {detail.ePoint?.map((point, index) => (
                                            <View key={index} style={styles.contactItem}>
                                                <Image style={styles.icon} src="/icon/dot.png" alt="icon" />
                                                <Text style={styles.text}>{point}</Text>
                                            </View>
                                        ))}
                                        <View style={styles.contactItem}>
                                            <Image style={styles.icon} src="/icon/dot.png" alt="icon" />
                                            <Text style={styles.text}>Technologies: <Text style={{ fontWeight: 'bold' }}>{detail.technologies || 'HTML, CSS, Javascript'}</Text></Text>
                                        </View>
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
                                        <Text style={[styles.text, { fontWeight: 'semibold' }]}>
                                            <Link src={detail.projectLink} style={styles.link}>
                                                {detail.projectName || 'Sudo'}
                                            </Link>
                                        </Text>
                                        {detail.pPoint?.map((point, index) => (
                                            <View key={index} style={styles.contactItem}>
                                                <Image style={styles.icon} src="/icon/dot.png" alt="icon" />
                                                <Text style={styles.text}>{point || 'A simple super-user authentication application for Linux systems which can be used with a companion Android App'}</Text>
                                            </View>
                                        ))}
                                        <View style={styles.contactItem}>
                                            <Image style={styles.icon} src="/icon/dot.png" alt="icon" />
                                            <Text style={styles.text}>Technologies: <Text style={{ fontWeight: 'bold' }}>{detail.technologies || 'HTML, CSS, Javascript'}</Text></Text>
                                        </View>
                                        <View style={styles.subSectionDivider} />
                                    </View>
                                ))}
                            </View>

                            {/* Activities */}
                            <View style={styles.sectionDetails}>
                                <View style={styles.eachSection}>
                                    <Text style={styles.sectionTitle}>{activitiesTitle || 'Activities'}</Text>
                                    <View style={styles.sectionDivider} />
                                </View>
                                {activitiesDetail?.map((detail, index) => (
                                    <View key={index} style={styles.sectionItem}>
                                        <Text style={styles.text}>{detail.role || 'Secretary'}</Text>
                                        <Text style={[styles.text, { fontWeight: 'semibold' }]}>{detail.organisationName || 'IETE SF, BIT Sindri'}</Text>
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
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default PDFDocument1;
