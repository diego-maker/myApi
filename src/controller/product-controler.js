

exports.post = ('/', (req, res, next) => {
    res.status(201).send(req.body);
});

exports.delete = ('/:produto', (req, res, next) => {
    const itemDeleletado = req.params.produto
    res.status(200).send({
        deletado: itemDeleletado,
        title: "delet criado manooo"
    });
});



exports.put = ('/:id' , (req, res, next) => {
    const id =  req.params.id;
    res.status(200).send({
        id: id,
        item:req.body
    });
});
