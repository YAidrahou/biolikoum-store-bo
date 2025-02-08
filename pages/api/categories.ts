import connectDB from '@/lib/mongodb';
import Category from '@/models/Category';
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === 'POST') {
    console.log(req.body)
    const { name, parent_id } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'All fields are required' });
    }


    const category = new Category({
      name,
      parent_id : parent_id ? new mongoose.Types.ObjectId(parent_id) : null
    });
    await category.save();
    return res.status(201).json(category);
  }

  if (req.method === 'GET') {
    const categorys = await Category.find();
    return res.status(200).json(categorys);
  }

  if (req.method === 'DELETE') {
    const { id } = req.query; 

    if (!id) {
      return res.status(400).json({ message: 'ID is required' });
    }

    await Category.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Category deleted successfully' });
  }

  if (req.method === 'PUT') {
    const { _id, name } = req.body;

    if (!_id || !name) {
      return res.status(400).json({ message: 'ID and name are required' });
    }

    const category = await Category.findByIdAndUpdate(_id, { ...req.body }, { new: true });
    return res.status(200).json(category);
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
