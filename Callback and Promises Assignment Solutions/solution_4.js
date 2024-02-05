const books = [
    { title:  'Mathematics', author: 'Archimedes', year: 2010},

    { title:  'Chemistry', author: 'Antoine Lavoisier', year: 2009},

    { title:  'Biology', author: 'Aristotle', year: 2008},

    { title:  'Physics', author: 'Issac Newton', year: 2011},

    { title:  'English', author: 'Geoffrey Chaucer', year: 2005},

    { title:  'Philosophy', author: 'Socrates', year: 2007},

    { title:  'Computer Sc', author: 'Alan Turing', year: 2012},
]


function ArrangeInAlphabeticalOrder(inputObj,callback){
    let BookTitleList = inputObj.map((element)=>{
        return element["title"];
    })
    let inAlphabeticalOrder =  BookTitleList.sort();
    callback(inAlphabeticalOrder)
}


function logResult(result){
    console.log(result);
}


ArrangeInAlphabeticalOrder(books,logResult)