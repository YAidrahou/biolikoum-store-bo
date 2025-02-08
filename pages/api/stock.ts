import connectDB from '@/lib/mongodb';
import Stock from '@/models/Stock';
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  await connectDB();

  if (req.method === 'POST') {
    console.log(req.body)
    const { size_id, quantity } = req.body;

    if (!size_id || !quantity) {
      return res.status(400).json({ message: 'All fields are required' });
    }


    const stock = new Stock({
      ...req.body,
      size_id: new mongoose.Types.ObjectId(size_id)
    });
    await stock.save();
    return res.status(201).json(stock);
  }

  if (req.method === 'GET') {
    const stockListWithDetails = await Stock.aggregate([
      {
        $lookup: {
          from: 'sizes',
          localField: 'size_id',
          foreignField: '_id',
          as: 'sizeDetails'
        }
      },
      {
        $unwind: '$sizeDetails'
      },
      {
        $lookup: {
          from: 'products',
          localField: 'sizeDetails.product_id',
          foreignField: '_id',
          as: 'productDetails'
        }
      },
      {
        $unwind: '$productDetails'
      },
      {
        $lookup: {
          from: 'categories',
          localField: 'productDetails.category',
          foreignField: '_id',
          as: 'categoryDetails'
        }
      },
      {
        $unwind: '$categoryDetails'
      }
    ]);
    return res.status(200).json(stockListWithDetails);
  }

  if (req.method === 'DELETE') {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: 'ID is required' });
    }

    await Stock.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Stock deleted successfully' });
  }

  if (req.method === 'PUT') {
    const { _id, size_id, quantity } = req.body;

    if (!_id || !size_id || !quantity) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const stock = await Stock.findByIdAndUpdate(_id, {
      ...req.body,
      size_id: new mongoose.Types.ObjectId(size_id),
      quantity

    }, { new: true });
    return res.status(200).json(stock);
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
