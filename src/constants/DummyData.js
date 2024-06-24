import { IMAGES } from '../assets/images'
import { SVG } from '../assets/svg'
import { SCREEN } from './enum'
import { COLOR } from '../utils/StyleGuides'

export const onBoardingData = [
    { title: 'Readay', text: 'Helps you organize your school life.', image: IMAGES.READ, },
    { title: 'Dashboard', text: 'Overview all upcoming changes and events!', image: IMAGES.EVENTS },
    { title: 'Timetable', text: 'Retrieve your timetable including recent changes in real-time!', image: IMAGES.TIMETABLE },
    { title: 'Reminders', text: 'Be up-to-date with homework, upcoming exams and more!', image: IMAGES.REMAINDER },
    { title: 'Push-Notifications', text: 'Never miss any changes of plan or other upcomings!', image: IMAGES.NOTIFICATION },
]

export const featureData = [
    { text: 'Timetable', image: IMAGES.FEATURE_1, route: SCREEN.TIME_TABLE },
    { text: 'Reminders', image: IMAGES.FEATURE_2, route: SCREEN.REMINDER },
    { text: 'More', image: IMAGES.FEATURE_3, route: SCREEN.PROFILE },
]

export const profileData = [
    { text: 'Support', icon: SVG.Link },
    { text: '@readay-official Instagram', icon: SVG.Link },
    { text: 'Readay Discord', icon: SVG.Link },
    { text: 'Rate us', icon: SVG.Star },
    { text: 'Recommend us', icon: SVG.Gift },
]

export const versionData = [
    { text: 'About this version', icon: SVG.About, route: SCREEN.NEWS_SCREEN },
    { text: 'Terms and Conditions', icon: SVG.TermsIcon, route: SCREEN.TERM_CONDITION },
    { text: 'Privacy Policy', icon: SVG.TermsIcon, route: SCREEN.PRIVACY },
]

export const newsData = [
    { title: 'Dashboard', text: 'Overview all upcoming changes and events!', image: IMAGES.DASH_DOARD },
    { title: 'Timetable', text: 'Retrieve your timetable including recent changes in real-time!', image: IMAGES.TIME_TABLE },
    { title: 'Reminders', text: 'Be up-to-date with homework, upcoming exams and more!', image: IMAGES.REMAINDER_MESSAGE },
    { title: 'Notifications', text: 'Never miss any changes of plan or other upcomings!', image: IMAGES.NOFI_MESSAGE },
]

export const timeTableData = [
    { time: '8:00', subject: 'Math', desc: 'Miller', pageNumber: '210' },
    { time: '8:45', subject: 'Math', desc: 'Miller', pageNumber: '210' },
    { time: '9:50', subject: 'German', desc: 'Waldorf', pageNumber: '115' },
    {
        time: '10:35', subject: 'German', desc: 'Waldorf', pageNumber: '115',
        extraTasks: {
            title: 'Homework',
            assignments: ['read page 40-78', 'do task 4a', 'do task 7b']
        }
    },
]

export const reminderData = [
    { time: '8:00', subject: 'Math', title: 'Material', color: COLOR.blue, desc: 'bring a book with you' },
    {
        time: '10:35', subject: 'Sport', title: 'Hausaufgaben',
        extraTasks: ['read page 40-78', 'do task 4a', 'do task 7b']
    },
]