people = [
    {
        name: "Mohandas Karamchand Gandhi",
        born: 1869,
        dead: 1948
    },

    {
        name: "Bhagat Singh",
        born: 1907,
        dead: 1931
    },

    {
        name: "Sardar Vallabhai Patel",
        born: 1875,
        dead: 1950
    },

    {
        name: "Jawaharlal Nehru",
        born: 1889,
        dead: 1964
    },

    {
        name: "Lal Bahadur Shastri",
        born: 1904,
        dead: 1956
    },

    {
        name: "Dr Rajendra Prasad",
        born: 1884,
        dead: 1963
    },

    {
        name: "Subhas Chandra Bose",
        born: 1897,
        dead: 1945
    },

    {
        name: "Lala Rajpat Rai",
        born: 1895,
        dead: 1928
    },

    {
        name: "Mangal Pandey",
        born: 1827,
        dead: 1857
    },

    {
        name: "Nana Sahib",
        born: 1824,
        dead: 1859
    }
]

updatePeople = person => {
    code = "<ul>"
    searched = filterListObject(people, person, "name")
    for (const iterator of searched) {
        code += "<li>" + iterator.name + " (" + iterator.born + "&ndash;" + iterator.dead + ")</li>"
    }
    code += "</ul>"

    setValue("people", code)
}