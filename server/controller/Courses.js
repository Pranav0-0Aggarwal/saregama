const express = require('express');
const Course = require('../models/Course');

const createCourse = async(req,res)=>{
    console.log("hello");
    const data = req.body;
    console.log(data)

    const course = {
        courseId: data.courseId,
        name: data.name,
        syllabus: data.syllabus
    };

    const savedCourse = await Course.create(course);
    savedCourse.save();

    if(savedCourse){
        console.log(`Course is created !!`);
        return res.status(200).json({message : `added user ${savedCourse}`});
    }else{
        console.log(`error while course been created !!`);
    }
};

const getCourses = async (req,res)=>{
    var courses = await Course.find({})
    return res.status(200).json(courses)
};

module.exports = {
    getCourses,
    createCourse
}