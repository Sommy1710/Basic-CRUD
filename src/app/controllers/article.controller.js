const getAllArticles = function (req, res)
{
    return res.json({success: true, message: 'All articles'});
}

const getArticleById = function (req, res)
{
    const {id} = req.params;

    return res.json({
        success: true,
        message: `Article with id ${id}`
    });
}

const createArticle = function (req, res)
{
    return res.json({success: true, message: 'Article created'});
}

const updateArticle = function (req, res)
{
    const {id} = req.params;

    return res.json({
        success: true,
        message: `article with id ${id} updated`
    });
}

const deleteArticle = function (req, res)
{
    const {id} = req.params;
    return res.json({
        success: true,
        message: `articles with id ${id} deleted`
    });   
}

export 
{
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle

}