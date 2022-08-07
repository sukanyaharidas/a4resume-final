// const express = require("express")
// const resumerouter = express.Router();


// resumerouter.post('/insert', function (req, res) {
//     console.log('req.body');
//     var resumeinputs = {
// personal:[{
//     qualification: req.body.qualification,
//     courseDetails: req.body.courseDetails,
//     institution: req.body.institution,
//     startDate: req.body.startDate,
//     course: req.body.course,
//     endDate: req.body.endDate,
// }],
// educational:[{
//     name: req.body.name,
//     role: req.body.role,
//     aboutMe: req.body.aboutMe,
//     email: req.body.email,
//     phone: req.body.phone,
//     image: req.body.image,
//     address: req.body.address,
//     city: req.body.city,
//     pin: req.body.pin
// }],
// workexp:[{
//     jobProfile:req.body.jobProfile,
//     startDate: req.body.startDate,
//     companName: req.body.companName,
//     endDate: req.body.endDate,
//     jobDescription: req.body.jobDescription,
// }],
// skills:[{
//     skill: req.body.skill,
// }],
// hobbies:[{
//     hobby: req.body.hobby
// }]

//     }

//     var inputs = new resumecred(resumeinputs);
//     inputs.save()
// })



// resumerouter.put('/update', (req, res) => {
//     console.log(re.body);
//     id = req.body._id
//     Name = req.body.Name,
//         email = req.body.email,
//         phonenumber = req.body.phonenumber,
//         address = req.body.address,
//         Link1 = req.body.Link1,
//         tenthedu = req.body.tenthedu,
//         twelthedu = req.body.twelthedu,
//         collegeedu = req.body.collegeedu,
//         certificate1 = req.body.certificate1,
//         certificate2 = req.body.certificate2,
//         hobbies = req.body.hobbies,
//         skill1 = req.body.skill1,
//         skill2 = req.body.skill2
//     resumecred.findByIdAndUpdate({ "_id": id },
//         {
//             $set: {
//                 "Name": Name,
//                 "email": email,
//                 "phonenumber": phonenumber,
//                 "address": address,
//                 "Link1": Link1,
//                 "tenthedu": tenthedu,
//                 "twelthedu": twelthedu,
//                 "collegeedu": collegeedu,
//                 "certificate1": certificate1,
//                 "certificate2": certificate2,
//                 "hobbies": hobbies,
//                 "skill1": skill1,
//                 "skill2": skill2
//             }
//         })
//         .then(function () {
//             res.send();
//         })
// })


// resumerouter.delete('/remove', (req, res) => {
//     id = req.params.id;
//     resumecred.findByIdAndRemove({ "_id": id })
//         .then(() => {
//             console.log('success')
//             res.send();
//         })
// })

// module.exports = resumerouter;