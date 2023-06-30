/* eslint-disable indent */
const validateBody = (req, res, next) => {
    const {body} = req;
    
    if (body.title === undefined) {
        res.status(400).json({message: 'O campo title é requerido'});
    }

    if (body.title === '') {
        res.status(400).json({message: 'O campo title não pode ser vazio'});
    }

    next();
};

export default validateBody;