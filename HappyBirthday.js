class Human{
    constructor(person){
        this.person = person
    }

    happyBirthday(){
        const [currentTime, birthdayTime] = [new Date(), new Date(this.person.birthday)];
        const isSameDay = ((now, prev) => now.toDateString() === prev.toDateString())(currentTime);

        if(isSameDay){
            console.info(`
                   👨‍💻★★★★★★★★★★★★★★★★★★★★★★★★★★👨‍💻
                 👨‍💻👨‍💻⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡👨‍💻👨‍💻
                👨‍💻👨‍💻   Happy Birthday ${this.person.name}    👨‍💻👨‍💻
                 👨‍💻👨‍💻⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡👨‍💻👨‍💻
                   👨‍💻★★★★★★★★★★★★★★★★★★★★★★★★★★👨‍💻
            `)
        } else {
            console.error(`
                ${this.person.name} Keep Building 🦾🦿 .....
            `)
        }
    }
}

const Bercove = new Human({
    name: 'Bercove',
    birthday: 'September 15, 2021',
    company: 'ITgrepNet',
    jobTitle: 'CTO',
    url: 'http://bercove.itgrepnet.com'
})

Bercove.happyBirthday();