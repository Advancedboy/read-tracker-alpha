class Book {
	constructor(name, papersAmount,deadLineDate){
		this.name = name
		this.papersAmount = papersAmount
		this.deadLineDate = new Date(deadLineDate)
		alert('Book has been added successfully!')
		// this.calculateDailyPageCount(papersAmount, deadLineDate)
	}

	calculateDailyPageCount(papersAmount, deadLineDate){
		let now = new Date(),
			endDate = new Date(deadLineDate),
			timeDiff = Math.abs(endDate.getTime() - now.getTime()),
			diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
		// console.log(diffDays)
		// return now
		return Math.trunc(papersAmount / diffDays)
	}
	printTime(now){
		let day = now.getDate(),
			month = now.getMonth(),
			year = now.getFullYear()
		return `${day}.${month + 1}.${year}`
	}

	addReadPages(readPages){
		this.papersAmount -= readPages;
	}

}

alert('Введите данные о книге...')
const bookName = prompt('Введите название книги: ')
const papersCount = parseInt(prompt('Введите количество страниц: '))
alert('Введите дату окончания прочтения в формате:(16 октября 2020 => 2020, 10, 16')
const year = parseInt(prompt('Введите год, наппример: 2022'))
const month = parseInt(prompt('Введите месяц'))
const day = parseInt(prompt('Введите день'))

const book = new Book(bookName, papersCount, [year, month, day])

// alert(book.addReadPages())
// const cleanCodeBook = new Book('Clean Code', 500, [2022, 8, 19])
// console.log(cleanCodeBook.calculateDailyPageCount(500, [2022, 8, 19]))
// console.log(cleanCodeBook.deadLineDate)
// console.log(cleanCodeBook.printTime(new Date()))
alert(book.calculateDailyPageCount(papersCount, [year, month, day]))
