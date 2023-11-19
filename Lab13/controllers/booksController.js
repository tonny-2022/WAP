const Book=require('../models/books');

exports.getAllBooks= (req,res)=>{

res.json(Book.getAllBooks());
}


exports.getBookById=(req,res)=>{

    
    res.json(Book.getBookById(req.params.id ));
}

exports.saveBook=(req,res)=>{
    console.log(req.body);
    const{title,ISBN,publishDate,author}=req.body;
    new Book(null,title,ISBN,publishDate,author).saveBook();
    res.status(201).end();
}



exports.updateBookById=(req,res)=>{
  const{title,ISBN,publishDate,author}=req.body;
  const book=new Book(null,title,ISBN,publishDate,author);
 // book.id=req.params.id;
  book.updateBookById(req.params.id);
  res.status(200).json(book);
}

exports.deleteBookById=(req,res)=>{

    Book.deleteBookById(req.params.id);
    res.status(200).end();
}