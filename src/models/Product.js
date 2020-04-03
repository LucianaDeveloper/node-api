const mongoose = require("mongoose");/* Importando mongoose */
const mongoosePaginate = require("mongoose-paginate");/* Importar após comando no terminal */

const ProductSchema = new mongoose.Schema({ /* Criar função e passar objeto */
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

ProductSchema.plugin(mongoosePaginate);

/* Registrar model na aplicação e seus dados */
mongoose.model("Product", ProductSchema);