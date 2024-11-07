import {Router} from 'express';
import { createArticle, deleteArticle, getAllArticles, getArticleById, updateArticle } from '../app/controllers/article.controller.js';
const router = Router();
 
//Read all articles
router.get('/articles', getAllArticles);

// read an article by id

router.get('/articles/:id',getArticleById); 

//create an article

router.post('/articles', createArticle);

//update an article
router.put('/articles/:id', updateArticle);

//delete article
router.delete('/articles/:id', deleteArticle);

export const appRouter = router;
