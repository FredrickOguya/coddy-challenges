/*
Connect Beach Flags
Challenge
Easy
Create a function named connectBeachFlags that receives flags as its parameter.
This function aims to connect an array of beach flags into a single string, representing the flags tied together on a windy day at the beach.
Given an array of strings, where each string represents a beach flag, your task is to connect all the flags in the order they appear in the array. The flags should be connected using the string "--" between each flag.
For example:
If the input is ["red", "blue", "green"], the output should be "red--blue--green".
If the input is ["yellow", "red"], the output should be "yellow--red".
If the input is ["pink"], the output should be "pink".
To solve this challenge, you can use array manipulation and string concatenation techniques in JavaScript. Iterate through the array of flags and concatenate each flag with the connecting string "--". Be sure to handle the case when there is only one flag in the array.
Parameter:
flags (string-array): An array of strings, where each string represents a beach flag.
The function should return a string that represents all the beach flags connected together in the order they appear in the
*/
function connectBeachFlags(flags){
    return flags.join(`--`)
}
console.log(connectBeachFlags(['red', 'blue', 'green']))