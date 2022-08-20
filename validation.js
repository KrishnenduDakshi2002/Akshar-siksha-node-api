// validation
const joi = require('joi');


const registerValidation = (data)=>{

    const schema = joi.object({
        first_name:joi.string().min(6).required(),
        last_name:joi.string().min(6).required(),
        role: joi.string().required(),
        email: joi.string().min(6).max(255).required().email(),
        phoneNumber : joi.string().min(10).max(10).required(),
        address: joi.string().min(2).max(1024).required(),
        institute: joi.string().min(5).max(255),
        password: joi.string().min(6).max(1024).required(),
        password2: joi.ref('password'),
        institute_code: joi.string()

    });

    return schema.validate(data);

}

const loginValidation = (data)=>{

    const schema = joi.object({
    
        email: joi.string().min(6).max(255).email(),
        phoneNumber: joi.string(),
        password: joi.string().min(6).max(1024).required()
    });

    return schema.validate(data);
}

const changePassValidation = (data)=>{

    const schema = joi.object({
        password: joi.string().min(6).max(1024).required(),
        password2: joi.ref('password')
    });

    return schema.validate(data);

}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.changePassValidation = changePassValidation;


// 