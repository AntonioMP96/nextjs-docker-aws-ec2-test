import { Schema, model, models } from 'mongoose'


const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'El email es requerido!'],
        match: [
            /^\w+([\-]?\w+)*@\w+([\-]?\w+)*(\.\w{2,3})+$/,
            "El email no es valido"
        ]
    },
    password: {
        type: String,
        required: [true, "La contraseña es requerida!"],
        select: false
    },
    name: {
        type: String,
        required: [true, 'El nombre es requerido!'],
        minLength: [4, "El nombre debe tener al menos 4 caracteres!"],
        kMaxLength: [50, "El nombre debe tener menos de 50 caracteres!"]
    },
})

const User = models.User || model('User', userSchema)
export default User