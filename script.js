people = [
    {
        name: "Mohandas Karamchand Gandhi",
        born: 1869,
        dead: 1948,
        place: "Porbandar",
        descr: "Affectionately known as 'Bapu' or the 'Father of the Nation'. Fought for freedom through non-violence."
    },

    {
        name: "Bhagat Singh",
        born: 1907,
        dead: 1931,
        place: "Banga",
        descr: "Revolutionist who advocated freedom by radical means. Member of HSSRA."
    },

    {
        name: "Sardar Vallabhbhai Patel",
        born: 1875,
        dead: 1950,
        place: "Nadlad",
        descr: "One of Gandhi's political lieutenants. First Deputy PM and Home Minister of India."
    },

    {
        name: "Jawaharlal Nehru",
        born: 1889,
        dead: 1964,
        place: "Allahabad",
        descr: "Freedom fighter who worked alongside Mahatma Gandhi. First Prime Minister of independent India."
    },

    {
        name: "Lal Bahadur Shastri",
        born: 1904,
        dead: 1956,
        place: "Mughalsarai",
        descr: "Famous freedom fighter and second PM of India."
    },

    {
        name: "Dr Rajendra Prasad",
        born: 1884,
        dead: 1963,
        place: "Ziradei",
        descr: "Great freedom fighter. Also first President of India."
    },

    {
        name: "Subhas Chandra Bose",
        born: 1897,
        dead: 1945,
        place: "Cuttack",
        descr: "Nationalist and wartime leader. Bestowed with the title of 'Netaji'."
    },

    {
        name: "Lala Lajpat Rai",
        born: 1895,
        dead: 1928,
        place: "Dhudike",
        descr: "Great author, revolutionist, and politician. AKA 'Punjab Kesari'."
    },

    {
        name: "Mangal Pandey",
        born: 1827,
        dead: 1857,
        place: "Nagwa",
        descr: "Soldier of Bengal Infantry. Rebel whose execution sparked of the Revolt of 1857."
    },

    {
        name: "Nana Sahib",
        born: 1824,
        dead: 1859,
        place: "Bithoor",
        descr: "Adopted son of Peshwa. Great and dynamic leader who led the Revolt at Kanpur."
    }
]

updatePeople = person => {
    code = ""
    searched = filterListObject(people, person, "name")
    for (const iterator of searched) {
        code += "<tr><td>" + iterator.name + "</td><td>" + iterator.born + "</td><td>" + iterator.dead + "</td><td>" + iterator.place + "</td><td>" + iterator.descr + "</td></tr>"
    }

    setValue("people", code)
}

submit = () => {
    let correct =  0
    if (getInput("q1") == 1947) {
        correct ++
    }
    if ((getInput("q2")).toLowerCase() == "mohandas karamchand gandhi") {
        correct ++
    }
    if ((getInput("q3")).toLowerCase() == "bahadur shah zafar") {
        correct ++
    }

    if (correct == 3) {
        document.getElementById("ship").src = "win.png"
        setValue("result", "You win! :)")
    } else {
        document.getElementById("ship").src = "lose.png"
        setValue("result", "You lose! :(")
    }
}