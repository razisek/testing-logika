function PrintStar() {
    let line = 8;
    let star = "";
    let lineCount = line;
    for (var i = 0; i < line; i++) {
        let countStar = (lineCount * 2) - 1;
        for (var j = countStar; j > 0; j--) {
            star += "* ";
        }
        star += "\n";
        lineCount--;
    }

    return star;
}

console.log(PrintStar());