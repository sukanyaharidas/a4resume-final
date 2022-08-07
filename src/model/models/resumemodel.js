const mongoose = require ("mongoose");

const Schema=mongoose.Schema;

const resumedetails = new Schema({

        personal:[{
            name: String,
            role: String,
            aboutMe: String,
            email: String,
            phone: String,
            image: String,
            address: String,
            city: String,
            pin: String
        }],
        educational:[{ qualification: String,
          courseDetails: String,
          institution: String,
          startDate: String,
          course: String,
          endDate: String
            
        }],
        workexp:[{
            jobProfile:String,
            startDate1: String,
            companyName: String,
            endDate1: String,
            jobDescription: String,
        }],   
        skills:  [{
            skill: String,
        
          }],
          hobbies:
          [{
            hobby: String,
        
          }],
        userid: String ,
        profileImage:String 

}
)

var resumecred = mongoose.model('resumecred', resumedetails);
module.exports = resumecred;