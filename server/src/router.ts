import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { createCategory } from './app/use-cases/categories/create-category';
import { deleteCategory } from './app/use-cases/categories/delete-category';
import { listCategories } from './app/use-cases/categories/list-categories';
import { createProduct } from './app/use-cases/products/create-product';
import { listProducts } from './app/use-cases/products/list-products';
import { listProductsbyCategory } from './app/use-cases/categories/list-products-by-category';
import { listOrders } from './app/use-cases/orders/list-orders';
import { createOrder } from './app/use-cases/orders/create-order';
import { changeOrderStatus } from './app/use-cases/orders/change-order-status';
import { cancelOrder } from './app/use-cases/orders/cancel-order';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// List categories
router.get('/categories', listCategories);

// Create Category
router.post('/categories', createCategory);

// Create Category
router.delete('/categories/:categoryId', deleteCategory);

// List products
router.get('/products', listProducts);

// Create product
router.post('/products', upload.single('image',), createProduct);

// Get products by category
router.get('/categories/:categoryId/products', listProductsbyCategory);

// List orders
router.get('/orders', listOrders);

// Create order
router.post('/orders', createOrder);

// Change order status
router.patch('/orders/:orderId', changeOrderStatus);

// Delete order
router.delete('/orders/:orderId', cancelOrder);
