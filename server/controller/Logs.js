// Write the code to get all the relevant commits / logs.
const StudentAudit = require('../models/StudentAudit');
const mongoose = require('mongoose');
const Student = require('../models/Student');


const getStudentsAudit = async(req,res)=>{
    const s_id = req.body.id;
    const studentAudits = await StudentAudit.find({stuId: s_id}).sort({ _id : 1 })
    return res.status(200).json({audits : studentAudits});
};

const revertStudentAudit = async(req,res)=>{
    
    const data = req.body;
    const id = data.id;
    const curr_v = data.version;
    
    const currentStudentAudit = await StudentAudit.findOne({version : curr_v});
    
    async function revertBack(currentStudentAudit){
        
        // base case
        if(currentStudentAudit == null){
            
            await Student.deleteMany({ _id: {$exists: true} });
        
            return;
        }
        let parentStudentAudit = null;
        if(currentStudentAudit.parentAuditId != "null"){
            const p_audit_id = currentStudentAudit.parentAuditId
            parentStudentAudit = await StudentAudit.findOne({_id : p_audit_id});
        }
        
        console.log(parentStudentAudit);

        await revertBack(parentStudentAudit)
        // var version = Student.dataSize()+1;
        var method = currentStudentAudit.method;
        var oldState = currentStudentAudit.oldState;
        var newState = currentStudentAudit.newState;
        if(method == "Create"){
            console.log("enterd into creted ///");
            console.log(newState);
            const addedStudent = await Student.create(newState.student);
            const newid = addedStudent._id;
            console.log(newid);
            currentStudentAudit.stuId = newid;
            console.log("ehllo");
            const nc = await currentStudentAudit.save();
            console.log("eee")
            console.log(nc);
            // const newId = addedStudent._id;
            // console.log(newId);
            // console.log(currentStudentAudit.stuId);
            // console.log(currentStudentAudit);
            // currentStudentAudit.stuId = newId;
            // currentStudentAudit.save();
            // console.log(currentStudentAudit.stuId);
            // console.log(currentStudentAudit);
            return;
            
        }
        if(method == "Delete"){
            var studentId = currentStudentAudit.stuId;
            await Student.deleteOne({_id: studentId});
        }
        if(method == "Update"){
            await Student.updateOne({
                id: oldState._id
            },{
                $set: newState
            });
        }
    }

    revertBack(currentStudentAudit);
    return res.status(200).json({message: "Success !!"});
}

module.exports = {
    getStudentsAudit,
    revertStudentAudit
}