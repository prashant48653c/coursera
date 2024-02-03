import { View, Text, Button, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { client } from '../../Utils/KindConfig';
import { AuthContext } from '../../../App';
import Header from '../../components/Header';
import Categories from '../../components/Categories';
import CourseList from '../../components/CourseList';
import { getCategory } from '../../api/api';
import SectionHeading from '../../components/SectionHeading';

export default function HomeScreen() {

// const [categories, setcategories] = useState([])
  const {auth,setauth}=useContext(AuthContext)
  const handleLogout = async () => {
    const loggedOut = await client.logout();
    if (loggedOut) {
      setauth(false)
       console.log("Logout user")
    }
};

let categories=[
  {
    _id:1,
    logo:"https://www.safalpoudel.me/safal.png",
    name:"React"
  },{
    _id:2,
    logo:"https://www.safalpoudel.me/safal.png",
    name:"Next"
  },{
    _id:3,
    logo:"https://www.safalpoudel.me/safal.png",
    name:"Vite"
  },{
    _id:4,
    logo:"https://www.safalpoudel.me/safal.png",
    name:"Vue"
  },{
    _id:5,
    logo:"https://logowik.com/content/uploads/images/nextjs7685.logowik.com.webp",
    name:"Java"
  },
]

// Dummy data for categories
let courses=[{
  id:1,
  name:"React Native Full Course for Begineer",
  thumbnail:"https://i.ytimg.com/vi/XxXyfkrP298/hqdefault.jpg",
  teacher:"Safal Poudel",
  teacherImg:"https://www.safalpoudel.me/safal.png",
  status:"Free",
  type:"mob",
  videoUrl: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  desc:"Master Next.js: Building Dynamic Web Applications is an immersive and comprehensive online course designed to elevate your skills in modern web development. Whether you're a beginner looking to dive into the world of React framework or an experienced developer seeking to enhance your expertise, this course offers a step-by-step journey through the powerful features and functionalities of Next.js."
},{
  id:2,
  name:"Next Js Full Course for Begineer",
  thumbnail:"https://fireship.io/courses/nextjs/img/featured.png",
  teacher:"Jasmin Rijal",
  teacherImg:"https://www.safalpoudel.me/safal.png",
  status:"Paid",
  type:"web",
  videoUrl: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",



},
{
  id:3,
  name:"Deep Learning Full Course for Begineer",
  thumbnail:"https://www.classcentral.com/report/wp-content/uploads/2022/04/Artificial-Intelligence-Featured-Image.png",
  teacher:"Shakti KC",
  teacherImg:"https://www.safalpoudel.me/safal.png",
  status:"Free",
  type:"ai",
  videoUrl: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",



},
{
  id:4,
  name:"Flutter Full Course for Intermediate Developers",
  thumbnail:"https://www.classcentral.com/report/wp-content/uploads/2022/09/BCG-Flutter-Featured-Banner.png",
  teacher:"Sailendra Shrestha",
  teacherImg:"https://www.safalpoudel.me/safal.png",
  status:"Paid",
  type:"mob",
  videoUrl: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",



},
{
  id:5,
  name:"Python & AI Full Course for Intermediate Developers",
  thumbnail:"https://www.elegantthemes.com/blog/wp-content/uploads/2023/12/best-ai-courses-featured-img.jpg",
  teacher:"Avinash Belbase",
  teacherImg:"https://www.safalpoudel.me/safal.png",
  status:"Paid",
  type:"ai",
  videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",



},

]

const filterCourse=(tag)=>{
  const allCourse=courses.filter((course)=> course.type.includes(tag))
 
  return allCourse
}

const filterCourseByStatus=(tag)=>{
  const allCourse=courses.filter((course)=> course.status.includes(tag))
 
  return allCourse
}

 
  return (
    <ScrollView style={{padding:10,paddingVertical:20}}>
    
      {/* <Button title='Logout' onPress={handleLogout} /> */}
      <Header/>

      
      <Categories categories={categories} />

      <SectionHeading heading={"Latest Course"}/>
      <CourseList courses={courses}/>

      <SectionHeading heading={"AI/ML Course"}/>
      <CourseList courses={filterCourse("ai")}/>

      <SectionHeading heading={"Mobile Development Course"}/>
      <CourseList courses={filterCourse("mob")}/>

      <SectionHeading heading={"Free Course"}/>
      <CourseList courses={filterCourseByStatus("Free")}/>

    </ScrollView>
  )
}

 