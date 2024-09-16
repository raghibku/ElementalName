import { allElementsData } from "../assets/data";

const periodicTableSymbols = new Set([
    "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca",
    "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y",
    "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce",
    "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir",
    "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm",
    "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", 
    "Lv", "Ts", "Og"
]);

// Function to check if a substring exists in the periodic table
const matchElementSymbol = (name, startIndex) => {
    // Try 2-letter symbols first
    let twoLetter = name.slice(startIndex, startIndex + 2).charAt(0).toUpperCase() + name.slice(startIndex, startIndex + 2).charAt(1).toLowerCase();
    if (periodicTableSymbols.has(twoLetter)) {
        return twoLetter;
    }

    // Then try 1-letter symbols
    let oneLetter = name[startIndex].toUpperCase();
    if (periodicTableSymbols.has(oneLetter)) {
        return oneLetter;
    }

    return null;
};

const getElementArrayFromName = (name) => {
    let result = [];
    let i = 0;
    
    while (i < name.length) {
        let matchedSymbol = matchElementSymbol(name, i);
        
        if (matchedSymbol) {
            result.push(matchedSymbol);
            i += matchedSymbol.length; // Move forward by 1 or 2 letters
        } else {
            result.push(name[i]); // Add unmatchable letter
            i++; // Move forward by 1 letter
        }
    }
    
    return result;
};

export const detailedArr = (name) => {
    const elementsArr = [];
    const elementList = getElementArrayFromName(name);

    elementList.forEach(item => {
        const lowerCasedItem = item.toLowerCase();
        
        if (periodicTableSymbols.has(item)) {
            const elementDetails = allElementsData.find(element => element.symbol.toLowerCase() === lowerCasedItem);
            
            if (elementDetails) {
                elementsArr.push(elementDetails);
            } else {
                elementsArr.push({ symbol: item, error: 'Details not found' }); // Handle missing element
            }
        } else {
            elementsArr.push({ symbol: item }); // Push non-element items as is
        }
    });

    return elementsArr;
};


// Example usage:
const name = "Megan";
const elementArray = getElementArrayFromName(name);
console.log(elementArray);
