
import { Schema, model, models } from 'mongoose'

const fileSchema = new Schema({
    title: {
        type: String,
        required: [true, 'El titulo del archivo es requerido'],
        unique: false,
    },
    content: {
        type: String,
        required: [true, 'al menos una linea de código es requerida'],
        unique: false
    },
    userId: {
        type: String,
        required: [true, 'El ID del usuario es requerido']
    },
    type: {
        type: String,
        required: [true, 'El tipo de archivo es requerido'],
        unique: false
    }

},
    {
        timestamps: true
    }
)


const File = models.File || model('File', fileSchema)
export default File