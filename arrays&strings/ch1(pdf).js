/*
    Cracking the Coding interview (6th edition) Chapter 1 
    Arrays and Strings practice problems
    pg 102 in pdf copy
*/

//1.1 - 

//1.2 - 

//1.3 -

//1.4 -

//1.5 - One Away: There are three types of edits that can be performed on strings: insert a character, 
//remove a character, or replace a character. Given two strings, 
//write a function to check if they are one edit (or zero edits) away. 
//pale, ple = true
//pale, paale = true
//bale, pale = true
//pales, pale = true
//pale, bake = false


function oneAway(s1, s2) {
    let diffs = 0;
    let l1 = s1.length;
    let l2 = s2.length;
    let j = 0;

    if (abs(l1 - l2) > 1){
        return false;
    }

    for (var i=0; i < s1.length; i++) {
        //check for insert
        if (s1[i] !== s2[j] && l1 < l2) {
            diffs++;
            i--;
        }
        //check for remove 
        else if (s1[i] !== s2[j] && l2 < l1) {
            diffs++;
            j--;
        //check for replace
        } else if (s1[i] !== s2[j]) {
            diffs++;
        }
        //check differences
        if(diffs > 1) {
            return false;
        }
        j++;
    }
    return true;

}

//1.6 - String Compression: Implement a method to perform basic string compression using the counts of repeated characters. 
//For example, the string aabcccccaaa would become a2b1c5a3. 
//If the "compressed" string would not become smaller than the original string, your method should return the original string. 
//You can assume the string has only uppercase and lowercase letters (a - z).

var s1 = "aabcccccaaa"

function stringCompress(s) {

}

//1.7 - Rotate Matrix: Given an image represented by an NxN matrix, 
//where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. 
//Can you do this in place? 

var matrix1 = [[1,2],[3,4]];  //=> [[3,1],[4,2]]
// |1|2|    |3|1|       |1|2|3|     |7|4|1|     | 1 | 2 | 3 | 4 |       | 13| 9 | 5 | 1 |
// |3|4|    |4|2|       |4|5|6| =>  |8|5|2|     | 5 | 6 | 7 | 8 |  =>   | 14| 10| 6 | 2 |  [1][1] -> [1][2]
//                      |7|8|9|     |9|6|3|     | 9 | 10| 11| 12|       | 15| 11| 7 | 3 |  [1][2] -> [2][2]
//                                              | 13| 14| 15| 16|       | 16| 12| 8 | 4 |  [2][2] -> [2][1]
function rotateMatrix (matrix) {
    let result = [[]];
    let size = matrix.length;

    for(var i=0; i<size; i++) {
        for (var j=0; j<size; j++){
            result[j][size-i-1] = matrix[i][j];
        }
    }
    return result;
}

function rotateInPlace (matrix) {


}

//1.8 - Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, 
//its entire row and column are set to O. 

matrix1 = [[],[]];

function zeroMatrix (matrix) {

}

//1.9 - String Rotation: Assume you have a method isSubstring which checks if one word is a substring of another. 
//Given two strings, s1 and s2, 
//write code to check if s2 is a rotation of s1 using only one call to isSubstring 
//(e.g., "waterbottle" is a rotation of"erbottlewat"). 

var s1 = "waterbottle"
var s2 = "erbottlewat"

function isSubstring(s1, s2) {

}