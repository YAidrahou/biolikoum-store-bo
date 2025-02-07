import connectDB from '@/lib/mongodb';
import Size from '@/models/Size';
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === 'POST') {
    console.log(req.body)
    const { product_id, size, price } = req.body;

    if (!product_id || !size || !price ) {
      return res.status(400).json({ message: 'All fields are required' });
    }


    const sizeR = new Size({
        product_id : new mongoose.Types.ObjectId(product_id),
        size,
        price
    });
    await sizeR.save();
    return res.status(201).json(sizeR);
  }

  if (req.method === 'GET') {
    const sizes = await Size.find();
    return res.status(200).json(sizes);
  }

  if (req.method === 'DELETE') {
    const { id } = req.query; 

    if (!id) {
      return res.status(400).json({ message: 'ID is required' });
    }

    await Size.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Size deleted successfully' });
  }

  if (req.method === 'PUT') {
    const { _id, size, price, product_id } = req.body;

    if (!_id || !size || !price || !product_id) {
      return res.status(400).json({ message: 'ID and name are required' });
    }

    const sizeR = await Size.findByIdAndUpdate(_id, { 
      product_id : new mongoose.Types.ObjectId(product_id),
      size,
      price 
    }, { new: true });
    return res.status(200).json(sizeR);
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
