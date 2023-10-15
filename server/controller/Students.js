const express = require('express');
const Student = require('../models/Student');
const Parent = require('../models/Parent');
const StudentAudit = require('../models/StudentAudit');


const createStudent = async(req,res)=>{
    const data = req.body;
    console.log(data)
    const student = {
        name: data.name,
        id: data.id,
        phoneNo: data.phoneNo,
        address: data.address,
        gender: data.gender,
        age: data.age,
        depId: data.depId,
        sem: data.sem,
        CGPA: data.CGPA
    };

    // const parentData = req.body;
    // create a parent entry as well 

    const savedStudent = await Student.create(student);

    const studentAudit = {
        message: `Student ${savedStudent.name} has been Created`,
        stuId: savedStudent._id,
        parentAuditId: data.auditId,
        method: "Create",
        oldState: {

        },
        newState: {
            student
        }
    }
    const savedStudentAudit = await StudentAudit.create(studentAudit)
    console.log("saved : ",savedStudent);
    

    if(savedStudent){
        return res.status(200).json({message : savedStudent});
    }else{
        return res.status(404).json({message : "error !"});
    }

};

const getStudents = async(req,res)=>{
    const Students = await Student.find();
    return res.status(200).json({message : Students});
};


module.exports = {
    getStudents,
    createStudent
}