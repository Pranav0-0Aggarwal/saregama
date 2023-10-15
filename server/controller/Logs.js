// Write the code to get all the relevant commits / logs.
const StudentAudit = require('../models/StudentAudit');
const Student = require('../models/Student');


const getStudentsAudit = async(req,res)=>{
    const studentAudits = await StudentAudit.find()
    return res.status(200).json({audits : studentAudits});
};

const revertStudentAudit = async(req,res)=>{
    console.log("Entered into revert audit");
    const data = req.body;
    const id = data.id;
    const curr_v = data.version;
    console.log(`current verion ${curr_v} ${data.version}`)
    // const parent_v = data.version;
    // const targetStudentAudit = await StudentAudit.find({_id: id});
    const currentStudentAudit = await StudentAudit.findOne({version : curr_v});
    console.log(currentStudentAudit);
    async function revertBack(currentStudentAudit){
        console.log(`i am in revert Back .... `);
        console.log(currentStudentAudit);
        // base case
        if(currentStudentAudit == null){
            // do something
            // console.log("i am in base case")
            await Student.deleteMany({ _id: {$exists: true} });
            const arr = await Student.find({})
            // console.log("after delete");
            console.log(arr);
            // console.log("after the delete many function");
            return;
        }
        const parentStudentAudit = await StudentAudit.findOne({_id : currentStudentAudit.parentAuditId});
        // console.log('parent audit :');
        console.log(parentStudentAudit);

        await revertBack(parentStudentAudit)
        // var version = Student.dataSize()+1;
        var method = currentStudentAudit.method;
        var oldState = currentStudentAudit.oldState;
        var newState = currentStudentAudit.newState;
        if(method == "Create"){
            console.log("enterd into creted ///");
            // const all = await Student.find({});
            // console.log(all);
            console.log(newState);
            
            await Student.create(newState.student);
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