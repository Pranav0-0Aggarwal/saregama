const express = require('express');
const Department = require('../models/Department');


const createDepartment = async(req,res)=>{
    const data = req.body;
    console.log(data)
    const department = {
        name: data.name,
        location: data.location,
        coursesList : []
    };

    const savedDepartment = await Department.create(department);
    console.log("saved : ",savedDepartment);
    // const parentData = req.body;
    // create a parent entry as well 

    if(savedDepartment){
        return res.status(200).json({message : savedDepartment});
    }else{
        return res.status(404).json({message : "error !"});
    }

};

const getDepartments = async(req,res)=>{
    const Departments = await Department.find();
    return res.status(200).json({message : Departments});
};


module.exports = {
    getDepartments,
    createDepartment
}