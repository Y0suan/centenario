import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import moment from 'moment';

export default async function handle(req, res) {
  const { method } = req;

  try {
    await mongooseConnect();

    if (method === 'GET') {
      if (req.query?.id) {
        const product = await Product.findOne({ _id: req.query.id });

        if (!product) {
          return res.status(404).json({ error: 'Product not found' });
        }

        return res.json(product);
      } else {
        // Obtener eventos para el calendario
        const events = await Product.find().select('title fecha').exec();

        // Manejar eventos vacíos
        if (events.length === 0) {
          return res.json([]);
        }

        // Formatear los eventos para que sean compatibles con react-big-calendar
        const formattedEvents = events.map(event => ({
          title: event.title,
          start: moment(event.fecha).toDate(),
          end: moment(event.fecha).toDate(),
          id: event._id.toString(),
        }));
        return res.json(formattedEvents);
      }
    } else {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
 } catch (error) {
        console.error('Error fetching data:', error);
        return {
          props: { events: [], error: 'Error fetching data' }, // Puedes incluir el mensaje de error en las props
        };
      }
      
  }
