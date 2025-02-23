import connectDB from '@/lib/mongodb';
import Product from '@/models/Product';
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === 'POST') {
    console.log(req.body)
    const { name, category } = req.body;

    if (!name || !category) {
      return res.status(400).json({ message: 'All fields are required' });
    }


    const product = new Product({
      ...req.body,
      category: new mongoose.Types.ObjectId(req.body.category),
    });
    await product.save();
    return res.status(201).json(product);
  }

  if (req.method === 'GET' && req.query.id) {
    const { id } = req.query;
    if (!mongoose.Types.ObjectId.isValid(id as string)) {
      return res.status(400).json({ message: 'Invalid product ID' });
    }
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json(product);
  }

  if (req.method === 'GET') {
    const products = await Product.find();
    return res.status(200).json(products);
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
