const express = require('express');
const Staff = require('../models/Staff');

const createStaff = async(req,res)=>{
    console.log("hello");
    const data = req.body;
    console.log(data)

    const staff = {
        name: data.name,
        id: data.id,
        phoneNo: data.phoneNo,
        address: data.address,
        gender: data.gender,
        role: data.role,
        roleId: data.roleId,
        salary: data.salary,
        dateOfJoining: data.dateOfJoining
    };

    const savedStaff = await Staff.create(staff);
    savedStaff.save();

    if(savedStaff){
        console.log(`Staff is created !!`);
        return res.status(200).json({message : `added user ${savedStaff}`});
    }else{
        console.log(`error while course been created !!`);
    }
};

const getStaffs = async (req,res)=>{
    var staffs = await Staff.find({})
    return res.status(200).json(staffs)
};

module.exports = {
    getStaffs,
    createStaff
}