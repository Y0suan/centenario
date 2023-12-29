// Importa el modelo de Category
import Category from "@/models/Category";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

// Resto del código...

export default async function handle(req, res) {
    const { method } = req;
    await mongooseConnect();

    // Resto del código...

    if (method === 'GET') {
        if (req.query?.id) {
            // Utiliza populate para obtener información de la colección 'Category'
            const product = await Product.findOne({ _id: req.query.id }).populate('category');
            res.json(product);
        } else {
            // Para obtener una lista de productos con información de la colección 'Category'
            const products = await Product.find().populate('category');
            res.json(products);
        }
    }

    if (method === 'POST'){
        const {title,description,whatsapp,images,category,properties,hubicacion,fecha,} = req.body;
        const productDoc = await Product.create({
            title,description,whatsapp,images,category,properties,hubicacion,fecha,
        })
        res.json(productDoc);
    }
    if (method === 'PUT'){
        const {title,description,whatsapp,images,category,properties,hubicacion,fecha,_id} = req.body;
        await Product.updateOne({_id},{title,description,whatsapp,images,category,properties,hubicacion,fecha,});
        res.json(true);
    }

    if (method === 'DELETE'){
        if (req.query?.id){
            await Product.deleteOne({_id:req.query?.id});
            res.json(true);
        }
    }
}