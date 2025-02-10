import connectDB from '@/lib/mongodb';
import Stock from '@/models/Stock';
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';

async function getStockWithDetails() {
  return Stock.aggregate([
    {
      $lookup: {
        from: 'sizes',
        localField: 'size_id',
        foreignField: '_id',
        as: 'sizeDetails'
      }
    },
    { $unwind: { path: '$sizeDetails', preserveNullAndEmptyArrays: true } }, // To avoid errors on missing data
    {
      $lookup: {
        from: 'products',
        localField: 'sizeDetails.product_id',
        foreignField: '_id',
        as: 'productDetails'
      }
    },
    { $unwind: { path: '$productDetails', preserveNullAndEmptyArrays: true } },
    {
      $lookup: {
        from: 'categories',
        localField: 'productDetails.category',
        foreignField: '_id',
        as: 'categoryDetails'
      }
    },
    { $unwind: { path: '$categoryDetails', preserveNullAndEmptyArrays: true } },
    {
      $project: {
        _id: 1,
        quantity: 1,
        status: 1,
        'sizeDetails.size': 1,
        'sizeDetails.price': 1,
        'productDetails.name': 1,
        'productDetails.image': 1,
        'categoryDetails.name': 1
      }
    }
  ]);
}

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
    const savedStock = await getStockWithDetails();
    const newStock = savedStock.find((item: any) => item._id.toString() === stock._id.toString());
    return res.status(201).json(newStock);
  }

  if (req.method === 'GET') {
    try {
      const stockListWithDetails = await getStockWithDetails();

      return res.status(200).json(stockListWithDetails);
    } catch (error:any) {
      return res.status(500).json({ error: 'An error occurred', details: error.message });
    }
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
