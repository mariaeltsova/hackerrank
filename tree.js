process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        
        var n = parseInt(readLine());
        var height = 1;
        for (var cycle = 0; cycle < n; cycle++) {
            switch (cycle % 2) {
                case 0: 
                     height *= 2;
                     break;
                case 1:
                    heigth += 1;
                    break;
            }
        }
        console.log(height);
    }

}