import connectDB from '@/lib/mongodb';
import Size from '@/models/Size';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === 'POST') {
    console.log(req.body)
    const { name, price } = req.body;

    if (!name || !price ) {
      return res.status(400).json({ message: 'All fields are required' });
    }


    const size = new Size({
        name,
        price
    });
    await size.save();
    return res.status(201).json(size);
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
    const { _id, name, price } = req.body;

    if (!_id || !name || !price) {
      return res.status(400).json({ message: 'ID and name are required' });
    }

    const size = await Size.findByIdAndUpdate(_id, { name, price }, { new: true });
    return res.status(200).json(size);
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
