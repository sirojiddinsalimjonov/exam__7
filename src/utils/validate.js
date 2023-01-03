import Joi from 'joi'
export const schemaSign = Joi.object({
    username: Joi.string().min(8).required(),
    password: Joi.string().min(8).required()
})

export const postsSchema = Joi.object({
    title: Joi.string().min(8).required(),
    description: Joi.string().min(18).required(),
    text: Joi.string().min(8).required(),
    job: Joi.string().min(0).required(),
    category: Joi.string().min(0).max(28).required(),
    subcategory: Joi.string().min(0).required(),
    datey: Joi.string().min(2).required(),
    dateh: Joi.string().min(2).required(),
    fullname: Joi.string().min(8).required(),
    type: Joi.string().min(2).required(),
    phone: Joi.string().min(2).required(),
    postImg: Joi.string().pattern(new RegExp(/\.(gif|jpe?g|png|webp)$/i))
})
