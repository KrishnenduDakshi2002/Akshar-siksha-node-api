const router = require('express').Router();
//MODELS
const User = require('../model/User');
const Student = require('../model/Student');
const Teacher = require('../model/Teacher');
// JSON WEB TOKEN
require('dotenv/config');

// VERIFY TOKEN 
const verify = require('../verifyToken');
const { populate } = require('../model/User');

router.get('/',verify, async (req,res)=>{

    const userId = req.user._id;
    const student = await Student.findOne({Student_id : userId});

    const query = [
        {
            path : 'Classrooms',
            select : 'Title Subject Description'
        },
        {
            path : 'Student_id',
            select : 'first_name last_name role age email phoneNumber institute'
        },
        {
            path : 'NoticeBoard'
            
        },
        {
            path : 'Evaluation'
            
        },
        {
            path : 'Tests',
            select : 'topic subject dateTime questionPaper'
        }
    ]
    console.log(student);
    if(student){
        // const updated_student = (await (await student.populate('Student_id')).populate({
        //     path: 'Classrooms',
        //     populate :[
        //     {
        //         path:'Teachers',
        //         populate : 'Teacher_id'
        //     }
            
        //     ]
        // }));

        const updated_student = await student.populate(query);
        res.json({"status":200,"student":updated_student});
    }else{
        res.json({"status":400,"ErrorMessage":"Error while getting student"});
    }

})

module.exports = router;