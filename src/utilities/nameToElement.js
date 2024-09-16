// take a list of elements
// const elements = require('./elements');
const elements = [
    'h', 'he', 'li', 'be', 'b', 'c', 'n', 'o', 'f', 'ne', 
    'na', 'mg', 'al', 'si', 'p', 's', 'cl', 'ar', 
    'k', 'ca', 'sc', 'ti', 'v', 'cr', 'mn', 'fe', 'co', 'ni', 'cu', 'zn', 'ga', 'ge', 
    'as', 'se', 'br', 'kr', 
    'rb', 'sr', 'y', 'zr', 'nb', 'mo', 'tc', 'ru', 'rh', 'pd', 'ag', 'cd', 'in', 'sn', 
    'sb', 'te', 'i', 'xe', 
    'cs', 'ba', 'la', 'ce', 'pr', 'nd', 'pm', 'sm', 'eu', 'gd', 'tb', 'dy', 'ho', 'er', 
    'tm', 'yb', 'lu', 'hf', 'ta', 'w', 're', 'os', 'ir', 'pt', 'au', 'hg', 'tl', 'pb', 
    'bi', 'po', 'at', 'rn', 
    'fr', 'ra', 'ac', 'th', 'pa', 'u', 'np', 'pu', 'am', 'cm', 'bk', 'cf', 'es', 'fm', 
    'md', 'no', 'lr', 'rf', 'db', 'sg', 'bh', 'hs', 'mt', 'ds', 'rg', 'cn', 'nh', 'fl', 
    'mc', 'lv', 'ts', 'og'
];


//input name and make array name
my_name = 'raaghib'
my_name_arr = []

//make subset of the name with one and two characters
for (let i = 0; i < my_name.length; i++) {
    single = my_name.slice(i, i + 1)
    my_name_arr.push(single)
    if (i + 2 <= my_name.length) {
        couple = my_name.slice(i, i + 2)
        my_name_arr.push(couple)
    }
}
console.log(my_name_arr)

//filter the subsets which represents any element of the periodic table  existing_elements
const my_name_arr_filter = my_name_arr.filter((item) => elements.includes(item));
console.log(my_name_arr_filter)

// main
const alternate_points = [];
const matched = [];
let count = 0

function find_element(n=0){
    
    if(count !=0){
        alternate_points.pop()
        matched = matched.slice(0,alternate_points[1])
    }
    count = count+1;

    for(let i=n;i<my_name.length;){
        let two_char = my_name.slice(i, i + 2)
        if(my_name_arr_filter.includes(two_char)){
            matched.push(two_char)
            let one_char = my_name.slice(i, i + 1)
            if(my_name_arr_filter.includes(one_char)){
                alternate_points.push([i,matched.length])
            }
            i=i+2;
        }
        else{
            let one_char = my_name.slice(i, i + 1)
            if(my_name_arr_filter.includes(one_char)){
                matched.push(one_char)
                i=i+1
            }
            else{
                if(alternate_points.length != 0){
                    find_element(alternate_points[alternate_points.length][0])
                }
                else{
                    let result = 'no matching' 
                    return result
                }
            }
        }
    }

    return matched
}

// console.log('result')
// console.log(find_element())