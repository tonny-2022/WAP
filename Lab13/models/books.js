
let books=[
            {id:1,title:"How to Win",ISBN:"234-778-99",publishDate:"30-11-2020",author:"Mark Cuban"},
            {id:2,title:"The right call",ISBN:"234-778-99",publishDate:"15-11-1993",author:"Sally jenkins"},
            {id:3,title:"Never finished",ISBN:"234-778-99",publishDate:"30-11-2002",author:"David Goggins"},

];
let bookid=4;
module.exports=class Book{

    constructor(id,title,ISBN,publishDate,author){
       this.id=id;
       this.title=title;
       this.ISBN=ISBN;
       this.publishDate=publishDate;
       this.author=author;
    }


    static getAllBooks(){

      return  books;
    }

    static getBookById(id){
     
      return books.find(bk=>bk.id==id);
    }

    

     saveBook(){
        this.id=bookid++;
        books.push(this);

    }

  updateBookById(id){
   const index=books.findIndex(bk=>bk.id==id);
    if(index>-1){
    this.id=id;
    books[index]=this;
    }else{

        throw new Error(`Book with ID: ${id}  doesnot exist`);
    }

    }

    static deleteBookById(id){

       const index=books.findIndex(bk=>bk.id==id);

        if(index>-1){

           books.splice(index,1);
        }else{
            throw new Error(`Book  with ID: ${id}  your tryingg to delete doesnot exist`);

        }
    }

}