const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    cats.push("Ralph")
}

function destructivelyPrependCat() {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const copyOfCats = [...cats, "Broom"]
    return copyOfCats;
}

function prependCat(name) {
    const prependOfCats = ["Arnold", ...cats]
    return prependOfCats;
}

function removeLastCat() {
    const removeCats = [...cats.slice(0, 2)]
    return removeCats;
}

function removeFirstCat() {
    const deleteCats = [...cats.slice(1)]
    return deleteCats
}
