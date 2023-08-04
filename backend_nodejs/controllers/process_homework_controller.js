const ProcessModel = require('../models/mongo_process')
const mongoose = require('mongoose')
const nodemailer = require("nodemailer");
var handlebars = require('handlebars');
var fs = require('fs');
const pug = require('pug');
var readHTMLFile = function (path, callback) {
    fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
        if (err) {
            throw err;
            callback(err);
        }
        else {
            callback(null, html);
        }
    });
};
const findProcess = async (req, res) => {
    const process_from_db = await ProcessModel.find({}).sort({ createdAt: -1 })
    res.status(200).json(process_from_db);

}


const One_process = async (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.student_id)) {
        return res.status(404).json({ error: 'not legal student id!' });
    }
    const process_from_db = await ProcessModel.findOne({ student_id: req.params.student_id })
    res.status(200).json(process_from_db);
}
const All_processes_One_student = async (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.student_id)) {
        return res.status(404).json({ error: 'not legal student id!' });
    }
    const process_from_db = await ProcessModel.find({ student_id: req.params.student_id })
    res.status(200).json(process_from_db);
}

const Save_process = async (req, res, next) => {
    let process = new ProcessModel({
        student_id: req.body.student_id,
        sessions: req.body.sessions,
        homework: req.body.homework,
        name: req.body.name
    })

    process.save()
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json(error)
        })
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: '51passpte@gmail.com', // generated ethereal user
            pass: 'clsrlzjvgycbcpbv', // generated ethereal password
        },
    });
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var newdate = year + "/" + month + "/" + day;
    readHTMLFile(__dirname + '/emailPug/welcome.pug', function (err, html) {
        var html = pug.renderFile(__dirname + '/emailPug/welcome.pug', {
            dateInPug: newdate,
            nameInPug: req.body.name,
            homeworkInPug: req.body.homework,
            sessionInPug: req.body.sessions
        })
        var template = handlebars.compile(html);
        var htmlToSend = template(html);
        var mailOptions = {
            from: '"澳洲小马哥" <51passpte@gmail.com>',
            to: `adelaideneocs@gmail.com, ${req.body.email}`,
            subject: `${req.body.name} 您好,此邮件由授课终端自动生成, 请勿回复`,
            html: htmlToSend
        };
        let info = transporter.sendMail(mailOptions, function (error, response) {
            if (error) {
                console.log(error);
                callback(error);
            } else {
                console.log(response);
            }
        });
    });

}

module.exports = { findProcess, One_process, Save_process, All_processes_One_student };


