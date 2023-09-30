const express = require("express")

const router = express.Router()

require("dotenv").config()


const { User, ValidateSchema } = require("./models/user.model")

router.post("/", async (req, resp) => {
    // const user = await User.create(req.body)

    try {
        const { error } = ValidateSchema(req.body)
        if (error) {
            return resp.status(400).send({ message: error.details[0].message })
        }
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            return resp.status(409).send({ message: "User with given email already exists" })
        }
        const salt = await bcrypt.genSalt(Number(process.env.SALT))
        const hashPassword = await bcrypt.hash(req.body.password, salt)

        await new User({ ...req.body, password: hashPassword }).save()

        resp.status(201).send(({ message: "User created Succeessfully !" }))

    }
    catch (err) {
        resp.status(500).send("Internal Server Error !")
    }

})



module.exports = router;