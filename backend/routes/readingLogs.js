import express from 'express';
import { 
  createReadingLog, 
  getReadingLogs 
} from '../controllers/readingLogsController.js';

const router = express.Router();

// GET /api/reading-logs - Get all reading logs for a user
router.get('/', getReadingLogs);

// POST /api/reading-logs - Create a new reading log
router.post('/', createReadingLog);

export default router;
